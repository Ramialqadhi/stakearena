export const dynamic = "force-dynamic";

import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Navbar } from "@/components/layout/Navbar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { EvidenceSubmission } from "@/components/challenges/EvidenceSubmission";
import { ChallengeChat } from "@/components/challenges/ChallengeChat";
import { CancelChallengeButton } from "@/components/challenges/CancelChallengeButton";
import { MatchTimer } from "@/components/challenges/MatchTimer";
import { ReadyFlow } from "@/components/challenges/ReadyFlow";
import { BattlePoller } from "@/components/challenges/BattlePoller";
import { SUPPORTED_GAMES } from "@/types";
import { GameIcon } from "@/components/games/GameIcon";
import { GAME_CREDENTIALS } from "@/lib/gameCredentials";
import { Trophy, Swords, Clock, CheckCircle, AlertTriangle, User, Ban, Loader2 } from "lucide-react";
import { getSuspension } from "@/lib/ghost";

export default async function ChallengeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await auth();
  if (!session?.user?.id) redirect(`/login?redirect=/challenges/${id}`);

  const challenge = await prisma.challenge.findUnique({
    where: { id },
    include: {
      creator:  { select: { id: true, username: true, totalWins: true, totalLosses: true } },
      opponent: { select: { id: true, username: true, totalWins: true, totalLosses: true } },
      winner:   { select: { id: true, username: true } },
      evidence: { include: { user: { select: { id: true, username: true } } }, orderBy: { createdAt: "asc" } },
    },
  });

  if (!challenge) notFound();

  const userId      = session.user.id;
  const isCreator   = challenge.creatorId  === userId;
  const isOpponent  = challenge.opponentId === userId;
  const isParticipant = isCreator || isOpponent;


  if (!isParticipant) {
    // Non-participant: show read-only view
  }

  const gameInfo = SUPPORTED_GAMES.find((g) => g.id === challenge.game);
  const pot      = challenge.stakeAmount * 2;
  const payout   = pot * 0.9;

  const suspension = await getSuspension(userId);
  const myEvidence = challenge.evidence.filter((e) => e.userId === userId);

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0f]">
      <Navbar />

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-8">

        {/* Suspension banner */}
        {suspension.suspended && (
          <div className="mb-6 px-4 py-3 rounded-xl border border-[rgba(239,68,68,0.4)] bg-[rgba(239,68,68,0.07)] flex items-center gap-3">
            <Ban className="w-5 h-5 text-[#ef4444] flex-shrink-0" />
            <span className="text-sm text-[#f0f0f5]">
              Your account is <strong className="text-[#ef4444]">suspended</strong> until{" "}
              <strong className="text-[#ef4444]">
                {suspension.until.toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit", timeZoneName: "short" })}
              </strong>{" "}
              due to repeated match ghosting. You cannot create or join new challenges until then.
            </span>
          </div>
        )}

        {/* Status banner */}
        {challenge.status === "WAITING_FOR_READY" && !isParticipant && (
          <div className="mb-6 px-4 py-3 rounded-xl border border-[rgba(0,255,136,0.25)] bg-[rgba(0,255,136,0.05)] flex items-center gap-3">
            <Clock className="w-5 h-5 text-[#00ff88] flex-shrink-0" />
            <span className="text-sm text-[#f0f0f5]">
              Both players are confirming their readiness for this match.
            </span>
          </div>
        )}
        {challenge.status === "COMPLETED" && (
          <div className="mb-6 px-4 py-3 rounded-xl border border-[rgba(0,255,136,0.3)] bg-[rgba(0,255,136,0.06)] flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-[#00ff88] flex-shrink-0" />
            <span className="text-sm text-[#f0f0f5]">
              <strong className="text-[#00ff88]">{challenge.winner?.username}</strong> won this challenge and received{" "}
              <strong className="text-[#00ff88]">${payout.toFixed(2)}</strong>.
            </span>
          </div>
        )}
        {challenge.status === "DISPUTED" && (
          <>
            <div className="mb-3 px-4 py-3 rounded-xl border border-[rgba(251,191,36,0.3)] bg-[rgba(251,191,36,0.06)] flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-[#fbbf24] flex-shrink-0" />
              <span className="text-sm text-[#a1a1aa]">
                Players disagree on the result. Submit your evidence below — an admin will review and decide.
              </span>
            </div>
            <div className="mb-6 px-4 py-4 rounded-xl border border-[rgba(245,158,11,0.5)] bg-[rgba(245,158,11,0.08)]"
              style={{ boxShadow: "0 0 20px rgba(245,158,11,0.08)" }}>
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-[#f59e0b] mb-1">⚠️ Dispute Notice</p>
                  <p className="text-sm text-[#a1a1aa] leading-relaxed">
                    Our team typically resolves disputes within <span className="text-[#fbbf24] font-semibold">3–5 minutes</span>.
                    Please submit your evidence as soon as possible to avoid delays.
                    {isParticipant && !challenge.evidence.some(e => e.userId === userId) && (
                      <span className="block mt-1 text-[#f59e0b] font-semibold">
                        You have not yet submitted your evidence — scroll down to upload now.
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Challenge card */}
        <div className="glass rounded-2xl border border-[#1e1e2e] overflow-hidden mb-6">
          {/* Header */}
          <div className="px-6 py-5 border-b border-[#1e1e2e] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <GameIcon gameId={challenge.game} size="md" />
              <div>
                <div className="text-lg font-black text-[#f0f0f5]">{gameInfo?.name ?? challenge.game}</div>
                <div className="text-xs text-[#6b7280]">1v1 · {gameInfo?.category}</div>
              </div>
            </div>
            <Badge>{challenge.status}</Badge>
          </div>

          {/* Stake row */}
          <div className="px-6 py-4 border-b border-[#1e1e2e] grid grid-cols-3 gap-4 text-center bg-[rgba(0,255,136,0.03)]">
            <div>
              <div className="text-xs text-[#6b7280] mb-1">Each Staked</div>
              <div className="text-xl font-black text-[#00ff88]">${challenge.stakeAmount.toFixed(2)}</div>
            </div>
            <div>
              <div className="text-xs text-[#6b7280] mb-1">Prize Pool</div>
              <div className="text-xl font-black text-[#fbbf24]">${pot.toFixed(2)}</div>
            </div>
            <div>
              <div className="text-xs text-[#6b7280] mb-1">Winner Gets</div>
              <div className="text-xl font-black text-[#f0f0f5]">${payout.toFixed(2)}</div>
            </div>
          </div>

          {/* Players */}
          <div className="px-6 py-5 flex items-center justify-between gap-4">
            <PlayerInfo
              username={challenge.creator.username}
              wins={challenge.creator.totalWins}
              losses={challenge.creator.totalLosses}
              label={isCreator ? "You" : undefined}
              isWinner={challenge.winner?.id === challenge.creatorId}
            />
            <div className="flex flex-col items-center gap-1">
              <Swords className="w-6 h-6 text-[#6b7280]" />
              <span className="text-xs text-[#6b7280]">VS</span>
            </div>
            {challenge.opponent ? (
              <PlayerInfo
                username={challenge.opponent.username}
                wins={challenge.opponent.totalWins}
                losses={challenge.opponent.totalLosses}
                label={isOpponent ? "You" : undefined}
                isWinner={challenge.winner?.id === challenge.opponentId}
                flip
              />
            ) : (
              <div className="text-center text-[#6b7280] text-sm">
                <Clock className="w-5 h-5 mx-auto mb-1" />
                Waiting for opponent
              </div>
            )}
          </div>

          {challenge.notes && (
            <div className="px-6 py-4 border-t border-[#1e1e2e] bg-[rgba(255,255,255,0.02)]">
              <div className="text-xs text-[#6b7280] uppercase tracking-wide font-semibold mb-1">Match notes</div>
              <p className="text-sm text-[#a1a1aa]">{challenge.notes}</p>
            </div>
          )}
        </div>

        {/* ── Credentials ── */}
        {isParticipant && (challenge.creatorCredentials || challenge.opponentCredentials) && (
          <div className="glass rounded-2xl border border-[rgba(139,92,246,0.25)] overflow-hidden mb-6">
            <div className="px-5 py-4 border-b border-[#1e1e2e] flex items-center gap-2">
              <User className="w-4 h-4 text-[#8b5cf6]" />
              <h3 className="font-bold text-[#f0f0f5] text-sm">Game Credentials</h3>
              <span className="ml-auto text-xs text-[#6b7280]">{GAME_CREDENTIALS[challenge.game]?.label ?? "Username"}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#1e1e2e]">
              <div className="px-5 py-4">
                <div className="text-xs font-semibold text-[#6b7280] uppercase tracking-wide mb-1">
                  {isCreator ? "Your Credentials" : `${challenge.creator.username}'s Credentials`}
                </div>
                <div className="font-mono text-sm text-[#f0f0f5] bg-[#1a1a24] border border-[#2a2a3a] rounded-lg px-3 py-2">
                  {challenge.creatorCredentials ?? <span className="text-[#6b7280] italic">Not provided</span>}
                </div>
              </div>
              <div className="px-5 py-4">
                <div className="text-xs font-semibold text-[#6b7280] uppercase tracking-wide mb-1">
                  {isOpponent ? "Your Credentials" : `${challenge.opponent?.username ?? "Opponent"}'s Credentials`}
                </div>
                <div className="font-mono text-sm text-[#f0f0f5] bg-[#1a1a24] border border-[#2a2a3a] rounded-lg px-3 py-2">
                  {challenge.opponentCredentials ?? <span className="text-[#6b7280] italic">Waiting for opponent</span>}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Ready flow (WAITING_FOR_READY, participants only) ── */}
        {challenge.status === "WAITING_FOR_READY" && isParticipant && challenge.readyDeadline && challenge.opponent && (
          <div className="mb-6">
            <ReadyFlow
              challengeId={challenge.id}
              game={challenge.game}
              isCreator={isCreator}
              creatorReady={challenge.creatorReady}
              opponentReady={challenge.opponentReady}
              creatorUsername={challenge.creator.username}
              opponentUsername={challenge.opponent.username}
              readyDeadline={challenge.readyDeadline.toISOString()}
            />
          </div>
        )}

        {/* ── Match timer (all active / disputed challenges) ── */}
        {challenge.startedAt &&
          (challenge.status === "ACTIVE" || challenge.status === "DISPUTED") && (
          <div className="mb-6">
            <MatchTimer
              challengeId={challenge.id}
              startedAt={challenge.startedAt.toISOString()}
              game={challenge.game}
            />
          </div>
        )}

        {/* ── PENDING: cancel button for creator ── */}
        {challenge.status === "PENDING" && isCreator && (
          <div className="mb-6">
            <CancelChallengeButton challengeId={challenge.id} />
          </div>
        )}

        {/* ── ACTIVE: waiting for battle result ── */}
        {challenge.status === "ACTIVE" && (
          <>
            {isParticipant && <BattlePoller challengeId={challenge.id} />}
            <div className="mb-6">
              <div className="glass rounded-xl p-5 border border-[rgba(0,255,136,0.15)] flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[rgba(0,255,136,0.08)] border border-[rgba(0,255,136,0.2)] flex items-center justify-center flex-shrink-0">
                  <Loader2 className="w-5 h-5 text-[#00ff88] animate-spin" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#f0f0f5]">Waiting for battle result…</div>
                  <div className="text-xs text-[#6b7280] mt-0.5">
                    Play your 1v1 match in Clash Royale. The result will be detected automatically.
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ── DISPUTED: evidence submission ── */}
        {challenge.status === "DISPUTED" && isParticipant && (
          <div className="mb-6">
            <EvidenceSubmission
              challengeId={challenge.id}
              existingCount={myEvidence.length}
            />

            {/* Show my submitted evidence */}
            {myEvidence.length > 0 && (
              <div className="mt-4">
                <h3 className="text-sm font-bold text-[#a1a1aa] uppercase tracking-wide mb-3">Your submitted evidence</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {myEvidence.map((ev) => (
                    <EvidenceThumb key={ev.id} ev={ev} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── Chat ── */}
        {isParticipant && challenge.opponent && (
          <div className="mb-6">
            <ChallengeChat challengeId={challenge.id} currentUserId={userId} />
          </div>
        )}

        {/* Back link */}
        <div className="flex gap-3">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm">← Dashboard</Button>
          </Link>
          <Link href="/challenges">
            <Button variant="ghost" size="sm">Browse Challenges</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}

function PlayerInfo({
  username, wins, losses, label, isWinner, flip = false,
}: {
  username: string;
  wins: number;
  losses: number;
  label?: string;
  isWinner?: boolean;
  flip?: boolean;
}) {
  const winRate = wins + losses > 0 ? Math.round((wins / (wins + losses)) * 100) : 0;
  return (
    <div className={`flex flex-col ${flip ? "items-end text-right" : "items-start text-left"} gap-1`}>
      <div className="flex items-center gap-2">
        {isWinner && <Trophy className="w-4 h-4 text-[#fbbf24]" />}
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm ${isWinner ? "bg-gradient-to-br from-[#00ff88] to-[#8b5cf6] text-[#0a0a0f]" : "bg-[#1a1a24] text-[#a1a1aa]"}`}>
          {username[0]?.toUpperCase()}
        </div>
      </div>
      <div className={`font-bold text-[#f0f0f5] text-sm ${isWinner ? "text-[#00ff88]" : ""}`}>{username}</div>
      {label && <div className="text-xs text-[#8b5cf6] font-semibold">{label}</div>}
      <div className="text-xs text-[#6b7280]">{winRate}% WR · {wins}W/{losses}L</div>
    </div>
  );
}

function EvidenceThumb({ ev }: { ev: { fileUrl: string; fileType: string; description?: string | null } }) {
  return (
    <div className="rounded-lg overflow-hidden border border-[#2a2a3a] bg-[#1a1a24]">
      {ev.fileType === "image" ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={ev.fileUrl} alt="Evidence" className="w-full h-28 object-cover" />
      ) : (
        <video src={ev.fileUrl} className="w-full h-28 object-cover" controls />
      )}
      {ev.description && (
        <div className="px-2 py-1 text-xs text-[#6b7280] truncate">{ev.description}</div>
      )}
    </div>
  );
}
