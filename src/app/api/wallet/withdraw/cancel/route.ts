import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { withdrawalId } = await request.json();
    if (!withdrawalId) {
      return NextResponse.json({ error: "Missing withdrawalId" }, { status: 400 });
    }

    const withdrawal = await prisma.withdrawalRequest.findUnique({
      where: { id: withdrawalId },
    });

    if (!withdrawal) {
      return NextResponse.json({ error: "Withdrawal not found" }, { status: 404 });
    }
    if (withdrawal.userId !== session.user.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
    if (withdrawal.status !== "PENDING") {
      return NextResponse.json(
        { error: "Only pending withdrawals can be cancelled" },
        { status: 400 }
      );
    }

    await prisma.$transaction(async (tx) => {
      await tx.user.update({
        where: { id: session.user.id },
        data: { balance: { increment: withdrawal.amount } },
      });
      await tx.withdrawalRequest.delete({ where: { id: withdrawalId } });
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Cancel withdrawal error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
