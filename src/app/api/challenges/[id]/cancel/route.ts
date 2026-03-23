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
    if (challenge.creatorId !== session.user.id) {
      return NextResponse.json({ error: "Only the creator can cancel this challenge" }, { status: 403 });
    }
    if (challenge.status !== "PENDING") {
      return NextResponse.json({ error: "Only pending challenges can be cancelled" }, { status: 400 });
    }

    await prisma.$transaction(async (tx) => {
      await tx.user.update({
        where: { id: session.user.id },
        data: { balance: { increment: challenge.stakeAmount } },
      });
      await tx.challenge.update({
        where: { id },
        data: { status: "CANCELLED" },
      });
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Cancel challenge error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
