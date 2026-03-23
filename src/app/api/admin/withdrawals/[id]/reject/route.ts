import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

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
    const { adminNote } = await request.json().catch(() => ({ adminNote: "" }));

    const withdrawal = await prisma.withdrawalRequest.findUnique({ where: { id } });
    if (!withdrawal) {
      return NextResponse.json({ error: "Withdrawal not found" }, { status: 404 });
    }
    if (withdrawal.status !== "PENDING") {
      return NextResponse.json({ error: "Withdrawal is not pending" }, { status: 400 });
    }

    // Reject: mark failed and refund balance
    await prisma.$transaction(async (tx) => {
      await tx.withdrawalRequest.update({
        where: { id },
        data: {
          status: "FAILED",
          adminNote: adminNote || "Rejected by admin",
        },
      });
      await tx.user.update({
        where: { id: withdrawal.userId },
        data: { balance: { increment: withdrawal.amount } },
      });
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Reject withdrawal error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
