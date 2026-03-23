"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Loader2, Trophy, AlertCircle, CheckCircle, Swords } from "lucide-react";

export function ResultSubmission({
  challengeId,
  creatorId,
  opponentId,
  creatorUsername,
  opponentUsername,
  currentUserId,
}: {
  challengeId: string;
  creatorId: string;
  opponentId: string;
  creatorUsername: string;
  opponentUsername: string;
  currentUserId: string;
}) {
  const router  = useRouter();
  const [selected, setSelected] = useState<string>("");
  const [loading, setLoading]   = useState(false);
  const [error,   setError]     = useState("");

  const myName    = currentUserId === creatorId ? creatorUsername : opponentUsername;
  const theirName = currentUserId === creatorId ? opponentUsername : creatorUsername;

  async function handleSubmit() {
    if (!selected) { setError("Please select a winner."); return; }
    setError("");
    setLoading(true);
    try {
      const res  = await fetch(`/api/challenges/${challengeId}/result`, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ winnerId: selected }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Failed to submit result."); return; }
      router.refresh();
    } catch {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="glass rounded-xl p-6 border border-[rgba(0,255,136,0.15)]">
      <div className="flex items-center gap-2 mb-5">
        <Trophy className="w-5 h-5 text-[#fbbf24]" />
        <h3 className="font-bold text-[#f0f0f5]">Submit Match Result</h3>
      </div>

      {error && (
        <div className="flex items-center gap-2 mb-4 p-3 rounded-lg bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.3)] text-red-400 text-sm">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />{error}
        </div>
      )}

      <p className="text-sm text-[#6b7280] mb-4">Who won the match?</p>

      <div className="grid grid-cols-2 gap-3 mb-5">
        {/* My option */}
        <button
          type="button"
          onClick={() => setSelected(currentUserId)}
          className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
            selected === currentUserId
              ? "border-[#00ff88] bg-[rgba(0,255,136,0.1)]"
              : "border-[#2a2a3a] bg-[#1a1a24] hover:border-[#3a3a4a]"
          }`}
        >
          <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-lg ${selected === currentUserId ? "bg-gradient-to-br from-[#00ff88] to-[#8b5cf6] text-[#0a0a0f]" : "bg-[#2a2a3a] text-[#a1a1aa]"}`}>
            {myName[0]?.toUpperCase()}
          </div>
          <div className={`font-bold text-sm ${selected === currentUserId ? "text-[#00ff88]" : "text-[#a1a1aa]"}`}>
            I won
          </div>
          <div className="text-xs text-[#6b7280]">{myName}</div>
          {selected === currentUserId && <CheckCircle className="w-4 h-4 text-[#00ff88]" />}
        </button>

        {/* Their option */}
        <button
          type="button"
          onClick={() => setSelected(currentUserId === creatorId ? opponentId : creatorId)}
          className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
            selected && selected !== currentUserId
              ? "border-[#ef4444] bg-[rgba(239,68,68,0.08)]"
              : "border-[#2a2a3a] bg-[#1a1a24] hover:border-[#3a3a4a]"
          }`}
        >
          <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-lg ${selected && selected !== currentUserId ? "bg-gradient-to-br from-[#ef4444] to-[#8b5cf6] text-white" : "bg-[#2a2a3a] text-[#a1a1aa]"}`}>
            {theirName[0]?.toUpperCase()}
          </div>
          <div className={`font-bold text-sm ${selected && selected !== currentUserId ? "text-[#ef4444]" : "text-[#a1a1aa]"}`}>
            They won
          </div>
          <div className="text-xs text-[#6b7280]">{theirName}</div>
          {selected && selected !== currentUserId && <Swords className="w-4 h-4 text-[#ef4444]" />}
        </button>
      </div>

      <Button
        variant="primary"
        size="md"
        className="w-full font-bold"
        onClick={handleSubmit}
        disabled={loading || !selected}
      >
        {loading ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Submitting...</> : "Confirm Result"}
      </Button>

      <p className="text-xs text-[#6b7280] text-center mt-3">
        If both players agree, the winner is paid out instantly. If not, a dispute opens.
      </p>
    </div>
  );
}
