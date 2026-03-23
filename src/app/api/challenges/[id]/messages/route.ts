import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

async function getAuthorizedChallenge(id: string, userId: string) {
  const challenge = await prisma.challenge.findUnique({
    where: { id },
    select: { id: true, creatorId: true, opponentId: true },
  });
  if (!challenge) return null;
  if (challenge.creatorId !== userId && challenge.opponentId !== userId) return null;
  return challenge;
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const challenge = await getAuthorizedChallenge(id, session.user.id);
    if (!challenge) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const messages = await prisma.chatMessage.findMany({
      where: { challengeId: id },
      orderBy: { createdAt: "asc" },
      include: { user: { select: { id: true, username: true } } },
    });

    return NextResponse.json({ messages });
  } catch (error) {
    console.error("Chat GET error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const challenge = await getAuthorizedChallenge(id, session.user.id);
    if (!challenge) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const { message } = await req.json();
    if (!message?.trim()) {
      return NextResponse.json({ error: "Message cannot be empty" }, { status: 400 });
    }
    if (message.trim().length > 500) {
      return NextResponse.json({ error: "Message too long (max 500 chars)" }, { status: 400 });
    }

    const chatMessage = await prisma.chatMessage.create({
      data: {
        challengeId: id,
        userId:      session.user.id,
        message:     message.trim(),
      },
      include: { user: { select: { id: true, username: true } } },
    });

    return NextResponse.json({ message: chatMessage });
  } catch (error) {
    console.error("Chat POST error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
