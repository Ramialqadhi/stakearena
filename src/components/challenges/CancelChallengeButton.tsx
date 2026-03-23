"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { XCircle, Loader2 } from "lucide-react";

export function CancelChallengeButton({ challengeId }: { challengeId: string }) {
  const { update } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleCancel() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/challenges/${challengeId}/cancel`, {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to cancel challenge.");
        return;
      }
      await update({});
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      {error && (
        <p className="text-red-400 text-sm bg-[rgba(239,68,68,0.08)] border border-[rgba(239,68,68,0.2)] rounded-lg px-3 py-2">
          {error}
        </p>
      )}
      <button
        onClick={handleCancel}
        disabled={loading}
        className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[rgba(239,68,68,0.35)] text-[#ef4444] bg-[rgba(239,68,68,0.06)] hover:bg-[rgba(239,68,68,0.12)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-semibold w-full justify-center"
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <XCircle className="w-4 h-4" />
        )}
        Cancel Challenge & Refund Stake
      </button>
    </div>
  );
}
