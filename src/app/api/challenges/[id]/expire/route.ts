import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getGameTTL } from "@/lib/gameTimers";

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

    const challenge = await prisma.challenge.findUnique({ where: { id } });
    if (!challenge) {
      return NextResponse.json({ error: "Challenge not found" }, { status: 404 });
    }

    const isParticipant =
      challenge.creatorId === session.user.id ||
      challenge.opponentId === session.user.id;
    if (!isParticipant) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    if (challenge.status !== "ACTIVE") {
      return NextResponse.json({ error: "Challenge is not active" }, { status: 400 });
    }
    if (!challenge.startedAt) {
      return NextResponse.json({ error: "No start time recorded" }, { status: 400 });
    }

    const matchTTL  = getGameTTL(challenge.game);
    const expiresAt = new Date(challenge.startedAt.getTime() + matchTTL);
    if (new Date() < expiresAt) {
      return NextResponse.json({ error: "Match has not expired yet" }, { status: 400 });
    }

    if (!challenge.opponentId) {
      return NextResponse.json({ error: "No opponent" }, { status: 400 });
    }

    await prisma.$transaction(async (tx) => {
      // Refund both players
      await tx.user.update({
        where: { id: challenge.creatorId },
        data: { balance: { increment: challenge.stakeAmount } },
      });
      await tx.user.update({
        where: { id: challenge.opponentId! },
        data: { balance: { increment: challenge.stakeAmount } },
      });
      await tx.challenge.update({
        where: { id },
        data: { status: "CANCELLED" },
      });
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Challenge expire error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
