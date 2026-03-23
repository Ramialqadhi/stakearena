import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { amount, method, account } = await request.json();
    const parsedAmount = parseFloat(amount);

    if (!parsedAmount || parsedAmount < 25) {
      return NextResponse.json({ error: "Minimum withdrawal is $25" }, { status: 400 });
    }
    if (!method || !account) {
      return NextResponse.json({ error: "Payout method and account are required" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { id: session.user.id } });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    if (user.balance < parsedAmount) {
      return NextResponse.json({ error: "Insufficient balance" }, { status: 400 });
    }

    // Deduct balance immediately and create a pending withdrawal request
    await prisma.$transaction(async (tx) => {
      await tx.user.update({
        where: { id: session.user.id },
        data: { balance: { decrement: parsedAmount } },
      });
      await tx.withdrawalRequest.create({
        data: {
          userId: session.user.id,
          amount: parsedAmount,
          method,
          account,
          status: "PENDING",
        },
      });
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Withdrawal error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
