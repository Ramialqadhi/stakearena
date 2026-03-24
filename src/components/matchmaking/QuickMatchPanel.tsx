"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useSession } from "@/hooks/useSession";
import { useRouter } from "next/navigation";
import { SUPPORTED_GAMES } from "@/types";
import { GAME_CREDENTIALS } from "@/lib/gameCredentials";
import { GameIcon } from "@/components/games/GameIcon";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { RecordingNoticeModal } from "@/components/challenges/RecordingNoticeModal";
import {
  Zap, Users, X, CheckCircle, AlertCircle, User, Clock, Loader2,
} from "lucide-react";
import Link from "next/link";

type Step = "idle" | "notice" | "credentials" | "waiting" | "matched" | "expired" | "error";

const STAKES = [5, 15, 25] as const;
type Counts = Record<string, Record<string, number>>;

function formatCountdown(expiresAt: string): string {
  const left = Math.max(0, new Date(expiresAt).getTime() - Date.now());
  const m = Math.floor(left / 60_000);
  const s = Math.floor((left % 60_000) / 1_000);
  return `${m}:${String(s).padStart(2, "0")}`;
}

// ── Radar orb ──────────────────────────────────────────────────────
function SearchingOrb({ size = "sm" }: { size?: "sm" | "lg" }) {
  const dim = size === "lg" ? 128 : 88;
  const icon = size === "lg" ? 40 : 28;
  return (
    <div className="relative flex items-center justify-center" style={{ width: dim * 4, height: dim * 4 }}>
      {/* Ripple rings */}
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute rounded-full border border-[#00ff88] radar-ring"
          style={{
            width:  dim,
            height: dim,
            animationDelay: `${i * 0.8}s`,
          }}
        />
      ))}
      {/* Core orb */}
      <div
        className="relative z-10 rounded-full bg-[#00ff88] orb-breathe flex items-center justify-center"
        style={{ width: dim, height: dim }}
      >
        <Zap style={{ width: icon, height: icon, color: "#0a0a0f" }} strokeWidth={2.5} />
      </div>
    </div>
  );
}

