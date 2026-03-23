import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getDisputeBlock } from "@/lib/disputeBlock";

export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;

    const block = await getDisputeBlock(session.user.id);
    if (block.blocked) {
      return NextResponse.json(
        { error: "You have a disputed match that requires your evidence before you can play again. Please submit your evidence first.", challengeId: block.challengeId },
        { status: 403 }
      );
    }

    const challenge = await prisma.challenge.findUnique({ where: { id } });
    if (!challenge) {
      return NextResponse.json({ error: "Challenge not found" }, { status: 404 });
    }
    if (challenge.status !== "PENDING") {
      return NextResponse.json({ error: "Challenge is no longer open" }, { status: 400 });
    }
    if (challenge.creatorId === session.user.id) {
      return NextResponse.json({ error: "You cannot accept your own challenge" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { id: session.user.id } });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Gate: user must have saved credentials for this game
    const savedCreds = user.gameCredentials ? JSON.parse(user.gameCredentials) : {};
    const credentials = savedCreds[challenge.game]?.trim() ?? "";
    if (!credentials) {
      return NextResponse.json(
        { error: `You need to add your ${challenge.game} credentials in your profile before playing.`, credentialGate: true },
        { status: 400 }
      );
    }

    if (user.balance < challenge.stakeAmount) {
      return NextResponse.json({ error: "Insufficient balance" }, { status: 400 });
    }

    await prisma.$transaction(async (tx) => {
      await tx.challenge.update({
        where: { id },
        data: {
          opponentId:          session.user.id,
          opponentPaid:        true,
          status:              "ACTIVE",
          opponentCredentials: credentials,
        },
      });
      await tx.user.update({
        where: { id: session.user.id },
        data:  { balance: { decrement: challenge.stakeAmount } },
      });
      await tx.transaction.create({
        data: {
          userId:      session.user.id,
          type:        "STAKE",
          amount:      challenge.stakeAmount,
          status:      "COMPLETED",
          challengeId: id,
          description: `Accepted ${challenge.game} challenge`,
        },
      });
    });

    return NextResponse.json({ success: true, challengeId: id });
  } catch (error) {
    console.error("Accept challenge error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
