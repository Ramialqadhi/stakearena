import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { normalizeTag } from "@/lib/clashroyale";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const user = await prisma.user.findUnique({
    where:  { id: session.user.id },
    select: { gameCredentials: true },
  });
  const creds = user?.gameCredentials ? JSON.parse(user.gameCredentials) : {};
  return NextResponse.json({ credentials: creds });
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { game, value } = await req.json();
  if (!game || typeof value !== "string") {
    return NextResponse.json({ error: "game and value are required" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where:  { id: session.user.id },
    select: { gameCredentials: true },
  });

  const existing = user?.gameCredentials ? JSON.parse(user.gameCredentials) : {};
  const normalized = game === "CLASH_ROYALE" ? normalizeTag(value) : value.trim();
  const updated  = { ...existing, [game]: normalized };

  await prisma.user.update({
    where: { id: session.user.id },
    data:  { gameCredentials: JSON.stringify(updated) },
  });

  return NextResponse.json({ success: true, credentials: updated });
}