export function QuickMatchPanel({ fullPage = false }: { fullPage?: boolean }) {
  const { data: session, update } = useSession();
  const router = useRouter();

  const [game, setGame]               = useState(SUPPORTED_GAMES[0].id);
  const [stake, setStake]             = useState<number>(5);
  const [credentials, setCredentials] = useState("");
  const [step, setStep]               = useState<Step>("idle");
  const [error, setError]             = useState("");
  const [counts, setCounts]           = useState<Counts>({});
  const [queueExpiry, setQueueExpiry] = useState<string | null>(null);
  const [matchedId, setMatchedId]     = useState<string | null>(null);
  const [countdown, setCountdown]     = useState("");
  const [isJoining, setIsJoining]     = useState(false);

  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const fetchCounts = useCallback(async () => {
    try {
      const res = await fetch("/api/matchmaking/counts");
      const data = await res.json();
      setCounts(data.counts ?? {});
    } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    fetchCounts();
    const id = setInterval(fetchCounts, 15_000);
    return () => clearInterval(id);
  }, [fetchCounts]);

  useEffect(() => {
    if (step !== "waiting" || !queueExpiry) return;
    const tick = setInterval(() => setCountdown(formatCountdown(queueExpiry)), 500);
    setCountdown(formatCountdown(queueExpiry));
    return () => clearInterval(tick);
  }, [step, queueExpiry]);

  const pollStatus = useCallback(async () => {
    try {
      const res  = await fetch("/api/matchmaking/status");
      const data = await res.json();
      if (data.status === "matched" && data.challengeId) {
        if (pollRef.current) clearInterval(pollRef.current);
        setMatchedId(data.challengeId);
        setStep("matched");
        await update();
        setTimeout(() => router.push(`/challenges/${data.challengeId}`), 1_500);
      } else if (data.status === "expired") {
        if (pollRef.current) clearInterval(pollRef.current);
        await update();
        setStep("expired");
      } else if (data.status === "idle") {
        if (pollRef.current) clearInterval(pollRef.current);
        setStep("idle");
      }
    } catch { /* ignore */ }
  }, [update, router]);

  useEffect(() => {
    if (step === "waiting") {
      pollRef.current = setInterval(pollStatus, 3_000);
      return () => { if (pollRef.current) clearInterval(pollRef.current); };
    }
  }, [step, pollStatus]);

  useEffect(() => {
    if (!session?.user) return;
    fetch("/api/matchmaking/status")
      .then(r => r.json())
      .then(data => {
        if (data.status === "waiting") {
          setGame(data.game ?? SUPPORTED_GAMES[0].id);
          setStake(data.stakeAmount ?? 5);
          setQueueExpiry(data.expiresAt);
          setStep("waiting");
        }
      })
      .catch(() => {});
  }, [session?.user]);

  async function handleJoin() {
    setError("");
    setIsJoining(true);
    try {
      const res  = await fetch("/api/matchmaking/join", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ game, stakeAmount: stake, credentials }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to join queue.");
        setStep("credentials");
        return;
      }
      await update();
      if (data.matched) {
        setMatchedId(data.challengeId);
        setStep("matched");
        setTimeout(() => router.push(`/challenges/${data.challengeId}`), 1_500);
      } else {
        setQueueExpiry(data.expiresAt);
        setStep("waiting");
      }
    } catch {
      setError("Something went wrong. Please try again.");
      setStep("credentials");
    } finally {
      setIsJoining(false);
    }
  }

  async function handleLeave() {
    try {
      await fetch("/api/matchmaking/leave", { method: "POST" });
      await update();
      fetchCounts();
    } catch { /* ignore */ }
    setStep("idle");
    setQueueExpiry(null);
  }

  const queueCount = counts[game]?.[String(stake)] ?? 0;
  const gameInfo   = SUPPORTED_GAMES.find(g => g.id === game);
  const credConfig = GAME_CREDENTIALS[game];

  // ── Matched ──────────────────────────────────────────────────────
  if (step === "matched") {
    return (
      <div className="glass rounded-2xl border border-[rgba(0,255,136,0.4)] p-10 flex flex-col items-center gap-5 text-center"
        style={{ boxShadow: "0 0 60px rgba(0,255,136,0.15)" }}>
        <div className="w-20 h-20 rounded-2xl bg-[rgba(0,255,136,0.15)] border border-[rgba(0,255,136,0.35)] flex items-center justify-center">
          <CheckCircle className="w-10 h-10 text-[#00ff88]" />
        </div>
        <div>
          <div className="text-2xl font-black text-[#00ff88]">Match Found!</div>
          <div className="text-sm text-[#6b7280] mt-1">Redirecting to your match…</div>
        </div>
        <Loader2 className="w-5 h-5 text-[#00ff88] animate-spin" />
        {matchedId && (
          <Link href={`/challenges/${matchedId}`} className="text-xs text-[#00ff88] hover:underline">
            Click here if not redirected
          </Link>
        )}
      </div>
    );
  }

  // ── Expired ──────────────────────────────────────────────────────
  if (step === "expired") {
    return (
      <div className={`glass rounded-2xl border border-[rgba(107,114,128,0.3)] flex flex-col items-center gap-5 text-center ${fullPage ? "p-16" : "p-10"}`}>
        <Clock className={`text-[#6b7280] ${fullPage ? "w-16 h-16" : "w-10 h-10"}`} />
        <div>
          <div className={`font-bold text-[#a1a1aa] ${fullPage ? "text-2xl" : "text-lg"}`}>No Match Found</div>
          <div className="text-sm text-[#6b7280] mt-2">Your stake has been refunded to your wallet.</div>
        </div>
        <Button variant="outline" size="md" onClick={() => setStep("idle")}>Try Again</Button>
      </div>
    );
  }

  // ── Waiting — Radar Orb ──────────────────────────────────────────
  if (step === "waiting") {
    return (
      <div className={`flex flex-col items-center gap-6 ${fullPage ? "py-8" : "py-6"}`}>
        {/* Orb */}
        <SearchingOrb size={fullPage ? "lg" : "sm"} />

        {/* Status text */}
        <div className="text-center">
          <div className={`font-black text-[#f0f0f5] ${fullPage ? "text-2xl" : "text-lg"}`}>
            Searching for opponent…
          </div>
          <div className="text-sm text-[#6b7280] mt-1 flex items-center justify-center gap-2">
            <GameIcon gameId={game} size="xs" className="rounded" />
            <span>{gameInfo?.name}</span>
            <span className="text-[#3a3a4a]">·</span>
            <span className="text-[#fbbf24] font-semibold">${stake}</span> stake
            <span className="text-[#3a3a4a]">·</span>
            <span className="text-[#00ff88] font-semibold">${(stake * 2 * 0.9).toFixed(2)}</span> winner
          </div>
        </div>

        {/* Countdown + queue count */}
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-1.5 text-[#8b5cf6]">
            <Clock className="w-4 h-4" />
            <span className="font-mono font-bold">{countdown}</span>
            <span className="text-[#6b7280]">left</span>
          </div>
          <div className="w-px h-4 bg-[#2a2a3a]" />
          <div className="flex items-center gap-1.5 text-[#6b7280]">
            <Users className="w-4 h-4 text-[#00ff88]" />
            <span>
              <span className="text-[#f0f0f5] font-bold">{queueCount + 1}</span> in queue
            </span>
          </div>
        </div>

        {/* Cancel */}
        <button
          onClick={handleLeave}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[rgba(239,68,68,0.3)] text-[#ef4444] text-sm font-semibold bg-[rgba(239,68,68,0.05)] hover:bg-[rgba(239,68,68,0.1)] transition-colors"
        >
          <X className="w-4 h-4" />
          Cancel & Refund Stake
        </button>
      </div>
    );
  }

  // ── Not logged in ─────────────────────────────────────────────────
  if (!session?.user) {
    return (
      <QuickMatchShell
        game={game} setGame={setGame}
        stake={stake} setStake={setStake}
        counts={counts}
      >
        <Link href="/login" className="block">
          <Button variant="primary" size="lg" pulse className="w-full font-black text-base">
            <Zap className="w-5 h-5 mr-2" />
            Sign In to Quick Match
          </Button>
        </Link>
      </QuickMatchShell>
    );
  }

  // ── Credentials ──────────────────────────────────────────────────
  if (step === "credentials") {
    return (
      <div className="glass rounded-2xl border border-[rgba(0,255,136,0.25)] overflow-hidden">
        <div className="px-6 py-4 border-b border-[#1e1e2e] flex items-center gap-3">
          <GameIcon gameId={game} size="sm" />
          <div>
            <div className="font-black text-[#f0f0f5]">{gameInfo?.name}</div>
            <div className="text-xs text-[#6b7280]">${stake} stake · Quick Match</div>
          </div>
          <button onClick={() => setStep("idle")} className="ml-auto text-[#6b7280] hover:text-[#a1a1aa] transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="px-6 py-5 flex flex-col gap-4">
          {error && (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.3)] text-red-400 text-sm">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              {error}
            </div>
          )}
          <div className="rounded-xl border border-[rgba(139,92,246,0.3)] bg-[rgba(139,92,246,0.06)] p-4">
            <div className="flex items-center gap-2 mb-1">
              <User className="w-4 h-4 text-[#8b5cf6]" />
              <span className="text-sm font-bold text-[#f0f0f5]">{credConfig?.label ?? "Game Credentials"}</span>
              <span className="text-xs text-[#ef4444] font-semibold">Required</span>
            </div>
            <p className="text-xs text-[#6b7280] mb-3">{credConfig?.hint ?? "Provide your username so your opponent can find you."}</p>
            <Input
              type="text"
              placeholder={credConfig?.placeholder ?? "Your username"}
              value={credentials}
              onChange={e => setCredentials(e.target.value)}
              autoFocus
            />
          </div>
          <Button
            variant="primary"
            size="lg"
            pulse
            className="w-full font-black"
            onClick={handleJoin}
            disabled={!credentials.trim() || isJoining}
          >
            {isJoining ? (
              <><Loader2 className="w-5 h-5 mr-2 animate-spin" />Joining Queue…</>
            ) : (
              <><Zap className="w-5 h-5 mr-2" />Find Match — Stake ${stake}</>
            )}
          </Button>
          <p className="text-xs text-[#6b7280] text-center">
            ${stake} is locked immediately and refunded if no match is found within 2 minutes.
          </p>
        </div>
      </div>
    );
  }

  // ── Idle ──────────────────────────────────────────────────────────
  return (
    <>
      {step === "notice" && (
        <RecordingNoticeModal
          onConfirm={() => setStep("credentials")}
          onCancel={() => setStep("idle")}
        />
      )}
      <QuickMatchShell
        game={game} setGame={(g) => { setGame(g); setCredentials(""); }}
        stake={stake} setStake={setStake}
        counts={counts}
      >
        <Button
          variant="primary"
          size="lg"
          pulse
          className="w-full font-black text-base"
          onClick={() => setStep("notice")}
        >
          <Zap className="w-5 h-5 mr-2" />
          Find Match — ${stake}
        </Button>
      </QuickMatchShell>
    </>
  );
}

