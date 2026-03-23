import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const now = new Date();
    const entries = await prisma.matchmakingQueue.findMany({
      where: { status: "WAITING", expiresAt: { gt: now } },
      select: { game: true, stakeAmount: true },
    });

    // Build counts: { [game]: { [stake]: count } }
    const counts: Record<string, Record<string, number>> = {};
    for (const e of entries) {
      if (!counts[e.game]) counts[e.game] = {};
      const key = String(e.stakeAmount);
      counts[e.game][key] = (counts[e.game][key] ?? 0) + 1;
    }

    return NextResponse.json({ counts });
  } catch (error) {
    console.error("Matchmaking counts error:", error);
    return NextResponse.json({ counts: {} });
  }
}
