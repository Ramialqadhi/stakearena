"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useSession } from "@/hooks/useSession";
import { useRouter } from "next/navigation";
import { SUPPORTED_GAMES } from "@/types";
import { ChevronDown, X, CheckCircle, Loader2, Users, AlertCircle, Gamepad2 } from "lucide-react";
import Link from "next/link";

type Phase = "idle" | "searching" | "matched" | "expired";
type Counts = Record<string, Record<string, number>>;

const STAKE  = 25;
const PAYOUT = +(STAKE * 2 * 0.9).toFixed(2);
// Orb is sized responsively via CSS clamp — this constant is for ring sizing
const ORB_PX = 240;

function formatCountdown(iso: string): string {
  const left = Math.max(0, new Date(iso).getTime() - Date.now());
  const m = Math.floor(left / 60_000);
  const s = Math.floor((left % 60_000) / 1_000);
  return `${m}:${String(s).padStart(2, "0")}`;
}

/* ── Custom dropdown ────────────────────────────────────────────── */
function GameDropdown({
  value, onChange, disabled,
}: { value: string; onChange: (v: string) => void; disabled: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function close(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);

  const selected = SUPPORTED_GAMES.find(g => g.id === value) ?? SUPPORTED_GAMES[0];

  return (
    <div ref={ref} className="relative w-full max-w-[260px]">
      <button
        type="button"
        onClick={() => !disabled && setOpen(o => !o)}
        disabled={disabled}
        className="w-full flex items-center justify-between gap-3 px-5 py-3 rounded-2xl text-sm font-bold text-[#f0f0f5] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        style={{
          background: "rgba(12,12,20,0.88)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: open ? "1px solid rgba(0,255,136,0.55)" : "1px solid rgba(0,255,136,0.28)",
          boxShadow: open ? "0 0 0 1px rgba(0,255,136,0.15), 0 0 18px rgba(0,255,136,0.1)" : "none",
        }}
      >
        <span className="flex items-center gap-2.5">
          <span className="text-base leading-none">{selected.emoji}</span>
          <span>{selected.name}</span>
        </span>
        <span
          className="flex items-center justify-center w-5 h-5 rounded-md flex-shrink-0"
          style={{
            background: "rgba(0,255,136,0.1)",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
          }}
        >
          <ChevronDown className="w-3.5 h-3.5 text-[#00ff88]" />
        </span>
      </button>

      {open && (
        <div
          className="absolute bottom-full left-0 right-0 mb-2 rounded-2xl overflow-hidden z-50"
          style={{
            background: "rgba(8,8,16,0.97)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(0,255,136,0.22)",
            boxShadow: "0 -8px 40px rgba(0,0,0,0.7), 0 0 24px rgba(0,255,136,0.08)",
          }}
        >
          {SUPPORTED_GAMES.map(g => (
            <button
              key={g.id}
              type="button"
              onClick={() => { onChange(g.id); setOpen(false); }}
              className="w-full flex items-center gap-3 px-5 py-3 text-sm font-semibold text-left transition-colors"
              style={{
                color: g.id === value ? "#00ff88" : "#c8c8d8",
                background: g.id === value ? "rgba(0,255,136,0.1)" : "transparent",
              }}
              onMouseEnter={e => { if (g.id !== value) (e.currentTarget as HTMLElement).style.background = "rgba(0,255,136,0.06)"; }}
              onMouseLeave={e => { if (g.id !== value) (e.currentTarget as HTMLElement).style.background = "transparent"; }}
            >
              <span className="text-base leading-none">{g.emoji}</span>
              <span>{g.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Main component ─────────────────────────────────────────────── */
export function QuickMatchOrb() {
  const { data: session, update } = useSession();
  const router = useRouter();

  const [game,      setGame]      = useState(SUPPORTED_GAMES[0].id);
  const [phase,     setPhase]     = useState<Phase>("idle");
  const [counts,    setCounts]    = useState<Counts>({});
  const [expiry,    setExpiry]    = useState<string | null>(null);
  const [countdown, setCountdown] = useState("");
  const [matchedId, setMatchedId] = useState<string | null>(null);
  const [isJoining, setIsJoining] = useState(false);
  const [joinError, setJoinError] = useState("");
  const [credGate,  setCredGate]  = useState(false);

  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const fetchCounts = useCallback(async () => {
    try {
      const d = await fetch("/api/matchmaking/counts").then(r => r.json());
      setCounts(d.counts ?? {});
    } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    fetchCounts();
    const id = setInterval(fetchCounts, 15_000);
    return () => clearInterval(id);
  }, [fetchCounts]);

  useEffect(() => {
    if (phase !== "searching" || !expiry) return;
    const id = setInterval(() => setCountdown(formatCountdown(expiry)), 500);
    setCountdown(formatCountdown(expiry));
    return () => clearInterval(id);
  }, [phase, expiry]);

  const pollStatus = useCallback(async () => {
    try {
      const d = await fetch("/api/matchmaking/status").then(r => r.json());
      if (d.status === "matched" && d.challengeId) {
        if (pollRef.current) clearInterval(pollRef.current);
        setMatchedId(d.challengeId);
        setPhase("matched");
        await update();
        setTimeout(() => router.push(`/challenges/${d.challengeId}`), 1_600);
      } else if (d.status === "expired") {
        if (pollRef.current) clearInterval(pollRef.current);
        await update();
        setPhase("expired");
      } else if (d.status === "idle") {
        if (pollRef.current) clearInterval(pollRef.current);
        setPhase("idle");
      }
    } catch { /* ignore */ }
  }, [update, router]);

  useEffect(() => {
    if (phase === "searching") {
      pollRef.current = setInterval(pollStatus, 3_000);
      return () => { if (pollRef.current) clearInterval(pollRef.current); };
    }
  }, [phase, pollStatus]);

  useEffect(() => {
    if (!session?.user) return;
    fetch("/api/matchmaking/status")
      .then(r => r.json())
      .then(d => {
        if (d.status === "waiting") {
          if (d.game) setGame(d.game);
          setExpiry(d.expiresAt);
          setPhase("searching");
        }
      })
      .catch(() => {});
  }, [session?.user]);

  async function joinQueue() {
    setJoinError("");
    setCredGate(false);
    setIsJoining(true);
    try {
      const res  = await fetch("/api/matchmaking/join", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ game, stakeAmount: STAKE }),
      });
      const data = await res.json();
      if (!res.ok) {
        if (data.credentialGate) { setCredGate(true); setPhase("idle"); return; }
        setJoinError(data.error || "Failed to join.");
        return;
      }
      await update();
      if (data.matched) {
        setMatchedId(data.challengeId);
        setPhase("matched");
        setTimeout(() => router.push(`/challenges/${data.challengeId}`), 1_600);
      } else {
        setExpiry(data.expiresAt);
        setPhase("searching");
      }
    } catch {
      setJoinError("Something went wrong. Please try again.");
    } finally {
      setIsJoining(false);
    }
  }

  async function leaveQueue() {
    try {
      await fetch("/api/matchmaking/leave", { method: "POST" });
      await update();
      fetchCounts();
    } catch { /* ignore */ }
    setPhase("idle");
    setExpiry(null);
    setJoinError("");
    setCredGate(false);
  }

  const queueCount  = counts[game]?.[String(STAKE)] ?? 0;
  const isSearching = phase === "searching";
  const isMatched   = phase === "matched";

  // Animation class for the orb button
  const orbAnimClass = isMatched
    ? "orb-matched"
    : isSearching
    ? "orb-breathe"
    : "orb-idle-glow";

  return (
    // Takes full height of parent — orb gets flex-1, bottom section is shrink-0
    <div className="flex flex-col items-center w-full h-full">

      {/* ── Orb zone — fills remaining height ─────────────────── */}
      <div className="flex-1 min-h-0 flex items-center justify-center w-full overflow-hidden">
        {/* Fixed-size ring container centered in the flex zone */}
        <div
          className="relative flex items-center justify-center flex-shrink-0"
          style={{ width: ORB_PX + 140, height: ORB_PX + 140 }}
        >
          {/* Ping rings */}
          {!isMatched && (isSearching
            ? [0, 1, 2, 3].map(i => (
              <div
                key={i}
                className="absolute rounded-full border border-[#00ff88] search-ping pointer-events-none"
                style={{ width: ORB_PX, height: ORB_PX, animationDelay: `${i * 0.55}s` }}
              />
            ))
            : (
              <div
                className="absolute rounded-full border border-[rgba(0,255,136,0.5)] idle-ping pointer-events-none"
                style={{ width: ORB_PX, height: ORB_PX }}
              />
            )
          )}

          {/* Rotating dashed outer ring */}
          {!isMatched && (
            <div
              className={`absolute rounded-full pointer-events-none ${isSearching ? "ring-spin-fast" : "ring-spin-slow"}`}
              style={{
                width: ORB_PX + 44, height: ORB_PX + 44,
                border: `2px dashed ${isSearching ? "rgba(0,255,136,0.5)" : "rgba(0,255,136,0.28)"}`,
              }}
            />
          )}

          {/* Matched steady pulse ring */}
          {isMatched && (
            <div
              className="absolute rounded-full border-2 border-[#00ff88] orb-matched pointer-events-none"
              style={{ width: ORB_PX + 44, height: ORB_PX + 44 }}
            />
          )}

          {/* Core orb button */}
          <button
            onClick={() => {
              if (isSearching || isMatched) return;
              if (!session?.user) { router.push("/login"); return; }
              if (phase === "idle") joinQueue();
            }}
            disabled={isSearching || isMatched || isJoining}
            className={`relative z-10 rounded-full flex flex-col items-center justify-center gap-1 select-none
              ${!(isSearching || isMatched || isJoining) ? "active:scale-95 cursor-pointer" : "cursor-default"}
              ${orbAnimClass}`}
            style={{
              width: ORB_PX, height: ORB_PX,
              background: isMatched
                ? "radial-gradient(circle at 38% 32%, rgba(0,255,136,0.28), rgba(0,80,40,0.1) 65%)"
                : isSearching
                ? "radial-gradient(circle at 38% 32%, rgba(0,255,136,0.18), rgba(0,60,30,0.06) 65%)"
                : "radial-gradient(circle at 38% 32%, rgba(0,255,136,0.13), rgba(0,30,15,0.04) 65%)",
              border: `2px solid ${isMatched ? "rgba(0,255,136,0.9)" : isSearching ? "rgba(0,255,136,0.75)" : "rgba(0,255,136,0.6)"}`,
              transition: "border-color 0.4s, background 0.4s",
            }}
          >
            {isMatched ? (
              <>
                <CheckCircle className="w-14 h-14 text-[#00ff88]" />
                <span className="text-sm font-black text-[#00ff88] tracking-widest uppercase mt-1">Match Found!</span>
              </>
            ) : isSearching ? (
              <>
                <span className="text-[#00ff88] font-black text-xl tracking-widest uppercase">Searching</span>
                <Loader2 className="w-7 h-7 text-[#00ff88] animate-spin mt-1" />
              </>
            ) : (
              <>
                <span
                  className="font-black tracking-widest uppercase leading-none"
                  style={{ fontSize: "clamp(1.4rem, 4vw, 2rem)", color: "#00ff88" }}
                >
                  FIND
                </span>
                <span
                  className="font-black tracking-widest uppercase leading-none"
                  style={{ fontSize: "clamp(1.4rem, 4vw, 2rem)", color: "#00ff88" }}
                >
                  MATCH
                </span>
                <span
                  className="font-bold tracking-widest uppercase mt-2 text-xs"
                  style={{ color: "rgba(0,255,136,0.5)" }}
                >
                  $25 stake
                </span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* ── Bottom section — fixed height, no scroll ───────────── */}
      <div className="shrink-0 flex flex-col items-center gap-3 w-full pb-5 px-4">

        {/* Credential gate message */}
        {credGate && (
          <div
            className="w-full max-w-[260px] p-4 rounded-2xl flex flex-col gap-3"
            style={{
              background: "rgba(8,8,16,0.92)",
              border: "1px solid rgba(139,92,246,0.4)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}
          >
            <div className="flex items-start gap-2">
              <Gamepad2 className="w-4 h-4 text-[#8b5cf6] flex-shrink-0 mt-0.5" />
              <p className="text-xs text-[#a1a1aa] leading-relaxed">
                Add your <span className="text-[#f0f0f5] font-semibold">{SUPPORTED_GAMES.find(g => g.id === game)?.name}</span> credentials in your profile before playing.
              </p>
            </div>
            <Link
              href="/profile"
              className="w-full py-2.5 rounded-xl bg-[#8b5cf6] text-white font-bold text-xs tracking-wide uppercase text-center hover:bg-[#7c3aed] transition-colors"
            >
              Profile → Game Profiles
            </Link>
          </div>
        )}

        {/* Join error (non-credential errors) */}
        {joinError && (
          <div className="w-full max-w-[260px] flex items-center gap-2 p-3 rounded-xl bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.3)] text-red-400 text-xs">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            {joinError}
          </div>
        )}

        {/* Game dropdown */}
        <GameDropdown
          value={game}
          onChange={v => { setGame(v); setCredGate(false); setJoinError(""); }}
          disabled={isSearching || isMatched}
        />

        {/* Cancel when searching */}
        {isSearching && (
          <button
            onClick={leaveQueue}
            className="flex items-center gap-2 px-5 py-2 rounded-xl border border-[rgba(239,68,68,0.35)] text-[#ef4444] text-sm font-semibold bg-[rgba(239,68,68,0.06)] hover:bg-[rgba(239,68,68,0.12)] transition-colors"
          >
            <X className="w-4 h-4" />
            Cancel &amp; Refund
          </button>
        )}

        {/* Redirect link when matched */}
        {isMatched && matchedId && (
          <Link href={`/challenges/${matchedId}`} className="text-sm text-[#00ff88] hover:underline font-semibold tracking-wide">
            Go to match →
          </Link>
        )}

        {/* Expired state */}
        {phase === "expired" && (
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-[#6b7280] text-sm">No match found — stake refunded.</p>
            <button onClick={() => setPhase("idle")} className="text-sm text-[#00ff88] hover:underline font-semibold">
              Try again
            </button>
          </div>
        )}

        {/* Info bar */}
        {(phase === "idle" || phase === "searching") && (
          <div
            className="flex items-center gap-4 text-sm text-[#6b7280] px-5 py-2 rounded-2xl"
            style={{
              background: "rgba(8,8,16,0.75)",
              border: "1px solid rgba(255,255,255,0.06)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            <span>
              Winner takes{" "}
              <span className="text-[#00ff88] font-bold">${PAYOUT}</span>
            </span>
            <span className="w-px h-4 bg-[#2a2a3a]" />
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#00ff88]" />
              <span>
                <span className="text-[#f0f0f5] font-bold">{isSearching ? queueCount + 1 : queueCount}</span>
                {" "}in queue
              </span>
            </span>
            {isSearching && expiry && (
              <>
                <span className="w-px h-4 bg-[#2a2a3a]" />
                <span className="font-mono text-[#8b5cf6] font-bold text-xs">{countdown}</span>
              </>
            )}
          </div>
        )}

        {/* Sign-in prompt */}
        {!session?.user && phase === "idle" && (
          <p className="text-xs text-[#6b7280] text-center">
            <Link href="/login" className="text-[#00ff88] font-semibold hover:underline">Sign in</Link>
            {" "}to play for real stakes
          </p>
        )}
      </div>
    </div>
  );
}
