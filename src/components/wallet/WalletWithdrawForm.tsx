"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { DollarSign, Loader2, ArrowUpRight, CheckCircle, Info } from "lucide-react";

const METHODS = [
  { id: "apple_pay",  label: "Apple Pay", placeholder: "Phone number or email linked to Apple Pay" },
  { id: "cash_app",  label: "Cash App",  placeholder: "$Cashtag username" },
  { id: "zelle",     label: "Zelle",     placeholder: "Phone number or email linked to Zelle" },
  { id: "venmo",     label: "Venmo",     placeholder: "Venmo username or phone number" },
];

const MIN = 25;
const FEE = 1.99;

export function WalletWithdrawForm({ balance }: { balance: number }) {
  const { update } = useSession();
  const router = useRouter();
  const [amount, setAmount]   = useState("");
  const [method, setMethod]   = useState("apple_pay");
  const [account, setAccount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");
  const [success, setSuccess] = useState(false);

  const parsed = parseFloat(amount);
  const insufficient = parsed > balance;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!parsed || parsed < MIN) { setError(`Minimum withdrawal is $${MIN}.`); return; }
    if (insufficient)            { setError("Insufficient balance.");           return; }
    if (!account.trim())         { setError("Please enter your payout account info."); return; }

    setLoading(true);
    try {
      const res = await fetch("/api/wallet/withdraw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: parsed, method, account }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Failed to submit withdrawal."); return; }
      await update({});
      router.refresh();
      setSuccess(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="glass rounded-xl p-6 border border-[rgba(0,255,136,0.2)] flex flex-col items-center justify-center gap-4 text-center min-h-[300px]">
        <CheckCircle className="w-12 h-12 text-[#00ff88]" />
        <div>
          <h3 className="font-bold text-[#f0f0f5] mb-1">Withdrawal Requested</h3>
          <p className="text-sm text-[#6b7280]">
            Your request for <span className="text-[#00ff88] font-semibold">${parsed.toFixed(2)}</span> has been submitted.
            The admin will process your payment via {METHODS.find(m => m.id === method)?.label} within 24 hours.
          </p>
        </div>
        <button
          onClick={() => { setSuccess(false); setAmount(""); setAccount(""); }}
          className="text-sm text-[#00ff88] hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  const currentMethod = METHODS.find(m => m.id === method);

  return (
    <div className="glass rounded-xl p-6 border border-[#1e1e2e] flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.2)] flex items-center justify-center">
          <ArrowUpRight className="w-5 h-5 text-[#ef4444]" />
        </div>
        <div>
          <h3 className="font-bold text-[#f0f0f5]">Withdraw Funds</h3>
          <p className="text-xs text-[#6b7280]">Processed within 24 hours</p>
        </div>
      </div>

      {error && (
        <p className="text-red-400 text-sm bg-[rgba(239,68,68,0.08)] border border-[rgba(239,68,68,0.2)] rounded-lg px-3 py-2">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          label="Amount"
          type="number"
          min={MIN}
          step="0.01"
          placeholder="0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          icon={<DollarSign className="w-4 h-4" />}
          error={insufficient ? `Max: $${balance.toFixed(2)}` : undefined}
        />

        {/* Fee info */}
        <div className="flex items-start gap-2 rounded-lg border border-[rgba(99,102,241,0.25)] bg-[rgba(99,102,241,0.06)] px-3 py-2.5">
          <Info className="w-3.5 h-3.5 text-[#818cf8] flex-shrink-0 mt-0.5" />
          <p className="text-xs text-[#a5b4fc] leading-relaxed">
            A <span className="font-semibold">${FEE.toFixed(2)} processing fee</span> applies to all withdrawals and is handled manually by the admin. Minimum withdrawal is <span className="font-semibold">${MIN}.00</span>.
          </p>
        </div>

        {/* Method selector */}
        <div>
          <p className="text-xs text-[#6b7280] mb-2 font-medium uppercase tracking-wide">Payout Method</p>
          <div className="grid grid-cols-2 gap-2">
            {METHODS.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => { setMethod(m.id); setAccount(""); }}
                className={`py-2.5 px-3 rounded-lg border text-xs font-semibold transition-all ${
                  method === m.id
                    ? "border-[#8b5cf6] bg-[rgba(139,92,246,0.1)] text-[#8b5cf6]"
                    : "border-[#2a2a3a] bg-[#1a1a24] text-[#a1a1aa] hover:border-[#3a3a4a]"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        <Input
          label={`${currentMethod?.label} Account Info`}
          type="text"
          placeholder={currentMethod?.placeholder ?? ""}
          value={account}
          onChange={(e) => setAccount(e.target.value)}
          required
        />

        <Button
          type="submit"
          variant="secondary"
          size="md"
          className="w-full font-bold"
          disabled={loading || !parsed || parsed < MIN || insufficient || !account}
        >
          {loading ? (
            <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Submitting...</>
          ) : (
            <><ArrowUpRight className="w-4 h-4 mr-2" />Request Withdrawal</>
          )}
        </Button>
      </form>

      <p className="text-xs text-[#6b7280] text-center">
        Funds are deducted from your balance immediately · Processed within 24 hrs
      </p>
    </div>
  );
}
