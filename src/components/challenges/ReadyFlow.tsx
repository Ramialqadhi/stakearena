"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle, Clock, Loader2, Swords } from "lucide-react";

function formatCountdown(ms: number): string {
  if (ms <= 0) return "0:00";
  const m = Math.floor(ms / 60_000);
  const s = Math.floor((ms % 60_000) / 1_000);
  return `${m}:${String(s).padStart(2, "0")}`;
}

function PlayerReadyStatus({
  username,
  isReady,
  isYou,
  flip,
}: {
  username: string;
  isReady: boolean;
  isYou: boolean;
  flip?: boolean;
}) {
  return (
    <div className={`flex flex-col items-center gap-2 ${flip ? "items-end" : "items-start"} flex-1`}>
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-black"
        style={{
          background: isReady
            ? "linear-gradient(135deg, #00ff88, #00cc66)"
            : "linear-gradient(135deg, #2a2a3a, #1e1e2e)",
          border: `2px solid ${isReady ? "rgba(0,255,136,0.8)" : "rgba(255,255,255,0.08)"}`,
          boxShadow: isReady ? "0 0 20px rgba(0,255,136,0.4)" : "none",
          color: isReady ? "#0a0a0f" : "#6b7280",
        }}
      >
        {isReady ? <CheckCircle className="w-6 h-6" /> : <Clock className="w-5 h-5" />}
      </div>
      <div className="text-center">
        <div className="text-sm font-bold text-[#f0f0f5]">{username}</div>
        {isYou && <div className="text-xs text-[#6b7280]">You</div>}
        <div
          className="text-xs font-bold mt-0.5"
          style={{ color: isReady ? "#00ff88" : "#6b7280" }}
        >
          {isReady ? "✓ Ready" : "Waiting..."}
        </div>
      </div>
    </div>
  );
}

