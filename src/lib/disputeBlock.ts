import { prisma } from "@/lib/prisma";

export interface DisputeBlockResult {
  blocked: boolean;
  challengeId: string | null;
}

/**
 * Returns whether the user is blocked from creating/accepting challenges.
 * A user is blocked if they are a participant in any DISPUTED challenge
 * and have not yet uploaded any evidence for it.
 */
export async function getDisputeBlock(userId: string): Promise<DisputeBlockResult> {
  const disputedChallenges = await prisma.challenge.findMany({
    where: {
      status: "DISPUTED",
      OR: [{ creatorId: userId }, { opponentId: userId }],
    },
    select: {
      id: true,
      evidence: {
        where: { userId },
        select: { id: true },
      },
    },
  });

  const blocked = disputedChallenges.find((c) => c.evidence.length === 0);
  return blocked
    ? { blocked: true, challengeId: blocked.id }
    : { blocked: false, challengeId: null };
}
