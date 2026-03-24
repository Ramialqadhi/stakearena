"use client";

import { useState } from "react";
import { useSession } from "@/hooks/useSession";
import { useRouter } from "next/navigation";
import { Clock, X, Loader2 } from "lucide-react";

type PendingWithdrawal = {
  id: string;
  amount: number;
  method: string;
  account: string;
  createdAt: string;
};

const METHOD_LABELS: Record<string, string> = {
  apple_pay: "Apple Pay",
  cash_app:  "Cash App",
  zelle:     "Zelle",
  venmo:     "Venmo",
};

export function PendingWithdrawals({ withdrawals }: { withdrawals: PendingWithdrawal[] }) {
  const { update } = useSession();
  const router = useRouter();
  const [cancelling, setCancelling] = useState<string | null>(null);
  const [error, setError] = useState("");

  if (withdrawals.length === 0) return null;

  async function handleCancel(withdrawalId: string) {
    setCancelling(withdrawalId);
    setError("");
    try {
      const res = await fetch("/api/wallet/withdraw/cancel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ withdrawalId }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Failed to cancel withdrawal.");
        return;
      }
      // Refresh session balance then reload page data
      await update();
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setCancelling(null);
    }
  }

  return (
    <div className="glass rounded-xl border border-[rgba(251,191,36,0.25)] overflow-hidden mb-6">
      <div className="px-5 py-4 border-b border-[#1e1e2e] flex items-center gap-2 bg-[rgba(251,191,36,0.04)]">
        <Clock className="w-4 h-4 text-[#fbbf24]" />
        <h2 className="text-sm font-bold text-[#fbbf24]">Pending Withdrawals</h2>
        <span className="ml-auto text-xs text-[#6b7280]">Amount locked from your balance</span>
      </div>

      {error && (
        <div className="px-5 py-2 text-xs text-red-400 bg-[rgba(239,68,68,0.06)] border-b border-[#1e1e2e]">
          {error}
        </div>
      )}

      <ul className="divide-y divide-[#1a1a24]">
        {withdrawals.map((w) => (
          <li key={w.id} className="flex items-center justify-between gap-4 px-5 py-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[rgba(251,191,36,0.1)] border border-[rgba(251,191,36,0.2)] flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 text-[#fbbf24]" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-[#f0f0f5]">
                  ${w.amount.toFixed(2)}{" "}
                  <span className="text-[#6b7280] font-normal">via {METHOD_LABELS[w.method] ?? w.method}</span>
                </div>
                <div className="text-xs text-[#6b7280] truncate">{w.account}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <span className="text-xs text-[#6b7280] hidden sm:block">
                {new Date(w.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
              </span>
              <button
                onClick={() => handleCancel(w.id)}
                disabled={cancelling === w.id}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-[rgba(239,68,68,0.35)] text-[#ef4444] bg-[rgba(239,68,68,0.06)] hover:bg-[rgba(239,68,68,0.12)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {cancelling === w.id ? (
                  <Loader2 className="w-3 h-3 animate-spin" />
                ) : (
                  <X className="w-3 h-3" />
                )}
                Cancel
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
