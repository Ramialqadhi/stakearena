import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const entry = await prisma.matchmakingQueue.findFirst({
      where: { userId: session.user.id, status: "WAITING" },
    });

    if (!entry) {
      return NextResponse.json({ error: "Not in queue" }, { status: 400 });
    }

    await prisma.$transaction(async (tx) => {
      await tx.user.update({
        where: { id: session.user.id },
        data: { balance: { increment: entry.stakeAmount } },
      });
      await tx.matchmakingQueue.update({
        where: { id: entry.id },
        data: { status: "CANCELLED" },
      });
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Matchmaking leave error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
