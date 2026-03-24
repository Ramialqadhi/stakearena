"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function GhostStrikeActions({
  userId,
  isSuspended,
  hasStrikes,
}: {
  userId: string;
  isSuspended: boolean;
  hasStrikes: boolean;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState<"strikes" | "suspension" | null>(null);

  async function clearStrikes() {
    setLoading("strikes");
    await fetch(`/api/admin/users/${userId}/clear-strikes`, { method: "POST" });
    router.refresh();
    setLoading(null);
  }

  async function liftSuspension() {
    setLoading("suspension");
    await fetch(`/api/admin/users/${userId}/lift-suspension`, { method: "POST" });
    router.refresh();
    setLoading(null);
  }

  return (
    <div className="flex items-center gap-2">
      {hasStrikes && (
        <button
          onClick={clearStrikes}
          disabled={loading !== null}
          className="text-xs px-3 py-1.5 rounded-lg border border-[rgba(251,191,36,0.3)] bg-[rgba(251,191,36,0.06)] text-[#fbbf24] font-semibold hover:bg-[rgba(251,191,36,0.12)] transition-colors disabled:opacity-50"
        >
          {loading === "strikes" ? "Clearing..." : "Clear Strikes"}
        </button>
      )}
      {isSuspended && (
        <button
          onClick={liftSuspension}
          disabled={loading !== null}
          className="text-xs px-3 py-1.5 rounded-lg border border-[rgba(0,255,136,0.3)] bg-[rgba(0,255,136,0.06)] text-[#00ff88] font-semibold hover:bg-[rgba(0,255,136,0.12)] transition-colors disabled:opacity-50"
        >
          {loading === "suspension" ? "Lifting..." : "Lift Suspension"}
        </button>
      )}
    </div>
  );
}
