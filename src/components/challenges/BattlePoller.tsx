"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const POLL_INTERVAL_MS = 60_000;

/**
 * Polls /api/challenges/[id]/poll-result every 60 s while the challenge
 * is ACTIVE. Triggers payout detection server-side and refreshes the page
 * when the result is found or the match expires.
 */
export function BattlePoller({ challengeId }: { challengeId: string }) {
  const router    = useRouter();
  const [checking, setChecking] = useState(false);
  const stopped   = useRef(false);

  useEffect(() => {
    stopped.current = false;

    async function poll() {
      if (stopped.current) return;
      setChecking(true);
      try {
        const res  = await fetch(`/api/challenges/${challengeId}/poll-result`, { method: "POST" });
        const data = await res.json() as { status?: string };
        if (data.status === "COMPLETED" || data.status === "CANCELLED") {
          stopped.current = true;
          router.refresh();
          return;
        }
      } catch {
        // network hiccup — keep polling
      } finally {
        setChecking(false);
      }
    }

    const timer = setInterval(poll, POLL_INTERVAL_MS);

    return () => {
      stopped.current = true;
      clearInterval(timer);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [challengeId]);

  return (
    <div className="flex items-center gap-2 text-xs text-[#6b7280] mt-2">
      <Loader2 className={`w-3 h-3 ${checking ? "animate-spin text-[#00ff88]" : "text-[#4b5563]"}`} />
      <span>{checking ? "Checking for match result…" : "Watching for result — checking every 60s"}</span>
    </div>
  );
}
