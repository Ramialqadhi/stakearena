import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { sendWithdrawalProcessedEmail } from "@/lib/email";

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

    await prisma.withdrawalRequest.update({
      where: { id },
      data: {
        status: "COMPLETED",
        adminNote: adminNote || "Approved by admin",
      },
    });

    // Email the user — fire-and-forget
    const user = await prisma.user.findUnique({
      where:  { id: withdrawal.userId },
      select: { email: true, username: true },
    });
    if (user?.email) {
      sendWithdrawalProcessedEmail({
        to: user.email, username: user.username ?? "Player",
        amount: withdrawal.amount,
      }).catch(console.error);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Approve withdrawal error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