export function ReadyFlow({
  challengeId,
  game,
  isCreator,
  creatorReady,
  opponentReady,
  creatorUsername,
  opponentUsername,
  readyDeadline,
}: {
  challengeId: string;
  game: string;
  isCreator: boolean;
  creatorReady: boolean;
  opponentReady: boolean;
  creatorUsername: string;
  opponentUsername: string;
  readyDeadline: string;
}) {
  const router = useRouter();
  const [checked, setChecked]   = useState(false);
  const [loading, setLoading]   = useState(false);
  const [error,   setError]     = useState("");
  const [timeLeft, setTimeLeft] = useState(() =>
    Math.max(0, new Date(readyDeadline).getTime() - Date.now())
  );

  const iAmReady     = isCreator ? creatorReady : opponentReady;
  const opponentName = isCreator ? opponentUsername : creatorUsername;
  const isUrgent      = timeLeft < 10 * 60_000 && timeLeft > 0;

  useEffect(() => {
    if (timeLeft <= 0) return;
    const id = setInterval(() => {
      setTimeLeft(Math.max(0, new Date(readyDeadline).getTime() - Date.now()));
    }, 1000);
    return () => clearInterval(id);
  }, [readyDeadline, timeLeft]);

  async function handleReady() {
    if (!checked || loading || iAmReady) return;
    setLoading(true);
    setError("");
    try {
      const res  = await fetch(`/api/challenges/${challengeId}/ready`, { method: "POST" });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Something went wrong.");
        return;
      }
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const deadlineColor = timeLeft <= 0 ? "#ef4444" : isUrgent ? "#ef4444" : timeLeft < 30 * 60_000 ? "#f59e0b" : "#6b7280";

  return (
    <div className="glass rounded-2xl border border-[rgba(0,255,136,0.15)] overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-[#1e1e2e] flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Swords className="w-4 h-4 text-[#00ff88]" />
          <span className="font-bold text-[#f0f0f5] text-sm">Pre-Match Confirmation</span>
        </div>
        {/* Deadline countdown */}
        <div className={`flex items-center gap-1.5 text-xs font-mono font-bold ${isUrgent ? "animate-pulse" : ""}`} style={{ color: deadlineColor }}>
          <Clock className="w-3.5 h-3.5" />
          {timeLeft > 0 ? formatCountdown(timeLeft) : "Expired"}
          <span className="font-normal text-[#6b7280] ml-1 font-sans">to confirm</span>
        </div>
      </div>

      {/* Ready status — both players */}
      <div className="px-6 py-5 flex items-center justify-between gap-4">
        <PlayerReadyStatus
          username={creatorUsername}
          isReady={creatorReady}
          isYou={isCreator}
        />
        <div className="flex flex-col items-center gap-1 flex-shrink-0">
          <span className="text-lg font-black text-[#6b7280]">VS</span>
        </div>
        <PlayerReadyStatus
          username={opponentUsername}
          isReady={opponentReady}
          isYou={!isCreator}
          flip
        />
      </div>

      <div className="px-6 pb-6">
        {timeLeft <= 0 ? (
          <div className="px-4 py-3 rounded-xl border border-[rgba(239,68,68,0.3)] bg-[rgba(239,68,68,0.06)] text-sm text-[#ef4444] text-center font-semibold">
            Ready deadline has passed. This match will be cancelled shortly.
          </div>
        ) : iAmReady ? (
          /* You clicked ready — waiting for opponent */
          <div className="flex flex-col items-center gap-3 py-2">
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-[rgba(0,255,136,0.25)] bg-[rgba(0,255,136,0.06)] w-full">
              <CheckCircle className="w-4 h-4 text-[#00ff88] flex-shrink-0" />
              <span className="text-sm text-[#f0f0f5]">
                You&apos;re confirmed ready!
                <span className="text-[#6b7280] ml-1">
                  Waiting for <strong className="text-[#f0f0f5]">{opponentName}</strong> to confirm…
                </span>
              </span>
            </div>
          </div>
        ) : (
          /* Not ready yet — show checklist + button */
          <div className="flex flex-col gap-4">
            {/* Separator */}
            <div className="h-px bg-[#1e1e2e]" />

            {/* Checklist */}
            <div>
              <p className="text-xs font-semibold text-[#6b7280] uppercase tracking-widest mb-3">
                Before clicking ready
              </p>
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex-shrink-0 mt-0.5">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={e => setChecked(e.target.checked)}
                    className="sr-only"
                  />
                  <div
                    className="w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all"
                    style={{
                      borderColor: checked ? "#00ff88" : "#2a2a3a",
                      background:  checked ? "rgba(0,255,136,0.15)" : "transparent",
                    }}
                  >
                    {checked && (
                      <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                        <path d="M1 4L4 7.5L10 1" stroke="#00ff88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-sm text-[#a1a1aa] leading-relaxed group-hover:text-[#f0f0f5] transition-colors">
                  I have sent or accepted{" "}
                  <strong className="text-[#f0f0f5]">{opponentName}</strong>&apos;s friend request in{" "}
                  <strong className="text-[#f0f0f5]">
                    {game.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())}
                  </strong>{" "}
                  and we are ready to play.
                </span>
              </label>
            </div>

            {error && (
              <p className="text-xs text-[#ef4444]">{error}</p>
            )}

            {/* Ready button */}
            <button
              onClick={handleReady}
              disabled={!checked || loading}
              style={{
                width: "100%", padding: "14px", borderRadius: "14px",
                fontWeight: 900, fontSize: "15px", letterSpacing: "0.04em",
                textTransform: "uppercase", cursor: !checked || loading ? "not-allowed" : "pointer",
                background: checked
                  ? "linear-gradient(135deg, #00ff88, #00cc66)"
                  : "#1a1a28",
                color: checked ? "#0a0a0f" : "#3a3a4a",
                border: `2px solid ${checked ? "transparent" : "#2a2a3a"}`,
                boxShadow: checked ? "0 0 30px rgba(0,255,136,0.35)" : "none",
                transition: "all 0.2s",
                display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
              }}
            >
              {loading ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Confirming...</>
              ) : (
                <><CheckCircle className="w-4 h-4" /> I&apos;m Ready!</>
              )}
            </button>

            {!checked && (
              <p className="text-xs text-[#4b5563] text-center">
                Check the box above to enable the ready button
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
