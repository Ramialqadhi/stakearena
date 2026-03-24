import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { findBattleResult, normalizeTag } from "@/lib/clashroyale";
import { getGameTTL } from "@/lib/gameTimers";
import { sendYouWonEmail } from "@/lib/email";

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (
    process.env.CRON_SECRET &&
    authHeader !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const now = new Date();

  // All ACTIVE challenges that have both player tags
  const challenges = await prisma.challenge.findMany({
    where: {
      status:              "ACTIVE",
      opponentId:          { not: null },
      creatorCredentials:  { not: null },
      opponentCredentials: { not: null },
    },
    include: {
      creator:  { select: { id: true, email: true, username: true } },
      opponent: { select: { id: true, email: true, username: true } },
    },
  });

  let battlesFound = 0;
  let expired      = 0;

  for (const challenge of challenges) {
    if (!challenge.startedAt || !challenge.opponentId || !challenge.opponent) continue;

    const ttl       = getGameTTL(challenge.game);
    const expiresAt = new Date(challenge.startedAt.getTime() + ttl);

    // ── Expired with no battle found → refund ──────────────────────
    if (now >= expiresAt) {
      const claimed = await prisma.challenge.updateMany({
        where: { id: challenge.id, status: "ACTIVE" },
        data:  { status: "CANCELLED" },
      });
      if (claimed.count === 0) continue;

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
      expired++;
      continue;
    }

    // ── Check CR battlelog ──────────────────────────────────────────
    const result = await findBattleResult(
      challenge.creatorCredentials!,
      challenge.opponentCredentials!,
      challenge.startedAt,
    );
    if (!result) continue;

    // Map winning tag → user id
    const creatorTag = normalizeTag(challenge.creatorCredentials!);
    const winnerId   = normalizeTag(result.winnerTag) === creatorTag
      ? challenge.creatorId
      : challenge.opponentId;
    const loserId    = winnerId === challenge.creatorId
      ? challenge.opponentId
      : challenge.creatorId;

    const pot    = challenge.stakeAmount * 2;
    const payout = +(pot * 0.9).toFixed(2);
    const rake   = +(pot * 0.1).toFixed(2);

    // Atomic claim + full payout in one transaction
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

    if (!done) continue;
    battlesFound++;

    // Email winner — fire-and-forget
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

  return NextResponse.json({ checked: challenges.length, battlesFound, expired });
}
