import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// During Resend free tier, use "onboarding@resend.dev" until domain is verified.
// Set EMAIL_FROM=noreply@stakearena.gg once domain is verified in Resend dashboard.
const FROM = process.env.EMAIL_FROM ?? "onboarding@resend.dev";
const BASE_URL = process.env.NEXTAUTH_URL ?? "https://stakearena.gg";

/* ─── brand helpers ──────────────────────────────────────────────── */
function gameLabel(gameId: string): string {
  const map: Record<string, string> = {
    "clash-royale": "Clash Royale",
  };
  return map[gameId] ?? gameId;
}

/* ─── base layout ────────────────────────────────────────────────── */
function layout(title: string, body: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0f;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0f;min-height:100vh;">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;">

          <!-- Logo / wordmark -->
          <tr>
            <td style="padding-bottom:32px;text-align:center;">
              <span style="font-size:22px;font-weight:900;letter-spacing:-0.03em;color:#f0f0f5;">
                Stake<span style="color:#00ff88;">Arena</span>
              </span>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background:#111120;border:1px solid #1e1e2e;border-radius:16px;padding:36px 32px;">
              ${body}
            </td>
          </tr>

          <!-- Footer note -->
          <tr>
            <td style="padding-top:24px;text-align:center;">
              <p style="margin:0;font-size:11px;color:#3a3a4a;line-height:1.6;">
                You received this email because you have a StakeArena account.<br/>
                Play responsibly. 18+ only. Skill-based wagering.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/* shared sub-components */
function heading(text: string): string {
  return `<h1 style="margin:0 0 8px;font-size:24px;font-weight:900;color:#f0f0f5;letter-spacing:-0.02em;">${text}</h1>`;
}
function subtext(text: string): string {
  return `<p style="margin:0 0 24px;font-size:14px;color:#6b7280;line-height:1.6;">${text}</p>`;
}
function highlight(label: string, value: string): string {
  return `
  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:12px;">
    <tr>
      <td style="background:#0d0d14;border:1px solid #1e1e2e;border-radius:10px;padding:14px 18px;">
        <span style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:0.1em;">${label}</span>
        <div style="font-size:20px;font-weight:900;color:#00ff88;margin-top:4px;">${value}</div>
      </td>
    </tr>
  </table>`;
}
function cta(text: string, url: string): string {
  return `
  <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;">
    <tr>
      <td align="center">
        <a href="${url}" style="display:inline-block;padding:14px 32px;background:#00ff88;color:#0a0a0f;font-weight:900;font-size:14px;text-decoration:none;border-radius:12px;letter-spacing:0.04em;">
          ${text}
        </a>
      </td>
    </tr>
  </table>`;
}
function divider(): string {
  return `<div style="height:1px;background:#1e1e2e;margin:24px 0;"></div>`;
}
function pill(text: string, color = "#00ff88"): string {
  return `<span style="display:inline-block;padding:3px 12px;border-radius:20px;background:${color}18;border:1px solid ${color}40;color:${color};font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">${text}</span>`;
}

/* ─── fire-and-forget wrapper ────────────────────────────────────── */
async function send(to: string, subject: string, html: string): Promise<void> {
  if (!process.env.RESEND_API_KEY) return; // silently skip if not configured
  try {
    await resend.emails.send({ from: FROM, to, subject, html });
  } catch (err) {
    console.error("[email] send error:", err);
  }
}

/* ═══════════════════════════════════════════════════════════════════
   1. MATCH FOUND (Quick Match)
   ═══════════════════════════════════════════════════════════════════ */
export async function sendMatchFoundEmail({
  to,
  username,
  opponentUsername,
  game,
  stakeAmount,
  challengeId,
}: {
  to: string;
  username: string;
  opponentUsername: string;
  game: string;
  stakeAmount: number;
  challengeId: string;
}) {
  const payout = +(stakeAmount * 2 * 0.9).toFixed(2);
  const html = layout(
    "Match Found — StakeArena",
    `
    <div style="margin-bottom:6px;">${pill("Quick Match", "#8b5cf6")}</div>
    ${heading("⚡ Match Found!")}
    ${subtext(`Hey ${username}, you've been matched! Your opponent is <strong style="color:#f0f0f5;">${opponentUsername}</strong>. Head to your challenge page to play.`)}
    ${highlight("Game", gameLabel(game))}
    ${highlight("Stake", `$${stakeAmount}`)}
    ${highlight("Winner Takes", `$${payout}`)}
    ${divider()}
    ${cta("View Your Match →", `${BASE_URL}/challenges/${challengeId}`)}
    `
  );
  await send(to, `⚡ Match Found — Your $${stakeAmount} ${gameLabel(game)} challenge is ready`, html);
}

/* ═══════════════════════════════════════════════════════════════════
   2. CHALLENGE ACCEPTED
   ═══════════════════════════════════════════════════════════════════ */
export async function sendChallengeAcceptedEmail({
  to,
  creatorUsername,
  opponentUsername,
  game,
  stakeAmount,
  challengeId,
}: {
  to: string;
  creatorUsername: string;
  opponentUsername: string;
  game: string;
  stakeAmount: number;
  challengeId: string;
}) {
  const payout = +(stakeAmount * 2 * 0.9).toFixed(2);
  const html = layout(
    "Challenge Accepted — StakeArena",
    `
    <div style="margin-bottom:6px;">${pill("Challenge", "#00ff88")}</div>
    ${heading("🎮 Challenge Accepted!")}
    ${subtext(`Hey ${creatorUsername}, <strong style="color:#f0f0f5;">${opponentUsername}</strong> has accepted your ${gameLabel(game)} challenge. The match is live — good luck!`)}
    ${highlight("Opponent", opponentUsername)}
    ${highlight("Game", gameLabel(game))}
    ${highlight("Winner Takes", `$${payout}`)}
    ${divider()}
    ${cta("View Match →", `${BASE_URL}/challenges/${challengeId}`)}
    `
  );
  await send(to, `🎮 ${opponentUsername} accepted your $${stakeAmount} ${gameLabel(game)} challenge!`, html);
}

/* ═══════════════════════════════════════════════════════════════════
   3. RESULT SUBMITTED (notify the other player)
   ═══════════════════════════════════════════════════════════════════ */
export async function sendResultSubmittedEmail({
  to,
  recipientUsername,
  submitterUsername,
  game,
  stakeAmount,
  challengeId,
}: {
  to: string;
  recipientUsername: string;
  submitterUsername: string;
  game: string;
  stakeAmount: number;
  challengeId: string;
}) {
  const html = layout(
    "Result Submitted — StakeArena",
    `
    <div style="margin-bottom:6px;">${pill("Action Required", "#fbbf24")}</div>
    ${heading("📋 Result Submitted")}
    ${subtext(`Hey ${recipientUsername}, <strong style="color:#f0f0f5;">${submitterUsername}</strong> has submitted their match result for your ${gameLabel(game)} challenge. Submit your result to complete the match.`)}
    ${highlight("Game", gameLabel(game))}
    ${highlight("Stake", `$${stakeAmount}`)}
    ${divider()}
    <p style="margin:0 0 4px;font-size:12px;color:#6b7280;">If your results agree, the winner is paid out automatically. If they disagree, the match goes to dispute resolution.</p>
    ${cta("Submit Your Result →", `${BASE_URL}/challenges/${challengeId}`)}
    `
  );
  await send(to, `📋 ${submitterUsername} submitted their result — submit yours now`, html);
}

/* ═══════════════════════════════════════════════════════════════════
   4. YOU WON
   ═══════════════════════════════════════════════════════════════════ */
export async function sendYouWonEmail({
  to,
  username,
  game,
  payout,
  challengeId,
}: {
  to: string;
  username: string;
  game: string;
  payout: number;
  challengeId: string;
}) {
  const html = layout(
    "You Won — StakeArena",
    `
    <div style="margin-bottom:6px;">${pill("Winner", "#00ff88")}</div>
    ${heading("🏆 You Won!")}
    ${subtext(`Congratulations ${username}! You won your ${gameLabel(game)} match. Your balance has been updated.`)}
    ${highlight("Prize Awarded", `$${payout}`)}
    ${highlight("Game", gameLabel(game))}
    ${divider()}
    ${cta("Withdraw Winnings →", `${BASE_URL}/wallet`)}
    <p style="margin:16px 0 0;font-size:12px;color:#6b7280;text-align:center;">
      <a href="${BASE_URL}/challenges/${challengeId}" style="color:#a1a1aa;text-decoration:none;">View match details</a>
    </p>
    `
  );
  await send(to, `🏆 You won $${payout} on StakeArena!`, html);
}

/* ═══════════════════════════════════════════════════════════════════
   5. DISPUTE OPENED
   ═══════════════════════════════════════════════════════════════════ */
export async function sendDisputeOpenedEmail({
  to,
  username,
  game,
  stakeAmount,
  challengeId,
}: {
  to: string;
  username: string;
  game: string;
  stakeAmount: number;
  challengeId: string;
}) {
  const html = layout(
    "Dispute Opened — StakeArena",
    `
    <div style="margin-bottom:6px;">${pill("Disputed", "#ef4444")}</div>
    ${heading("⚠️ Match Disputed")}
    ${subtext(`Hey ${username}, your ${gameLabel(game)} match result is disputed — both players reported different winners. Please submit your gameplay evidence as soon as possible so our team can review.`)}
    ${highlight("Game", gameLabel(game))}
    ${highlight("Stake", `$${stakeAmount}`)}
    ${divider()}
    <p style="margin:0 0 16px;font-size:12px;color:#fbbf24;">⏱️ Submit your evidence promptly. Unresponsive players may have the match ruled against them.</p>
    ${cta("Submit Evidence →", `${BASE_URL}/challenges/${challengeId}`)}
    `
  );
  await send(to, `⚠️ Your $${stakeAmount} ${gameLabel(game)} match is disputed — submit evidence now`, html);
}

/* ═══════════════════════════════════════════════════════════════════
   6. DISPUTE RESOLVED
   ═══════════════════════════════════════════════════════════════════ */
export async function sendDisputeResolvedEmail({
  to,
  username,
  winnerUsername,
  game,
  payout,
  challengeId,
  isWinner,
}: {
  to: string;
  username: string;
  winnerUsername: string;
  game: string;
  payout: number;
  challengeId: string;
  isWinner: boolean;
}) {
  const html = layout(
    "Dispute Resolved — StakeArena",
    `
    <div style="margin-bottom:6px;">${pill(isWinner ? "You Won" : "Resolved", isWinner ? "#00ff88" : "#6b7280")}</div>
    ${heading("🔍 Dispute Resolved")}
    ${subtext(
      isWinner
        ? `Hey ${username}, our admin has reviewed the evidence and awarded you the win. $${payout} has been added to your balance.`
        : `Hey ${username}, our admin has reviewed the evidence for your ${gameLabel(game)} dispute. <strong style="color:#f0f0f5;">${winnerUsername}</strong> has been awarded the prize.`
    )}
    ${highlight("Winner", winnerUsername)}
    ${highlight("Game", gameLabel(game))}
    ${isWinner ? highlight("Prize Awarded", `$${payout}`) : ""}
    ${divider()}
    ${isWinner
      ? cta("Withdraw Winnings →", `${BASE_URL}/wallet`)
      : cta("View Match →", `${BASE_URL}/challenges/${challengeId}`)
    }
    `
  );
  await send(
    to,
    isWinner ? `🏆 Dispute resolved — you won $${payout}!` : `🔍 Dispute resolved — ${winnerUsername} was awarded the win`,
    html
  );
}

/* ═══════════════════════════════════════════════════════════════════
   7. WITHDRAWAL PROCESSED
   ═══════════════════════════════════════════════════════════════════ */
export async function sendWithdrawalProcessedEmail({
  to,
  username,
  amount,
}: {
  to: string;
  username: string;
  amount: number;
}) {
  const fee  = 1.99;
  const net  = +(amount - fee).toFixed(2);
  const html = layout(
    "Withdrawal Processed — StakeArena",
    `
    <div style="margin-bottom:6px;">${pill("Processed", "#00ff88")}</div>
    ${heading("💸 Withdrawal Processed")}
    ${subtext(`Hey ${username}, your withdrawal request has been approved and processed. Funds should arrive within 1–3 business days depending on your bank.`)}
    ${highlight("Withdrawal Amount", `$${amount.toFixed(2)}`)}
    ${highlight("Processing Fee", `$${fee.toFixed(2)}`)}
    ${highlight("Net Amount", `$${net}`)}
    ${divider()}
    ${cta("View Wallet →", `${BASE_URL}/wallet`)}
    `
  );
  await send(to, `💸 Your withdrawal of $${amount.toFixed(2)} has been processed`, html);
}

/* ═══════════════════════════════════════════════════════════════════
   8. GHOST REMINDER (30-min warning)
   ═══════════════════════════════════════════════════════════════════ */
export async function sendGhostReminderEmail({
  to,
  username,
  game,
  stakeAmount,
  challengeId,
}: {
  to: string;
  username: string;
  game: string;
  stakeAmount: number;
  challengeId: string;
}) {
  const html = layout(
    "Match Expiring Soon — StakeArena",
    `
    <div style="margin-bottom:6px;">${pill("Urgent", "#f59e0b")}</div>
    ${heading("⏰ Your match expires in 30 minutes!")}
    ${subtext(`Hey ${username}, your ${gameLabel(game)} match is about to expire. If you don't submit your result in time, your stake will be refunded — but you'll receive a <strong style="color:#ef4444;">ghost strike</strong>.`)}
    ${highlight("Game", gameLabel(game))}
    ${highlight("Stake", `$${stakeAmount}`)}
    ${divider()}
    <div style="background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.3);border-radius:12px;padding:14px 16px;margin-bottom:16px;">
      <p style="margin:0;font-size:12px;color:#ef4444;font-weight:700;">⚠️ 3 ghost strikes = 24 hour account suspension</p>
    </div>
    ${cta("Submit Result Now →", `${BASE_URL}/challenges/${challengeId}`)}
    `
  );
  await send(to, `⏰ Your $${stakeAmount} ${gameLabel(game)} match expires in 30 minutes — submit your result!`, html);
}

/* ═══════════════════════════════════════════════════════════════════
   9. GHOST STRIKE RECEIVED
   ═══════════════════════════════════════════════════════════════════ */
export async function sendGhostStrikeEmail({
  to,
  username,
  game,
  strikesTotal,
  challengeId,
}: {
  to: string;
  username: string;
  game: string;
  strikesTotal: number;
  challengeId: string;
}) {
  const html = layout(
    "Ghost Strike — StakeArena",
    `
    <div style="margin-bottom:6px;">${pill("Ghost Strike", "#ef4444")}</div>
    ${heading(`👻 Ghost Strike ${strikesTotal}/3`)}
    ${subtext(`Hey ${username}, you received a ghost strike for not submitting your result in the ${gameLabel(game)} match. Your stake was refunded, but this counts against you.`)}
    ${highlight("Strikes", `${strikesTotal} / 3`)}
    ${highlight("Game", gameLabel(game))}
    ${divider()}
    <div style="background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.3);border-radius:12px;padding:14px 16px;margin-bottom:16px;">
      <p style="margin:0;font-size:12px;color:#a1a1aa;line-height:1.6;">
        ${strikesTotal >= 3
          ? `<strong style="color:#ef4444;">You have reached 3 strikes.</strong> Your account will be suspended.`
          : `You have <strong style="color:#ef4444;">${3 - strikesTotal} strike${3 - strikesTotal !== 1 ? "s" : ""}</strong> remaining before a 24-hour suspension.`
        }
      </p>
    </div>
    ${cta("View Match →", `${BASE_URL}/challenges/${challengeId}`)}
    `
  );
  await send(to, `👻 Ghost strike received — ${strikesTotal}/3 strikes on your account`, html);
}

/* ═══════════════════════════════════════════════════════════════════
   10. ACCOUNT SUSPENDED
   ═══════════════════════════════════════════════════════════════════ */
export async function sendSuspensionEmail({
  to,
  username,
  suspendedUntil,
}: {
  to: string;
  username: string;
  suspendedUntil: Date;
}) {
  const untilStr = suspendedUntil.toLocaleString("en-US", {
    month: "long", day: "numeric", year: "numeric",
    hour: "numeric", minute: "2-digit", timeZoneName: "short",
  });
  const html = layout(
    "Account Suspended — StakeArena",
    `
    <div style="margin-bottom:6px;">${pill("Suspended", "#ef4444")}</div>
    ${heading("🚫 Account Suspended")}
    ${subtext(`Hey ${username}, your account has been suspended for 24 hours due to repeated match ghosting (3 strikes reached).`)}
    ${highlight("Suspended Until", untilStr)}
    ${divider()}
    <p style="margin:0 0 16px;font-size:13px;color:#6b7280;line-height:1.6;">
      After your suspension period ends, your ghost strikes will be reset to 0. Please make sure to submit your match results in future games.
    </p>
    <p style="margin:0;font-size:12px;color:#4b5563;line-height:1.5;">
      If you believe this was an error, contact us at <a href="mailto:support@stakearena.gg" style="color:#00ff88;">support@stakearena.gg</a>.
    </p>
    `
  );
  await send(to, `🚫 Your StakeArena account has been suspended for 24 hours`, html);
}

/* ═══════════════════════════════════════════════════════════════════
   11. READY REMINDER — 30 minutes left
   ═══════════════════════════════════════════════════════════════════ */
export async function sendReadyReminderEmail({
  to,
  username,
  game,
  stakeAmount,
  challengeId,
  minutesLeft,
}: {
  to: string;
  username: string;
  game: string;
  stakeAmount: number;
  challengeId: string;
  minutesLeft: number;
}) {
  const isUrgent = minutesLeft <= 10;
  const html = layout(
    `Confirm Ready — ${minutesLeft} Minutes Left`,
    `
    <div style="margin-bottom:6px;">${pill(isUrgent ? "Urgent" : "Action Required", isUrgent ? "#ef4444" : "#f59e0b")}</div>
    ${heading(`⚠️ ${minutesLeft} Minutes to Confirm Ready!`)}
    ${subtext(`Hey ${username}, you have <strong style="color:${isUrgent ? "#ef4444" : "#fbbf24"};">${minutesLeft} minutes</strong> to confirm you're ready for your ${gameLabel(game)} match. If time runs out without both players confirming, the match will be cancelled and stakes refunded — and the player who didn't confirm will receive a ghost strike.`)}
    ${highlight("Game", gameLabel(game))}
    ${highlight("Stake", `$${stakeAmount}`)}
    ${divider()}
    <div style="background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.3);border-radius:12px;padding:14px 16px;margin-bottom:16px;">
      <p style="margin:0;font-size:12px;color:#ef4444;font-weight:700;">⚠️ Not confirming = ghost strike on your account</p>
    </div>
    ${cta("Confirm Ready Now →", `${BASE_URL}/challenges/${challengeId}`)}
    `
  );
  await send(to, `⚠️ ${minutesLeft} minutes to confirm ready for your ${gameLabel(game)} match!`, html);
}

/* ═══════════════════════════════════════════════════════════════════
   12. READY TIMEOUT — match cancelled, ghost strike
   ═══════════════════════════════════════════════════════════════════ */
export async function sendReadyTimeoutEmail({
  to,
  username,
  game,
  stakeAmount,
  gotStrike,
}: {
  to: string;
  username: string;
  game: string;
  stakeAmount: number;
  gotStrike: boolean;
}) {
  const html = layout(
    "Match Cancelled — Ready Timeout",
    `
    <div style="margin-bottom:6px;">${pill(gotStrike ? "Ghost Strike" : "Match Cancelled", gotStrike ? "#ef4444" : "#6b7280")}</div>
    ${heading("Match Cancelled")}
    ${subtext(
      gotStrike
        ? `Hey ${username}, your ${gameLabel(game)} match was cancelled because you didn't confirm ready in time. Your stake of <strong style="color:#f0f0f5;">$${stakeAmount}</strong> has been refunded, but a ghost strike has been added to your account.`
        : `Hey ${username}, your ${gameLabel(game)} match was cancelled because your opponent didn't confirm ready in time. Your stake of <strong style="color:#00ff88;">$${stakeAmount}</strong> has been fully refunded. No strike was added to your account.`
    )}
    ${highlight("Stake Refunded", `$${stakeAmount}`)}
    ${gotStrike ? highlight("Ghost Strike Added", "1 strike") : ""}
    ${divider()}
    ${cta("Find Another Match →", `${BASE_URL}/quickmatch`)}
    `
  );
  await send(to, gotStrike ? `👻 Ghost strike — you didn't confirm ready in time` : `Match cancelled — opponent didn't confirm ready`, html);
}
