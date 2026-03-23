"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Loader2, Trophy, ImageIcon, Film } from "lucide-react";

interface EvidenceItem {
  id: string;
  fileUrl: string;
  fileType: string;
  description?: string | null;
  user: { id: string; username: string };
}

interface DisputeChallenge {
  id: string;
  game: string;
  stakeAmount: number;
  creatorId: string;
  opponentId: string | null;
  resultCreator: string | null;
  resultOpponent: string | null;
  creator:  { id: string; username: string };
  opponent: { id: string; username: string } | null;
  evidence: EvidenceItem[];
}

export function DisputePanel({ challenge }: { challenge: DisputeChallenge }) {
  const router  = useRouter();
  const [loading, setLoading] = useState<string | null>(null);
  const [done,    setDone]    = useState(false);

  const creatorEvidence  = challenge.evidence.filter((e) => e.user.id === challenge.creatorId);
  const opponentEvidence = challenge.evidence.filter((e) => e.user.id === challenge.opponentId);

  const pot    = challenge.stakeAmount * 2;
  const payout = (pot * 0.9).toFixed(2);

  async function decide(winnerId: string) {
    setLoading(winnerId);
    try {
      const res  = await fetch(`/api/admin/challenges/${challenge.id}/decide`, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ winnerId }),
      });
      const data = await res.json();
      if (!res.ok) { alert(data.error || "Failed"); return; }
      setDone(true);
      router.refresh();
    } finally {
      setLoading(null);
    }
  }

  const resultLabel = (userId: string | null) => {
    if (!userId) return "Not submitted";
    if (userId === challenge.creatorId)  return `→ ${challenge.creator.username}`;
    if (userId === challenge.opponentId) return `→ ${challenge.opponent?.username}`;
    return "Unknown";
  };

  if (done) {
    return (
      <div className="p-4 rounded-xl border border-[rgba(0,255,136,0.2)] bg-[rgba(0,255,136,0.05)] text-[#00ff88] text-sm font-semibold text-center">
        Winner decided — payout triggered ✓
      </div>
    );
  }

  return (
    <div className="glass rounded-xl border border-[rgba(251,191,36,0.2)] overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-[#1e1e2e] flex items-center justify-between flex-wrap gap-3">
        <div>
          <span className="font-bold text-[#f0f0f5]">{challenge.game}</span>
          <span className="text-[#6b7280] text-sm ml-2">· ${challenge.stakeAmount} stake · ${payout} payout</span>
        </div>
        <div className="text-xs text-[#6b7280] space-x-4">
          <span>Creator said: <span className="text-[#a1a1aa]">{resultLabel(challenge.resultCreator)}</span></span>
          <span>Opponent said: <span className="text-[#a1a1aa]">{resultLabel(challenge.resultOpponent)}</span></span>
        </div>
      </div>

      {/* Side-by-side evidence */}
      <div className="grid grid-cols-2 divide-x divide-[#1e1e2e]">
        <EvidenceSide
          label="Creator"
          username={challenge.creator.username}
          evidence={creatorEvidence}
          winnerId={challenge.creatorId}
          onDecide={decide}
          loading={loading}
        />
        <EvidenceSide
          label="Opponent"
          username={challenge.opponent?.username ?? "?"}
          evidence={opponentEvidence}
          winnerId={challenge.opponentId ?? ""}
          onDecide={decide}
          loading={loading}
        />
      </div>
    </div>
  );
}

function EvidenceSide({
  label,
  username,
  evidence,
  winnerId,
  onDecide,
  loading,
}: {
  label: string;
  username: string;
  evidence: EvidenceItem[];
  winnerId: string;
  onDecide: (id: string) => void;
  loading: string | null;
}) {
  return (
    <div className="p-4 flex flex-col gap-3">
      {/* Player header */}
      <div className="flex items-center gap-2 mb-1">
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#00ff88] to-[#8b5cf6] flex items-center justify-center text-xs font-black text-[#0a0a0f]">
          {username[0]?.toUpperCase()}
        </div>
        <div>
          <div className="text-sm font-bold text-[#f0f0f5]">{username}</div>
          <div className="text-xs text-[#6b7280]">{label}</div>
        </div>
      </div>

      {/* Evidence files */}
      {evidence.length === 0 ? (
        <div className="text-xs text-[#6b7280] italic py-4 text-center border border-dashed border-[#2a2a3a] rounded-lg">
          No evidence submitted
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {evidence.map((ev) => (
            <div key={ev.id} className="rounded-lg overflow-hidden border border-[#2a2a3a] bg-[#1a1a24]">
              {ev.fileType === "image" ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={ev.fileUrl} alt="Evidence" className="w-full h-36 object-cover" />
              ) : (
                <video src={ev.fileUrl} className="w-full h-36 object-cover" controls />
              )}
              {ev.description && (
                <div className="px-2 py-1.5 text-xs text-[#6b7280] flex items-start gap-1">
                  {ev.fileType === "image"
                    ? <ImageIcon className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    : <Film       className="w-3 h-3 mt-0.5 flex-shrink-0" />
                  }
                  {ev.description}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Award button */}
      <Button
        variant="primary"
        size="sm"
        className="w-full mt-auto font-bold"
        onClick={() => onDecide(winnerId)}
        disabled={!!loading || !winnerId}
      >
        {loading === winnerId
          ? <Loader2 className="w-4 h-4 animate-spin" />
          : <><Trophy className="w-3.5 h-3.5 mr-1.5" />Award Win to {username}</>
        }
      </Button>
    </div>
  );
}
