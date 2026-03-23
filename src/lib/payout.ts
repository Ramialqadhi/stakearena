import { prisma } from "@/lib/prisma";

export async function executePayout(challengeId: string, winnerId: string) {
  const challenge = await prisma.challenge.findUnique({
    where: { id: challengeId },
  });
  if (!challenge || !challenge.opponentId) throw new Error("Invalid challenge");

  const pot    = challenge.stakeAmount * 2;
  const payout = +(pot * 0.9).toFixed(2);
  const rake   = +(pot * 0.1).toFixed(2);
  const loserId = winnerId === challenge.creatorId
    ? challenge.opponentId
    : challenge.creatorId;

  await prisma.$transaction(async (tx) => {
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
      data: { totalLosses: { increment: 1 } },
    });
    await tx.transaction.create({
      data: {
        userId:      winnerId,
        type:        "PAYOUT",
        amount:      payout,
        status:      "COMPLETED",
        challengeId,
        description: `Won ${challenge.game} — 90% of $${pot.toFixed(2)} pot`,
      },
    });
    await tx.transaction.create({
      data: {
        userId:      winnerId,
        type:        "RAKE",
        amount:      rake,
        status:      "COMPLETED",
        challengeId,
        description: `Platform fee — 10% of $${pot.toFixed(2)} pot`,
      },
    });
    await tx.challenge.update({
      where: { id: challengeId },
      data:  { status: "COMPLETED", winnerId },
    });
  });

  return { payout, rake };
}
