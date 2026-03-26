import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { findBattleResult, normalizeTag } from "@/lib/clashroyale";
import { getGameTTL } from "@/lib/gameTimers";
import { sendYouWonEmail } from "@/lib/email";

export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  const challenge = await prisma.challenge.findUnique({
    where: { id },
    include: {
      creator:  { select: { id: true, email: true, username: true } },
      opponent: { select: { id: true, email: true, username: true } },
    },
  });

  if (!challenge) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  // Only participants may poll
  const userId = session.user.id;
  if (challenge.creatorId !== userId && challenge.opponentId !== userId) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  // Only meaningful when ACTIVE with credentials
  if (
    challenge.status !== "ACTIVE" ||
    !challenge.startedAt ||
    !challenge.creatorCredentials ||
    !challenge.opponentCredentials ||
    !challenge.opponentId ||
    !challenge.opponent
  ) {
    return NextResponse.json({ status: challenge.status });
  }

  const now       = new Date();
  const ttl       = getGameTTL(challenge.game);
  const expiresAt = new Date(challenge.startedAt.getTime() + ttl);

  // Expired — refund both players
  if (now >= expiresAt) {
    const claimed = await prisma.challenge.updateMany({
      where: { id: challenge.id, status: "ACTIVE" },
      data:  { status: "CANCELLED" },
    });
    if (claimed.count > 0) {
      await prisma.$transaction([
        prisma.user.update({
          where: { id: challenge.creatorId },
          data:  { balance: { increment: challenge.stakeAmount } },
        }),
        prisma.user.update({
          where: { id: challenge.opponentId },
          data:  { balance: { increment: challenge.stakeAmount } },
        }),
      ]);
    }
    return NextResponse.json({ status: "CANCELLED" });
  }

  // Check CR battlelog
  const result = await findBattleResult(
    challenge.creatorCredentials,
    challenge.opponentCredentials,
    challenge.startedAt,
  );

  if (!result) {
    return NextResponse.json({ status: "ACTIVE" });
  }

  // Map winning tag → user id
  const creatorTag = normalizeTag(challenge.creatorCredentials);
  const winnerId   = normalizeTag(result.winnerTag) === creatorTag
    ? challenge.creatorId
    : challenge.opponentId;
  const loserId    = winnerId === challenge.creatorId
    ? challenge.opponentId
    : challenge.creatorId;

  const pot    = challenge.stakeAmount * 2;
  const payout = +(pot * 0.9).toFixed(2);
  const rake   = +(pot * 0.1).toFixed(2);

  const done = await prisma.$transaction(async (tx) => {
    const claim = await tx.challenge.updateMany({
      where: { id: challenge.id, status: "ACTIVE" },
      data:  { status: "COMPLETED", winnerId },
    });
    if (claim.count === 0) return false;

    await tx.user.update({
      where: { id: winnerId },
      data: {
        balance:       { increment: payout },
        totalWins:     { increment: 1 },
        totalEarnings: { increment: payout },
      },
    });
    await tx.user.update({
      where: { id: loserId },
      data:  { totalLosses: { increment: 1 } },
    });
    await tx.transaction.create({
      data: {
        userId:      winnerId,
        type:        "PAYOUT",
        amount:      payout,
        status:      "COMPLETED",
        challengeId: challenge.id,
        description: `Won ${challenge.game} — 90% of $${pot.toFixed(2)} pot`,
      },
    });
    await tx.transaction.create({
      data: {
        userId:      winnerId,
        type:        "RAKE",
        amount:      rake,
        status:      "COMPLETED",
        challengeId: challenge.id,
        description: `Platform fee — 10% of $${pot.toFixed(2)} pot`,
      },
    });
    return true;
  });

  if (done) {
    const winner = winnerId === challenge.creatorId ? challenge.creator : challenge.opponent;
    if (winner?.email) {
      sendYouWonEmail({
        to:          winner.email,
        username:    winner.username ?? "Player",
        game:        challenge.game,
        payout,
        challengeId: challenge.id,
      }).catch(console.error);
    }
  }

  return NextResponse.json({ status: "COMPLETED", winnerId });
}
