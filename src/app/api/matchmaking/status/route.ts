import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

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
      return NextResponse.json({ status: "matched", challengeId: entry.challengeId });
    }

    // WAITING — check for expiry
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
