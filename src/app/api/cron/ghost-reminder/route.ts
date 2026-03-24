import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendReadyReminderEmail } from "@/lib/email";
import { applyReadyTimeoutStrikes } from "@/lib/ghost";

// ── ready reminders ─────────────────────────────────────────────────
const REMIND_30_MIN = 30 * 60 * 1000;
const REMIND_10_MIN = 10 * 60 * 1000;
const CRON_WINDOW   =  4 * 60 * 1000; // 4-min window catches 5-min cron

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (
    process.env.CRON_SECRET &&
    authHeader !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const now = new Date();

  /* ── 1. Ready reminder — 30 minutes left to click Ready ──────────── */
  const ready30Window = {
    gte: new Date(now.getTime() + REMIND_30_MIN - CRON_WINDOW),
    lte: new Date(now.getTime() + REMIND_30_MIN + CRON_WINDOW),
  };
  const ready30Challenges = await prisma.challenge.findMany({
    where: {
      status:               "WAITING_FOR_READY",
      readyDeadline:        ready30Window,
      readyReminderSentAt:  null,
      opponentId:           { not: null },
    },
    include: {
      creator:  { select: { id: true, email: true, username: true } },
      opponent: { select: { id: true, email: true, username: true } },
    },
  });

  let readyReminded = 0;
  for (const c of ready30Challenges) {
    await prisma.challenge.update({ where: { id: c.id }, data: { readyReminderSentAt: now } });
    for (const { player, isReady } of [
      { player: c.creator,  isReady: c.creatorReady  },
      { player: c.opponent, isReady: c.opponentReady },
    ]) {
      if (!isReady && player?.email) {
        sendReadyReminderEmail({
          to: player.email, username: player.username ?? "Player",
          game: c.game, stakeAmount: c.stakeAmount, challengeId: c.id, minutesLeft: 30,
        }).catch(console.error);
        readyReminded++;
      }
    }
  }

  /* ── 2. Ready reminder — 10 minutes left to click Ready ─────────── */
  const ready10Window = {
    gte: new Date(now.getTime() + REMIND_10_MIN - CRON_WINDOW),
    lte: new Date(now.getTime() + REMIND_10_MIN + CRON_WINDOW),
  };
  const ready10Challenges = await prisma.challenge.findMany({
    where: {
      status:                     "WAITING_FOR_READY",
      readyDeadline:              ready10Window,
      readyUrgentReminderSentAt:  null,
      opponentId:                 { not: null },
    },
    include: {
      creator:  { select: { id: true, email: true, username: true } },
      opponent: { select: { id: true, email: true, username: true } },
    },
  });

  for (const c of ready10Challenges) {
    await prisma.challenge.update({ where: { id: c.id }, data: { readyUrgentReminderSentAt: now } });
    for (const { player, isReady } of [
      { player: c.creator,  isReady: c.creatorReady  },
      { player: c.opponent, isReady: c.opponentReady },
    ]) {
      if (!isReady && player?.email) {
        sendReadyReminderEmail({
          to: player.email, username: player.username ?? "Player",
          game: c.game, stakeAmount: c.stakeAmount, challengeId: c.id, minutesLeft: 10,
        }).catch(console.error);
        readyReminded++;
      }
    }
  }

  /* ── 3. Ready timeout — cancel + refund + ghost strikes ─────────── */
  const timedOutChallenges = await prisma.challenge.findMany({
    where: {
      status:        "WAITING_FOR_READY",
      readyDeadline: { lt: now },
      opponentId:    { not: null },
    },
    select: { id: true, creatorId: true, opponentId: true, stakeAmount: true },
  });

  let readyTimedOut = 0;
  for (const c of timedOutChallenges) {
    // Atomic claim — if another cron run already processed this, skip
    const claimed = await prisma.challenge.updateMany({
      where: { id: c.id, status: "WAITING_FOR_READY" },
      data:  { status: "CANCELLED" },
    });
    if (claimed.count === 0) continue;

    // Refund both players
    await prisma.$transaction([
      prisma.user.update({ where: { id: c.creatorId  }, data: { balance: { increment: c.stakeAmount } } }),
      prisma.user.update({ where: { id: c.opponentId! }, data: { balance: { increment: c.stakeAmount } } }),
    ]);

    // Ghost strikes (only to non-ready players)
    applyReadyTimeoutStrikes(c.id).catch(console.error);
    readyTimedOut++;
  }

  return NextResponse.json({ readyReminded, readyTimedOut });
}
