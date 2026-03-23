import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { executePayout } from "@/lib/payout";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const { winnerId } = await request.json();

    if (!winnerId) {
      return NextResponse.json({ error: "winnerId is required" }, { status: 400 });
    }

    const challenge = await prisma.challenge.findUnique({ where: { id } });
    if (!challenge) {
      return NextResponse.json({ error: "Challenge not found" }, { status: 404 });
    }
    if (challenge.status !== "ACTIVE") {
      return NextResponse.json({ error: "Challenge is not active" }, { status: 400 });
    }

    const isCreator  = challenge.creatorId  === session.user.id;
    const isOpponent = challenge.opponentId === session.user.id;
    if (!isCreator && !isOpponent) {
      return NextResponse.json({ error: "You are not a participant" }, { status: 403 });
    }
    if (winnerId !== challenge.creatorId && winnerId !== challenge.opponentId) {
      return NextResponse.json({ error: "Invalid winnerId" }, { status: 400 });
    }

    // Guard: don't let them submit twice
    if (isCreator  && challenge.resultCreator)  {
      return NextResponse.json({ error: "You already submitted a result" }, { status: 400 });
    }
    if (isOpponent && challenge.resultOpponent) {
      return NextResponse.json({ error: "You already submitted a result" }, { status: 400 });
    }

    const updated = await prisma.challenge.update({
      where: { id },
      data: isCreator
        ? { resultCreator:  winnerId }
        : { resultOpponent: winnerId },
    });

    const bothSubmitted = updated.resultCreator && updated.resultOpponent;

    if (bothSubmitted) {
      if (updated.resultCreator === updated.resultOpponent) {
        // Agreement — auto-payout
        const { payout } = await executePayout(id, updated.resultCreator!);
        return NextResponse.json({ outcome: "payout", winnerId: updated.resultCreator, payout });
      } else {
        // Disagreement — open a dispute
        await prisma.challenge.update({
          where: { id },
          data:  { status: "DISPUTED" },
        });
        return NextResponse.json({ outcome: "disputed" });
      }
    }

    return NextResponse.json({ outcome: "waiting" });
  } catch (error) {
    console.error("Result submission error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
