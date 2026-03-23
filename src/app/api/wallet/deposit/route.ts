import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { amount } = await request.json();

    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: "Valid deposit amount is required" },
        { status: 400 }
      );
    }

    const [user] = await prisma.$transaction([
      prisma.user.update({
        where: { id: session.user.id },
        data: { balance: { increment: amount } },
      }),
      prisma.transaction.create({
        data: {
          userId: session.user.id,
          type: "DEPOSIT",
          amount,
          status: "COMPLETED",
          description: "Wallet deposit",
        },
      }),
    ]);

    return NextResponse.json({
      success: true,
      balance: user.balance,
    });
  } catch (error) {
    console.error("Deposit error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
