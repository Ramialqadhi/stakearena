"use client";

import { useState, useEffect, Suspense } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { SUPPORTED_GAMES } from "@/types";
import { GameIcon } from "@/components/games/GameIcon";
import { Loader2, Share2, Copy, Check, ArrowLeft, AlertCircle, ShieldAlert, Gamepad2 } from "lucide-react";
import { RecordingNoticeModal } from "@/components/challenges/RecordingNoticeModal";

const PRESET_AMOUNTS = [5, 15, 25];

export default function NewChallengePage() {
  return (
    <Suspense fallback={
      <div className="flex flex-col min-h-screen bg-[#0a0a0f]">
        <div className="flex-1 flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-[#00ff88] animate-spin" />
        </div>
      </div>
    }>
      <NewChallengeContent />
    </Suspense>
  );
}

function NewChallengeContent() {
  const { data: session, status, update } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    update({});
    fetch("/api/user/dispute-block")
      .then((r) => r.json())
      .then((data) => setDisputeBlock(data))
      .catch(() => setDisputeBlock({ blocked: false, challengeId: null }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [selectedGame, setSelectedGame] = useState<string>(
    () => searchParams.get("game") ?? ""
  );
  const [stakeAmount, setStakeAmount] = useState<number>(0);
  const [notes, setNotes] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [credGate, setCredGate] = useState(false);
  const [shareCode, setShareCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [showRecordingNotice, setShowRecordingNotice] = useState(true);
  const [disputeBlock, setDisputeBlock] = useState<{ blocked: boolean; challengeId: string | null } | null>(null);

  if (status === "unauthenticated") {
    router.push("/login");
    return null;
  }

  const balance = session?.user?.balance ?? 0;
  const insufficientBalance = stakeAmount > 0 && stakeAmount > balance;
  const gameName = SUPPORTED_GAMES.find(g => g.id === selectedGame)?.name ?? selectedGame;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setCredGate(false);

    if (!selectedGame) { setError("Please select a game."); return; }
    if (!stakeAmount || stakeAmount <= 0) { setError("Please select a stake amount."); return; }
    if (insufficientBalance) { setError("Insufficient balance. Please deposit funds first."); return; }

    setLoading(true);
    try {
      const res = await fetch("/api/challenges", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ game: selectedGame, stakeAmount, notes: notes || undefined }),
      });
      const data = await res.json();
      if (!res.ok) {
        if (data.credentialGate) { setCredGate(true); return; }
        setError(data.error || "Failed to create challenge.");
        return;
      }
      setShareCode(data.challenge.shareCode);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleCopy() {
    if (!shareCode) return;
    const url = `${window.location.origin}/challenges/join/${shareCode}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  if (showRecordingNotice) {
    return (
      <div className="flex flex-col min-h-screen bg-[#0a0a0f]">
        <Navbar />
        <RecordingNoticeModal
          onConfirm={() => setShowRecordingNotice(false)}
          onCancel={() => router.push("/dashboard")}
        />
      </div>
    );
  }

  if (disputeBlock?.blocked) {
    return (
      <div className="flex flex-col min-h-screen bg-[#0a0a0f]">
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="max-w-md w-full glass rounded-2xl border border-[rgba(245,158,11,0.4)] overflow-hidden"
            style={{ boxShadow: "0 0 32px rgba(245,158,11,0.1)" }}>
            <div className="bg-[rgba(245,158,11,0.08)] border-b border-[rgba(245,158,11,0.2)] px-6 py-4 flex items-center gap-3">
              <ShieldAlert className="w-5 h-5 text-[#f59e0b] flex-shrink-0" />
              <h2 className="font-black text-[#f0f0f5]">Action Required</h2>
            </div>
            <div className="px-6 py-6">
              <p className="text-sm text-[#a1a1aa] leading-relaxed mb-5">
                You have a disputed match that requires your evidence before you can play again.
                Please submit your evidence first.
              </p>
              <Link href={`/challenges/${disputeBlock.challengeId}`}>
                <Button variant="primary" size="md" className="w-full font-bold">
                  Go to Disputed Match
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="ghost" size="md" className="w-full mt-2 text-[#6b7280]">
                  Back to Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (shareCode) {
    const shareUrl = `${typeof window !== "undefined" ? window.location.origin : ""}/challenges/join/${shareCode}`;
    const gameInfo = SUPPORTED_GAMES.find((g) => g.id === selectedGame);

    return (
      <div className="flex flex-col min-h-screen bg-[#0a0a0f]">
        <Navbar />
        <main className="flex-1 max-w-lg mx-auto w-full px-4 py-12 flex flex-col items-center justify-center">
          <div className="glass rounded-2xl p-8 border border-[rgba(0,255,136,0.2)] text-center w-full">
            <GameIcon gameId={selectedGame} size="lg" className="mx-auto mb-4" />
            <h2 className="text-2xl font-black text-[#f0f0f5] mb-2">Challenge Created!</h2>
            <p className="text-[#6b7280] mb-6 text-sm">
              Share this link with your opponent to start the challenge.
            </p>
            <div className="bg-[#1a1a24] border border-[#2a2a3a] rounded-lg p-3 mb-4 flex items-center gap-2">
              <Share2 className="w-4 h-4 text-[#6b7280] flex-shrink-0" />
              <span className="text-xs text-[#a1a1aa] flex-1 truncate">{shareUrl}</span>
              <button onClick={handleCopy} className="flex-shrink-0 text-[#00ff88] hover:text-[#00cc6a] transition-colors">
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <div className="flex flex-col gap-2 text-sm text-[#6b7280] mb-6">
              <div className="flex justify-between">
                <span>Game:</span>
                <span className="text-[#f0f0f5] font-medium">{gameInfo?.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Stake:</span>
                <span className="text-[#00ff88] font-bold">${stakeAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Prize Pool:</span>
                <span className="text-[#fbbf24] font-bold">${(stakeAmount * 2).toFixed(2)}</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Button variant="primary" size="md" onClick={handleCopy} className="w-full font-bold">
                {copied ? <><Check className="w-4 h-4 mr-2" />Copied!</> : <><Copy className="w-4 h-4 mr-2" />Copy Share Link</>}
              </Button>
              <Link href="/dashboard">
                <Button variant="ghost" size="md" className="w-full">Back to Dashboard</Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0f]">
      <Navbar />

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-8">
        <div className="mb-6">
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-sm text-[#6b7280] hover:text-[#00ff88] transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
          <h1 className="text-2xl font-black text-[#f0f0f5]">Create a Challenge</h1>
          <p className="text-[#6b7280] text-sm mt-1">Choose your game, set the stakes, and challenge anyone.</p>
        </div>

        {/* Balance */}
        <div className="glass rounded-xl px-4 py-3 border border-[#1e1e2e] mb-6 flex items-center justify-between">
          <span className="text-sm text-[#6b7280]">Your balance:</span>
          <span className={`font-bold ${balance < 10 ? "text-[#fbbf24]" : "text-[#00ff88]"}`}>
            ${Number(balance).toFixed(2)}
          </span>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {error && (
            <div className="p-3 rounded-lg bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.3)] text-red-400 text-sm flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              {error}
            </div>
          )}

          {/* Credential gate */}
          {credGate && (
            <div className="p-4 rounded-xl border border-[rgba(139,92,246,0.4)] bg-[rgba(139,92,246,0.06)] flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <Gamepad2 className="w-4 h-4 text-[#8b5cf6] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-[#a1a1aa] leading-relaxed">
                  You need to add your <span className="text-[#f0f0f5] font-semibold">{gameName}</span> credentials
                  in your profile before playing.
                </p>
              </div>
              <Link href="/profile">
                <Button variant="primary" size="sm" className="font-bold">
                  Go to Profile → Game Profiles
                </Button>
              </Link>
            </div>
          )}

          {/* Game selector */}
          <div>
            <label className="block text-sm font-medium text-[#a1a1aa] mb-3">Select Game</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {SUPPORTED_GAMES.map((game) => (
                <button
                  key={game.id}
                  type="button"
                  onClick={() => { setSelectedGame(game.id); setCredGate(false); setError(""); }}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all ${
                    selectedGame === game.id
                      ? "border-[#00ff88] bg-[rgba(0,255,136,0.08)] text-[#00ff88]"
                      : "border-[#2a2a3a] bg-[#1a1a24] text-[#a1a1aa] hover:border-[#3a3a4a]"
                  }`}
                >
                  <GameIcon gameId={game.id} size="sm" />
                  <span className="text-xs font-semibold text-center leading-tight">{game.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Stake amount */}
          <div>
            <label className="block text-sm font-medium text-[#a1a1aa] mb-3">Stake Amount</label>
            <div className="grid grid-cols-3 gap-3">
              {PRESET_AMOUNTS.map((amount) => (
                <button
                  key={amount}
                  type="button"
                  onClick={() => setStakeAmount(amount)}
                  className={`py-3 px-4 rounded-lg border text-sm font-bold transition-all ${
                    stakeAmount === amount
                      ? "border-[#00ff88] bg-[rgba(0,255,136,0.1)] text-[#00ff88]"
                      : "border-[#2a2a3a] bg-[#1a1a24] text-[#a1a1aa] hover:border-[#3a3a4a]"
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>
            {insufficientBalance && (
              <p className="mt-2 text-xs text-red-400">Insufficient balance</p>
            )}
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-[#a1a1aa] mb-2">Notes (optional)</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any rules, server info, or message for your opponent..."
              rows={3}
              className="w-full bg-[#1a1a24] border border-[#2a2a3a] rounded-lg px-4 py-3 text-[#f0f0f5] placeholder-[#6b7280] focus:outline-none focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88] transition-colors resize-none"
            />
          </div>

          {/* Preview */}
          {selectedGame && stakeAmount > 0 && (
            <div className="glass rounded-xl p-5 border border-[rgba(0,255,136,0.2)]">
              <h3 className="text-sm font-bold text-[#a1a1aa] uppercase tracking-wide mb-3">Challenge Preview</h3>
              <div className="flex items-center gap-3 mb-3">
                <GameIcon gameId={selectedGame} size="sm" />
                <div>
                  <div className="font-bold text-[#f0f0f5]">{SUPPORTED_GAMES.find((g) => g.id === selectedGame)?.name}</div>
                  <div className="text-xs text-[#6b7280]">1v1 Match</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-[#1a1a24] rounded-lg p-3">
                  <div className="text-[#6b7280] text-xs mb-1">Your Stake</div>
                  <div className="font-black text-[#00ff88]">${stakeAmount.toFixed(2)}</div>
                </div>
                <div className="bg-[#1a1a24] rounded-lg p-3">
                  <div className="text-[#6b7280] text-xs mb-1">Total Prize Pool</div>
                  <div className="font-black text-[#fbbf24]">${(stakeAmount * 2).toFixed(2)}</div>
                </div>
              </div>
            </div>
          )}

          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={loading || !selectedGame || stakeAmount <= 0 || insufficientBalance}
            className="w-full font-black"
          >
            {loading ? (
              <><Loader2 className="w-5 h-5 mr-2 animate-spin" />Creating Challenge...</>
            ) : (
              "Create Challenge & Get Share Link"
            )}
          </Button>
        </form>
      </main>
    </div>
  );
}
