import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;

    const challenge = await prisma.challenge.findUnique({ where: { id } });
    if (!challenge) {
      return NextResponse.json({ error: "Challenge not found" }, { status: 404 });
    }
    if (challenge.status !== "DISPUTED") {
      return NextResponse.json({ error: "Challenge is not in dispute" }, { status: 400 });
    }

    const isParticipant =
      challenge.creatorId === session.user.id ||
      challenge.opponentId === session.user.id;
    if (!isParticipant) {
      return NextResponse.json({ error: "You are not a participant" }, { status: 403 });
    }

    const formData    = await request.formData();
    const file        = formData.get("file") as File | null;
    const description = (formData.get("description") as string) || "";

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Validate type
    const allowed = ["image/jpeg", "image/png", "image/gif", "image/webp", "video/mp4", "video/quicktime"];
    if (!allowed.includes(file.type)) {
      return NextResponse.json({ error: "Unsupported file type. Use JPG, PNG, GIF, WebP, or MP4." }, { status: 400 });
    }

    const fileType = file.type.startsWith("image") ? "image" : "video";

    // Save to public/uploads/evidence/[challengeId]/
    const uploadDir = path.join(process.cwd(), "public", "uploads", "evidence", id);
    await mkdir(uploadDir, { recursive: true });

    const ext      = file.name.split(".").pop() ?? "bin";
    const filename = `${session.user.id}-${Date.now()}.${ext}`;
    const buffer   = Buffer.from(await file.arrayBuffer());
    await writeFile(path.join(uploadDir, filename), buffer);

    const fileUrl = `/uploads/evidence/${id}/${filename}`;

    const evidence = await prisma.evidence.create({
      data: {
        challengeId: id,
        userId:      session.user.id,
        fileUrl,
        fileType,
        description: description || null,
      },
    });

    return NextResponse.json({ success: true, evidence });
  } catch (error) {
    console.error("Evidence upload error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  const evidence = await prisma.evidence.findMany({
    where:   { challengeId: id },
    include: { user: { select: { username: true } } },
    orderBy: { createdAt: "asc" },
  });
  return NextResponse.json({ evidence });
}
