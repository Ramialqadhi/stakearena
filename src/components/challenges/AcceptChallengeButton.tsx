"use client";

import { useState, useEffect } from "react";
import { useSession } from "@/hooks/useSession";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Loader2, Swords, AlertCircle, ShieldAlert, Gamepad2 } from "lucide-react";
import { RecordingNoticeModal } from "@/components/challenges/RecordingNoticeModal";
import { SUPPORTED_GAMES } from "@/types";

type Step = "idle" | "notice";

export function AcceptChallengeButton({
  challengeId,
  stakeAmount,
  game,
}: {
  challengeId: string;
  stakeAmount: number;
  game: string;
}) {
  const { update } = useSession();
  const router = useRouter();
  const [step,         setStep]         = useState<Step>("idle");
  const [loading,      setLoading]      = useState(false);
  const [error,        setError]        = useState("");
  const [credGate,     setCredGate]     = useState(false);
  const [disputeBlock, setDisputeBlock] = useState<{ blocked: boolean; challengeId: string | null } | null>(null);

  useEffect(() => {
    fetch("/api/user/dispute-block")
      .then(r => r.json())
      .then(d => setDisputeBlock(d))
      .catch(() => setDisputeBlock({ blocked: false, challengeId: null }));
  }, []);

  const gameName = SUPPORTED_GAMES.find(g => g.id === game)?.name ?? game;

  async function handleAccept() {
    setError("");
    setLoading(true);
    try {
      const res  = await fetch(`/api/challenges/${challengeId}/accept`, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({}),
      });
      const data = await res.json();
      if (!res.ok) {
        if (data.credentialGate) { setCredGate(true); return; }
        setError(data.error || "Failed to accept challenge.");
        return;
      }
      await update({});
      router.push(`/challenges/${challengeId}`);
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (disputeBlock?.blocked) {
    return (
      <div className="rounded-xl border border-[rgba(245,158,11,0.4)] bg-[rgba(245,158,11,0.06)] p-4 flex flex-col gap-3">
        <div className="flex items-start gap-2">
          <ShieldAlert className="w-4 h-4 text-[#f59e0b] flex-shrink-0 mt-0.5" />
          <p className="text-sm text-[#a1a1aa] leading-relaxed">
            You have a disputed match that requires your evidence before you can play again.
            Please submit your evidence first.
          </p>
        </div>
        <Link href={`/challenges/${disputeBlock.challengeId}`}>
          <Button variant="primary" size="sm" className="w-full font-bold">
            Go to Disputed Match
          </Button>
        </Link>
      </div>
    );
  }

  if (credGate) {
    return (
      <div className="rounded-xl border border-[rgba(139,92,246,0.4)] bg-[rgba(139,92,246,0.06)] p-4 flex flex-col gap-3">
        <div className="flex items-start gap-2">
          <Gamepad2 className="w-4 h-4 text-[#8b5cf6] flex-shrink-0 mt-0.5" />
          <p className="text-sm text-[#a1a1aa] leading-relaxed">
            You need to add your <span className="text-[#f0f0f5] font-semibold">{gameName}</span> credentials
            before you can accept this challenge.
          </p>
        </div>
        <Link href="/profile">
          <Button variant="primary" size="sm" className="w-full font-bold">
            Go to Profile → Game Profiles
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      {step === "notice" && (
        <RecordingNoticeModal
          onConfirm={() => { setStep("idle"); handleAccept(); }}
          onCancel={() => setStep("idle")}
        />
      )}

      <div className="flex flex-col gap-3">
        {error && (
          <div className="flex items-center gap-2 p-3 rounded-lg bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.3)] text-red-400 text-sm">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            {error}
          </div>
        )}

        <Button
          variant="primary"
          size="lg"
          className="w-full font-black text-lg"
          onClick={() => setStep("notice")}
          disabled={loading}
          pulse
        >
          {loading ? (
            <><Loader2 className="w-5 h-5 mr-2 animate-spin" />Accepting...</>
          ) : (
            <><Swords className="w-5 h-5 mr-2" />Accept — Stake ${stakeAmount.toFixed(2)}</>
          )}
        </Button>
      </div>
    </>
  );
}
