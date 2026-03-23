"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { DollarSign, Loader2, CreditCard } from "lucide-react";

const PRESETS = [10, 25, 50, 100, 250, 500];

export function WalletDepositForm() {
  const [selected, setSelected] = useState<number | null>(null);
  const [custom, setCustom] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const amount = custom ? parseFloat(custom) : selected;

  async function handleDeposit() {
    setError("");
    if (!amount || amount < 1) {
      setError("Please select or enter an amount.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/wallet/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to start checkout.");
        return;
      }
      window.location.href = data.url;
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="glass rounded-xl p-6 border border-[#1e1e2e] flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[rgba(0,255,136,0.1)] border border-[rgba(0,255,136,0.2)] flex items-center justify-center">
          <CreditCard className="w-5 h-5 text-[#00ff88]" />
        </div>
        <div>
          <h3 className="font-bold text-[#f0f0f5]">Deposit Funds</h3>
          <p className="text-xs text-[#6b7280]">Pay securely via Stripe</p>
        </div>
      </div>

      {error && (
        <p className="text-red-400 text-sm bg-[rgba(239,68,68,0.08)] border border-[rgba(239,68,68,0.2)] rounded-lg px-3 py-2">
          {error}
        </p>
      )}

      {/* Preset amounts */}
      <div>
        <p className="text-xs text-[#6b7280] mb-2 font-medium uppercase tracking-wide">Select Amount</p>
        <div className="grid grid-cols-3 gap-2">
          {PRESETS.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => { setSelected(p); setCustom(""); }}
              className={`py-2.5 rounded-lg border text-sm font-bold transition-all ${
                selected === p && !custom
                  ? "border-[#00ff88] bg-[rgba(0,255,136,0.1)] text-[#00ff88]"
                  : "border-[#2a2a3a] bg-[#1a1a24] text-[#a1a1aa] hover:border-[#3a3a4a]"
              }`}
            >
              ${p}
            </button>
          ))}
        </div>
      </div>

      {/* Custom amount */}
      <Input
        placeholder="Custom amount"
        type="number"
        min="1"
        max="10000"
        step="1"
        value={custom}
        onChange={(e) => { setCustom(e.target.value); setSelected(null); }}
        icon={<DollarSign className="w-4 h-4" />}
      />

      {/* Summary */}
      {amount && amount > 0 && (
        <div className="bg-[#1a1a24] rounded-lg px-4 py-3 flex justify-between items-center text-sm">
          <span className="text-[#6b7280]">You pay</span>
          <span className="font-black text-[#00ff88] text-lg">${amount.toFixed(2)}</span>
        </div>
      )}

      <Button
        variant="primary"
        size="md"
        className="w-full font-bold"
        onClick={handleDeposit}
        disabled={loading || !amount || amount < 1}
      >
        {loading ? (
          <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Redirecting to Stripe...</>
        ) : (
          <><CreditCard className="w-4 h-4 mr-2" />Deposit with Stripe</>
        )}
      </Button>

      <p className="text-xs text-[#6b7280] text-center">
        Secured by Stripe · No card details stored
      </p>
    </div>
  );
}
