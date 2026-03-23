import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { executePayout } from "@/lib/payout";

function isAdmin(email?: string | null) {
  return email && email === process.env.ADMIN_EMAIL;
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!isAdmin(session?.user?.email)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
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
    if (challenge.status !== "DISPUTED") {
      return NextResponse.json({ error: "Challenge is not disputed" }, { status: 400 });
    }
    if (winnerId !== challenge.creatorId && winnerId !== challenge.opponentId) {
      return NextResponse.json({ error: "Invalid winnerId" }, { status: 400 });
    }

    const { payout } = await executePayout(id, winnerId);

    return NextResponse.json({ success: true, winnerId, payout });
  } catch (error) {
    console.error("Admin decide error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
