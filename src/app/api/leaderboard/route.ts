import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      orderBy: { totalEarnings: "desc" },
      take: 20,
      select: {
        id: true,
        username: true,
        avatar: true,
        totalWins: true,
        totalLosses: true,
        totalEarnings: true,
      },
    });

    return NextResponse.json({ users });
  } catch (error) {
    console.error("Leaderboard error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
