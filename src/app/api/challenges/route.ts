import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getDisputeBlock } from "@/lib/disputeBlock";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const game  = searchParams.get("game");
    const stake = searchParams.get("stake");

    const challenges = await prisma.challenge.findMany({
      where: {
        status: "PENDING",
        ...(game  ? { game }                          : {}),
        ...(stake ? { stakeAmount: Number(stake) }    : {}),
      },
      include: {
        creator: {
          select: { id: true, username: true, avatar: true, totalWins: true, totalLosses: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ challenges });
  } catch (error) {
    console.error("Error fetching challenges:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const block = await getDisputeBlock(session.user.id);
    if (block.blocked) {
      return NextResponse.json(
        { error: "You have a disputed match that requires your evidence before you can play again. Please submit your evidence first.", challengeId: block.challengeId },
        { status: 403 }
      );
    }

    const { game, stakeAmount, notes } = await request.json();

    if (!game || !stakeAmount || ![5, 15, 25].includes(stakeAmount)) {
      return NextResponse.json(
        { error: "Game and valid stake amount ($5, $15, or $25) are required" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

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
      return NextResponse.json(
        { error: "Insufficient balance" },
        { status: 400 }
      );
    }

    const challenge = await prisma.$transaction(async (tx) => {
      const created = await tx.challenge.create({
        data: {
          creatorId: session.user.id,
          game,
          stakeAmount,
          notes: notes || null,
          creatorPaid: true,
          creatorCredentials: credentials,
        },
      });
      await tx.user.update({
        where: { id: session.user.id },
        data: { balance: { decrement: stakeAmount } },
      });
      await tx.transaction.create({
        data: {
          userId: session.user.id,
          type: "STAKE",
          amount: stakeAmount,
          status: "COMPLETED",
          challengeId: created.id,
          description: `Stake for ${game} challenge`,
        },
      });
      return created;
    });

    return NextResponse.json({ challenge });
  } catch (error) {
    console.error("Error creating challenge:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