// ── Shared shell layout ────────────────────────────────────────────
function QuickMatchShell({
  game, setGame, stake, setStake, counts, children,
}: {
  game: string;
  setGame: (g: string) => void;
  stake: number;
  setStake: (s: number) => void;
  counts: Counts;
  children: React.ReactNode;
}) {
  const queueCount = counts[game]?.[String(stake)] ?? 0;

  return (
    <div className="glass rounded-2xl border border-[rgba(0,255,136,0.2)] overflow-hidden"
      style={{ boxShadow: "0 0 40px rgba(0,255,136,0.05)" }}>
      {/* Header */}
      <div className="px-6 py-4 border-b border-[#1e1e2e] flex items-center gap-3 bg-[rgba(0,255,136,0.02)]">
        <div className="w-9 h-9 rounded-xl bg-[rgba(0,255,136,0.12)] border border-[rgba(0,255,136,0.25)] flex items-center justify-center flex-shrink-0">
          <Zap className="w-5 h-5 text-[#00ff88]" />
        </div>
        <div>
          <div className="font-black text-[#f0f0f5] leading-tight">Quick Match</div>
          <div className="text-xs text-[#6b7280]">Auto-matched instantly · 90% payout</div>
        </div>
        {queueCount > 0 && (
          <div className="ml-auto flex items-center gap-1.5 text-xs font-bold text-[#00ff88] bg-[rgba(0,255,136,0.08)] border border-[rgba(0,255,136,0.2)] px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" />
            {queueCount} waiting
          </div>
        )}
      </div>

      <div className="px-6 py-5 flex flex-col gap-5">
        {/* Game selector */}
        <div>
          <p className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider mb-2">Game</p>
          <div className="grid grid-cols-3 gap-2">
            {SUPPORTED_GAMES.map(g => {
              const active = game === g.id;
              const cnt    = counts[g.id]?.[String(stake)] ?? 0;
              return (
                <button
                  key={g.id}
                  onClick={() => setGame(g.id)}
                  className={`relative flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl border text-xs font-semibold transition-all ${
                    active
                      ? "border-[#00ff88] bg-[rgba(0,255,136,0.08)] text-[#00ff88]"
                      : "border-[#2a2a3a] bg-[#1a1a24] text-[#a1a1aa] hover:border-[#3a3a4a]"
                  }`}
                >
                  <GameIcon gameId={g.id} size="sm" className="rounded-lg" />
                  <span className="truncate w-full text-center leading-tight">{g.name}</span>
                  {cnt > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#00ff88] text-[#0a0a0f] text-[10px] font-black flex items-center justify-center">
                      {cnt}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Stake selector */}
        <div>
          <p className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider mb-2">Stake</p>
          <div className="grid grid-cols-3 gap-2">
            {STAKES.map(s => {
              const active = stake === s;
              const cnt    = counts[game]?.[String(s)] ?? 0;
              return (
                <button
                  key={s}
                  onClick={() => setStake(s)}
                  className={`relative flex flex-col items-center gap-0.5 py-3 rounded-xl border font-black transition-all ${
                    active
                      ? "border-[#fbbf24] bg-[rgba(251,191,36,0.08)] text-[#fbbf24]"
                      : "border-[#2a2a3a] bg-[#1a1a24] text-[#a1a1aa] hover:border-[#3a3a4a]"
                  }`}
                >
                  <span className="text-base">${s}</span>
                  <span className="text-[10px] font-semibold text-[#6b7280]">
                    win ${(s * 2 * 0.9).toFixed(0)}
                  </span>
                  {cnt > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 text-[10px] font-bold text-[#00ff88] bg-[rgba(0,255,136,0.1)] border border-[rgba(0,255,136,0.3)] px-1.5 py-0.5 rounded-full">
                      {cnt}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Info row */}
        <div className="flex items-center justify-between text-xs text-[#6b7280] bg-[#141420] rounded-xl px-4 py-2.5 border border-[#1e1e2e]">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88]" />
            Winner gets <span className="text-[#00ff88] font-bold ml-1">${(stake * 2 * 0.9).toFixed(2)}</span>
          </span>
          <span className="text-[#2a2a3a]">|</span>
          <span className="flex items-center gap-1">
            <Users className="w-3 h-3 text-[#6b7280]" />
            {queueCount} in queue
          </span>
          <span className="text-[#2a2a3a]">|</span>
          <span>10% fee</span>
        </div>

        {children}
      </div>
    </div>
  );
}
