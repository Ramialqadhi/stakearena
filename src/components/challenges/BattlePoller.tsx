"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const POLL_INTERVAL_MS = 30_000; // refresh page every 30 s while match is ACTIVE

/**
 * Invisible component. While mounted it refreshes the page every 30 seconds
 * so the server-side data (challenge status) stays up to date without
 * requiring a manual reload.
 *
 * Mount this only when challenge.status === "ACTIVE".
 */
export function BattlePoller({ challengeId }: { challengeId: string }) {
  const router   = useRouter();
  const idRef    = useRef(challengeId);

  useEffect(() => {
    const id = setInterval(() => {
      router.refresh();
    }, POLL_INTERVAL_MS);
    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idRef.current]);

  return null;
}
