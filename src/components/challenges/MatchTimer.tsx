"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useSession } from "@/hooks/useSession";
import { useRouter } from "next/navigation";
import { Clock, AlertTriangle } from "lucide-react";
import { getGameTTL } from "@/lib/gameTimers";

const WARNING_MS = 30 * 60 * 1000; // 30 minutes

function formatTime(ms: number): string {
  if (ms <= 0) return "0:00:00";
  const h = Math.floor(ms / 3_600_000);
  const m = Math.floor((ms % 3_600_000) / 60_000);
  const s = Math.floor((ms % 60_000) / 1_000);
  return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function MatchTimer({
  challengeId,
  startedAt,
  game,
}: {
  challengeId: string;
  startedAt: string;
  game: string;
}) {
  const { update } = useSession();
  const router = useRouter();
  const expiresAt = useMemo(
    () => new Date(new Date(startedAt).getTime() + getGameTTL(game)),
    [startedAt, game],
  );

  const [remaining, setRemaining] = useState(() =>
    Math.max(0, expiresAt.getTime() - Date.now())
  );
  const [expired, setExpired] = useState(false);

  const handleExpire = useCallback(async () => {
    try {
      const res = await fetch(`/api/challenges/${challengeId}/expire`, { method: "POST" });
      if (res.ok) {
        await update();
        router.refresh();
      }
    } catch {
      // silently ignore
    }
  }, [challengeId, update, router]);

  useEffect(() => {
    const tick = setInterval(() => {
      const left = Math.max(0, expiresAt.getTime() - Date.now());
      setRemaining(left);
      if (left === 0 && !expired) {
        setExpired(true);
        clearInterval(tick);
        handleExpire();
      }
    }, 1_000);
    return () => clearInterval(tick);
  }, [expiresAt, expired, handleExpire]);

  const isWarning = remaining <= WARNING_MS && remaining > 0;
  const isUrgent  = remaining <= 10 * 60 * 1000 && remaining > 0; // under 10 min
  const color = expired ? "#ef4444" : isWarning ? (isUrgent ? "#ef4444" : "#f59e0b") : "#00ff88";

  return (
    <div
      className={`glass rounded-xl px-4 py-3 border flex items-center gap-3${isUrgent ? " animate-pulse" : ""}`}
      style={{
        borderColor: `${color}50`,
        backgroundColor: `${color}08`,
        boxShadow: isWarning ? `0 0 20px ${color}18` : "none",
      }}
    >
      {isWarning || expired ? (
        <AlertTriangle className="w-4 h-4 flex-shrink-0" style={{ color }} />
      ) : (
        <Clock className="w-4 h-4 flex-shrink-0" style={{ color }} />
      )}
      <div className="flex-1">
        <div className="text-xs font-semibold" style={{ color }}>
          {expired
            ? "Match time expired — stake refunded"
            : isUrgent
            ? "🔴 Under 10 minutes — submit now!"
            : isWarning
            ? "⚠️ Under 30 minutes remaining!"
            : "Match time remaining"}
        </div>
        {!expired && (
          <div className="font-mono text-lg font-black" style={{ color }}>
            {formatTime(remaining)}
          </div>
        )}
      </div>
      {!expired && (
        <div className="text-xs text-[#6b7280] hidden sm:block">
          expires {expiresAt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </div>
      )}
    </div>
  );
}
