import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const challenge = await prisma.challenge.findUnique({
      where: { id },
      include: {
        creator: {
          select: { id: true, username: true, avatar: true, totalWins: true, totalLosses: true },
        },
        opponent: {
          select: { id: true, username: true, avatar: true, totalWins: true, totalLosses: true },
        },
        winner: {
          select: { id: true, username: true },
        },
        match: true,
      },
    });

    if (!challenge) {
      return NextResponse.json({ error: "Challenge not found" }, { status: 404 });
    }

    return NextResponse.json({ challenge });
  } catch (error) {
    console.error("Error fetching challenge:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
