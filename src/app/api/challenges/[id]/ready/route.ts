import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

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
    if (challenge.status !== "WAITING_FOR_READY") {
      return NextResponse.json({ error: "Challenge is not in ready phase" }, { status: 400 });
    }

    const isCreator  = challenge.creatorId  === session.user.id;
    const isOpponent = challenge.opponentId === session.user.id;
    if (!isCreator && !isOpponent) {
      return NextResponse.json({ error: "You are not a participant" }, { status: 403 });
    }

    // Check deadline hasn't passed
    if (challenge.readyDeadline && new Date() > challenge.readyDeadline) {
      return NextResponse.json({ error: "Ready deadline has passed" }, { status: 400 });
    }

    // Already ready?
    if (isCreator  && challenge.creatorReady)  return NextResponse.json({ alreadyReady: true });
    if (isOpponent && challenge.opponentReady) return NextResponse.json({ alreadyReady: true });

    const now = new Date();
    const update = isCreator
      ? { creatorReady:  true }
      : { opponentReady: true };

    // Check if this click makes BOTH ready
    const otherReady = isCreator ? challenge.opponentReady : challenge.creatorReady;
    const bothReady  = otherReady; // after this update the other side is already set

    const updated = await prisma.challenge.update({
      where: { id },
      data: bothReady
        ? { ...update, status: "ACTIVE", startedAt: now, readyAt: now }
        : update,
    });

    return NextResponse.json({
      bothReady,
      status: updated.status,
    });
  } catch (error) {
    console.error("Ready route error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
