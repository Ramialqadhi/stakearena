import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getDisputeBlock } from "@/lib/disputeBlock";

const QUEUE_TTL_MS = 2 * 60 * 1000; // 2 minutes

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const block = await getDisputeBlock(session.user.id);
    if (block.blocked) {
      return NextResponse.json(
        { error: "You have a disputed match pending. Submit your evidence before joining the queue.", challengeId: block.challengeId },
        { status: 403 }
      );
    }

    const { game, stakeAmount } = await request.json();

    if (!game || !stakeAmount || ![5, 15, 25].includes(stakeAmount)) {
      return NextResponse.json({ error: "Game and valid stake amount ($5, $15, or $25) are required" }, { status: 400 });
    }

    const now = new Date();

    // Expire stale WAITING entries and refund them (lazy cleanup)
    const expired = await prisma.matchmakingQueue.findMany({
      where: { status: "WAITING", expiresAt: { lt: now } },
    });
    if (expired.length > 0) {
      await prisma.$transaction(async (tx) => {
        for (const entry of expired) {
          await tx.user.update({
            where: { id: entry.userId },
            data: { balance: { increment: entry.stakeAmount } },
          });
          await tx.matchmakingQueue.update({
            where: { id: entry.id },
            data: { status: "EXPIRED" },
          });
        }
      });
    }

    // Check if user is already in queue
    const existing = await prisma.matchmakingQueue.findFirst({
      where: { userId: session.user.id, status: "WAITING" },
    });
    if (existing) {
      return NextResponse.json({ error: "You are already in the matchmaking queue" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { id: session.user.id } });
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    // Gate: user must have saved credentials for this game
    const savedCreds = user.gameCredentials ? JSON.parse(user.gameCredentials) : {};
    const credentials = savedCreds[game]?.trim() ?? "";
    if (!credentials) {
      return NextResponse.json(
        { error: `You need to add your ${game} credentials in your profile before playing.`, credentialGate: true },
        { status: 400 }
      );
    }

    if (user.balance < stakeAmount) {
      return NextResponse.json({ error: "Insufficient balance" }, { status: 400 });
    }

    // Look for an opponent in the queue
    const opponent = await prisma.matchmakingQueue.findFirst({
      where: {
        game,
        stakeAmount,
        status: "WAITING",
        expiresAt: { gt: now },
        userId: { not: session.user.id },
      },
      orderBy: { createdAt: "asc" },
    });

    if (opponent) {
      // Match found — create challenge
      const result = await prisma.$transaction(async (tx) => {
        // Deduct stake from current user
        await tx.user.update({
          where: { id: session.user.id },
          data: { balance: { decrement: stakeAmount } },
        });

        // Create the active challenge
        const challenge = await tx.challenge.create({
          data: {
            creatorId:           opponent.userId,
            opponentId:          session.user.id,
            game,
            stakeAmount,
            status:              "ACTIVE",
            creatorPaid:         true,
            opponentPaid:        true,
            startedAt:           now,
            isMatchmaking:       true,
            creatorCredentials:  opponent.credentials,
            opponentCredentials: credentials.trim(),
          },
        });

        // STAKE transaction for current user (joining)
        await tx.transaction.create({
          data: {
            userId:      session.user.id,
            type:        "STAKE",
            amount:      stakeAmount,
            status:      "COMPLETED",
            challengeId: challenge.id,
            description: `Quick Match stake — ${game}`,
          },
        });

        // Mark opponent queue entry as matched
        await tx.matchmakingQueue.update({
          where: { id: opponent.id },
          data: { status: "MATCHED", challengeId: challenge.id },
        });

        // Create a MATCHED entry for current user (for history / status lookup)
        await tx.matchmakingQueue.create({
          data: {
            userId:      session.user.id,
            game,
            stakeAmount,
            credentials: credentials.trim(),
            status:      "MATCHED",
            expiresAt:   new Date(now.getTime() + QUEUE_TTL_MS),
            challengeId: challenge.id,
          },
        });

        return challenge;
      });

      return NextResponse.json({ matched: true, challengeId: result.id });
    }

    // No opponent found — enter queue
    const expiresAt = new Date(now.getTime() + QUEUE_TTL_MS);

    await prisma.$transaction(async (tx) => {
      await tx.user.update({
        where: { id: session.user.id },
        data: { balance: { decrement: stakeAmount } },
      });
      await tx.transaction.create({
        data: {
          userId:      session.user.id,
          type:        "STAKE",
          amount:      stakeAmount,
          status:      "COMPLETED",
          description: `Quick Match queue stake — ${game}`,
        },
      });
      await tx.matchmakingQueue.create({
        data: {
          userId:      session.user.id,
          game,
          stakeAmount,
          credentials: credentials.trim(),
          status:      "WAITING",
          expiresAt,
        },
      });
    });

    return NextResponse.json({ matched: false, expiresAt: expiresAt.toISOString() });
  } catch (error) {
    console.error("Matchmaking join error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
