import { NextResponse } from "next/server";
import { getSession, signToken, COOKIE } from "@/lib/session";
import { prisma } from "@/lib/prisma";

/** Client reads the current session */
export async function GET() {
  const user = await getSession();
  if (!user) return NextResponse.json(null);
  return NextResponse.json({ user });
}

/** Client calls this to refresh balance/username from DB (replaces NextAuth update()) */
export async function POST() {
  const user = await getSession();
  if (!user) return NextResponse.json(null);

  const fresh = await prisma.user.findUnique({
    where: { id: user.id },
    select: { id: true, email: true, username: true, balance: true },
  });
  if (!fresh) return NextResponse.json(null);

  const updated = {
    ...user,
    email: fresh.email ?? user.email,
    username: fresh.username ?? user.username,
    balance: fresh.balance,
    isAdmin: fresh.email === process.env.ADMIN_EMAIL,
  };

  const token = await signToken(updated);
  const res = NextResponse.json({ user: updated });
  res.cookies.set(COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
  });
  return res;
}
