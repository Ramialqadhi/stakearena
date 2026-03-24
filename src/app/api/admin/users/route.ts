import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

function isAdmin(email?: string | null) {
  return email && email === process.env.ADMIN_EMAIL;
}

export async function GET() {
  const session = await auth();
  if (!isAdmin(session?.user?.email)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const users = await prisma.user.findMany({
    where: { OR: [{ ghostStrikes: { gt: 0 } }, { suspendedUntil: { gt: new Date() } }] },
    select: {
      id: true, username: true, email: true,
      ghostStrikes: true, suspendedUntil: true,
      totalWins: true, totalLosses: true,
    },
    orderBy: [{ suspendedUntil: "desc" }, { ghostStrikes: "desc" }],
  });

  return NextResponse.json({ users });
}
