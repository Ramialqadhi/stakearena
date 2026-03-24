import { prisma } from "@/lib/prisma";
import { sendGhostStrikeEmail, sendSuspensionEmail, sendReadyTimeoutEmail } from "@/lib/email";

const SUSPENSION_HOURS = 24;
const MAX_STRIKES      = 3;

/**
 * Apply ghost strikes only to the player(s) who did NOT click ready before timeout.
 * Called by the cron when readyDeadline passes on a WAITING_FOR_READY challenge.
 */
export async function applyReadyTimeoutStrikes(challengeId: string): Promise<void> {
  const challenge = await prisma.challenge.findUnique({
    where: { id: challengeId },
    include: {
      creator:  { select: { id: true, email: true, username: true, ghostStrikes: true } },
      opponent: { select: { id: true, email: true, username: true, ghostStrikes: true } },
    },
  });

  if (!challenge || !challenge.opponentId || !challenge.opponent) return;

  const now = new Date();

  const penalized: Array<{ user: typeof challenge.creator; gotStrike: boolean }> = [
    { user: challenge.creator,  gotStrike: !challenge.creatorReady  },
    { user: challenge.opponent, gotStrike: !challenge.opponentReady },
  ];

  for (const { user, gotStrike } of penalized) {
    if (gotStrike) {
      const newStrikes   = user.ghostStrikes + 1;
      const willSuspend  = newStrikes >= MAX_STRIKES;
      const suspendedUntil = willSuspend
        ? new Date(now.getTime() + SUSPENSION_HOURS * 60 * 60 * 1000)
        : undefined;

      await prisma.user.update({
        where: { id: user.id },
        data: {
          ghostStrikes:   willSuspend ? 0 : newStrikes,
          suspendedUntil: willSuspend ? suspendedUntil : undefined,
        },
      });

      if (user.email) {
        sendGhostStrikeEmail({
          to: user.email, username: user.username ?? "Player",
          game: challenge.game,
          strikesTotal: willSuspend ? MAX_STRIKES : newStrikes,
          challengeId,
        }).catch(console.error);
        if (willSuspend && suspendedUntil) {
          sendSuspensionEmail({ to: user.email, username: user.username ?? "Player", suspendedUntil }).catch(console.error);
        }
      }
    }

    // Email both about the cancellation (with/without strike)
    if (user.email) {
      sendReadyTimeoutEmail({
        to:          user.email,
        username:    user.username ?? "Player",
        game:        challenge.game,
        stakeAmount: challenge.stakeAmount,
        gotStrike,
      }).catch(console.error);
    }
  }
}

/**
 * Returns suspension info if the user is currently suspended.
 */
export async function getSuspension(userId: string): Promise<{ suspended: true; until: Date } | { suspended: false }> {
  const user = await prisma.user.findUnique({
    where:  { id: userId },
    select: { suspendedUntil: true },
  });
  const until = user?.suspendedUntil;
  if (until && until > new Date()) {
    return { suspended: true, until };
  }
  return { suspended: false };
}
