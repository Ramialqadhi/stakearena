import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { sendMatchFoundEmail } from "@/lib/email";
import { READY_DEADLINE_MS } from "@/lib/gameTimers";

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const entry = await prisma.matchmakingQueue.findFirst({
      where: {
        userId: session.user.id,
        status: { in: ["WAITING", "MATCHED"] },
      },
      orderBy: { createdAt: "desc" },
    });

    if (!entry) {
      return NextResponse.json({ status: "idle" });
    }

    if (entry.status === "MATCHED") {
      if (!entry.challengeId) return NextResponse.json({ status: "idle" });

      const challenge = await prisma.challenge.findUnique({
        where: { id: entry.challengeId },
        include: {
          creator:  { select: { username: true } },
          opponent: { select: { username: true } },
        },
      });

      // Stale MATCHED entry — challenge is gone, completed, or cancelled.
      // Return idle so the user isn't phantom-redirected to an old match.
      if (!challenge || !["ACTIVE", "WAITING_FOR_READY"].includes(challenge.status)) {
        return NextResponse.json({ status: "idle" });
      }

      const isCreator = challenge.creatorId === session.user.id;
      const opponentUsername = isCreator
        ? challenge.opponent?.username
        : challenge.creator?.username;
      return NextResponse.json({
        status:           "matched",
        challengeId:      entry.challengeId,
        opponentUsername: opponentUsername ?? null,
      });
    }

    // WAITING — check for expiry first
    const now = new Date();
    if (entry.expiresAt < now) {
      await prisma.$transaction(async (tx) => {
        await tx.user.update({
          where: { id: session.user.id },
          data: { balance: { increment: entry.stakeAmount } },
        });
        await tx.matchmakingQueue.update({
          where: { id: entry.id },
          data: { status: "EXPIRED" },
        });
      });
      return NextResponse.json({ status: "expired" });
    }

    // WAITING — try to match with another waiting player (server-side matching)
    // Both players already paid when they joined, so no balance changes here.
    const matchOpponent = await prisma.matchmakingQueue.findFirst({
      where: {
        game:        entry.game,
        stakeAmount: entry.stakeAmount,
        status:      "WAITING",
        expiresAt:   { gt: now },
        userId:      { not: session.user.id },
      },
      orderBy: { createdAt: "asc" },
      include: { user: { select: { username: true } } },
    });

    if (matchOpponent) {
      try {
        const challenge = await prisma.$transaction(async (tx) => {
          // Create challenge first so we have an ID
          const ch = await tx.challenge.create({
            data: {
              creatorId:           matchOpponent.userId,
              opponentId:          session.user.id,
              game:                entry.game,
              stakeAmount:         entry.stakeAmount,
              status:              "WAITING_FOR_READY",
              creatorPaid:         true,
              opponentPaid:        true,
              isMatchmaking:       true,
              readyDeadline:       new Date(now.getTime() + READY_DEADLINE_MS),
              creatorCredentials:  matchOpponent.credentials,
              opponentCredentials: entry.credentials,
            },
          });

          // Atomically claim the opponent entry — if they're no longer WAITING
          // (another concurrent request already matched them), count will be 0
          // and the transaction rolls back, including the challenge creation above.
          const claimed = await tx.matchmakingQueue.updateMany({
            where: { id: matchOpponent.id, status: "WAITING" },
            data:  { status: "MATCHED", challengeId: ch.id },
          });
          if (claimed.count === 0) throw new Error("RACE_CONDITION");

          // Mark self as matched
          await tx.matchmakingQueue.update({
            where: { id: entry.id },
            data:  { status: "MATCHED", challengeId: ch.id },
          });

          // Link any pending queue-stake transactions (created without a challengeId
          // when both players initially joined the waiting queue) to this challenge.
          await tx.transaction.updateMany({
            where: {
              userId:      { in: [session.user.id, matchOpponent.userId] },
              type:        "STAKE",
              challengeId: null,
              amount:      entry.stakeAmount,
            },
            data: { challengeId: ch.id },
          });

          return ch;
        });

        // Email both players — fire-and-forget
        const [selfUser, opponentDbUser] = await Promise.all([
          prisma.user.findUnique({ where: { id: session.user.id }, select: { email: true, username: true } }),
          prisma.user.findUnique({ where: { id: matchOpponent.userId }, select: { email: true, username: true } }),
        ]);
        if (selfUser?.email) {
          sendMatchFoundEmail({
            to: selfUser.email, username: selfUser.username ?? "Player",
            opponentUsername: opponentDbUser?.username ?? "Opponent",
            game: entry.game, stakeAmount: entry.stakeAmount, challengeId: challenge.id,
          }).catch(console.error);
        }
        if (opponentDbUser?.email) {
          sendMatchFoundEmail({
            to: opponentDbUser.email, username: opponentDbUser.username ?? "Player",
            opponentUsername: selfUser?.username ?? "Opponent",
            game: entry.game, stakeAmount: entry.stakeAmount, challengeId: challenge.id,
          }).catch(console.error);
        }

        return NextResponse.json({
          status:           "matched",
          challengeId:      challenge.id,
          opponentUsername: matchOpponent.user.username,
        });
      } catch (err) {
        if (err instanceof Error && err.message !== "RACE_CONDITION") throw err;
        // Another concurrent request matched this pair — fall through to "waiting"
      }
    }

    return NextResponse.json({
      status:      "waiting",
      queueId:     entry.id,
      game:        entry.game,
      stakeAmount: entry.stakeAmount,
      expiresAt:   entry.expiresAt.toISOString(),
    });
  } catch (error) {
    console.error("Matchmaking status error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
