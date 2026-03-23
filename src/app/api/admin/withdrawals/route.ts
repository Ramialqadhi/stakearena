import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

function isAdmin(email?: string | null) {
  return email && email === process.env.ADMIN_EMAIL;
}

export async function GET() {
  try {
    const session = await auth();
    if (!isAdmin(session?.user?.email)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const withdrawals = await prisma.withdrawalRequest.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        user: { select: { id: true, username: true, email: true } },
      },
    });

    return NextResponse.json({ withdrawals });
  } catch (error) {
    console.error("Admin withdrawals error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
