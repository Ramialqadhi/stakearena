"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import { useSession } from "@/hooks/useSession";
import { useRouter, useSearchParams } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { ChallengeCard } from "@/components/challenges/ChallengeCard";
import { SUPPORTED_GAMES } from "@/types";
import { GameIcon } from "@/components/games/GameIcon";
import { Swords, Loader2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

type Challenge = {
  id: string;
  game: string;
  stakeAmount: number;
  status: string;
  createdAt: string;
  shareCode: string;
  creator: {
    id: string;
    username: string;
    avatar: string | null;
    totalWins: number;
    totalLosses: number;
  };
};

export default function ChallengesPage() {
  return (
    <Suspense fallback={
      <div className="flex flex-col min-h-screen bg-[#0a0a0f]">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-[#00ff88] animate-spin" />
        </div>
      </div>
    }>
      <ChallengesContent />
    </Suspense>
  );
}

function ChallengesContent() {
  const { data: session } = useSession();
  const currentUserId = session?.user?.id;
  const router = useRouter();
  const searchParams = useSearchParams();
  const gameFilter  = searchParams.get("game")  ?? "";
  const stakeFilter = searchParams.get("stake") ?? "";

  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchChallenges = useCallback(async (game: string, stake: string) => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (game)  params.set("game",  game);
      if (stake) params.set("stake", stake);
      const url = `/api/challenges${params.toString() ? `?${params}` : ""}`;
      const res = await fetch(url);
      const data = await res.json();
      setChallenges(data.challenges ?? []);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchChallenges(gameFilter, stakeFilter);
  }, [gameFilter, stakeFilter, fetchChallenges]);

  function setFilter(game: string, stake: string) {
    const params = new URLSearchParams();
    if (game)  params.set("game",  game);
    if (stake) params.set("stake", stake);
    router.push(`/challenges${params.toString() ? `?${params}` : ""}`);
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0f]">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-black text-[#f0f0f5]">Open Challenges</h1>
            <p className="text-[#6b7280] text-sm mt-1">
              {loading
                ? "Loading..."
                : `${challenges.length} challenge${challenges.length !== 1 ? "s" : ""} waiting for opponents`}
            </p>
          </div>
          <Link href="/challenges/new">
            <Button variant="primary" size="md">
              <Swords className="w-4 h-4 mr-2" />
              Create Challenge
            </Button>
          </Link>
        </div>

        {/* Filter bar */}
        <div className="flex flex-col gap-3 mb-6">
          <div className="flex flex-wrap gap-2">
            <span className="text-xs text-[#6b7280] self-center mr-1">Game:</span>
            <button onClick={() => setFilter("", stakeFilter)}>
              <span className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                !gameFilter
                  ? "border-[#00ff88] bg-[rgba(0,255,136,0.08)] text-[#00ff88]"
                  : "border-[#2a2a3a] text-[#6b7280] hover:border-[#3a3a4a]"
              }`}>
                All Games
              </span>
            </button>
            {SUPPORTED_GAMES.map((game) => {
              const isActive = gameFilter === game.id;
              return (
                <button key={game.id} onClick={() => setFilter(game.id, stakeFilter)}>
                  <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-semibold border transition-colors ${
                    isActive
                      ? "border-[#00ff88] bg-[rgba(0,255,136,0.08)] text-[#00ff88]"
                      : "border-[#2a2a3a] text-[#6b7280] hover:border-[#3a3a4a]"
                  }`}>
                    <GameIcon gameId={game.id} size="xs" className="rounded-md" />
                    {game.name}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs text-[#6b7280] self-center mr-1">Stake:</span>
            <button onClick={() => setFilter(gameFilter, "")}>
              <span className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                !stakeFilter
                  ? "border-[#fbbf24] bg-[rgba(251,191,36,0.08)] text-[#fbbf24]"
                  : "border-[#2a2a3a] text-[#6b7280] hover:border-[#3a3a4a]"
              }`}>
                Any Amount
              </span>
            </button>
            {[5, 15, 25].map((amount) => {
              const isActive = stakeFilter === String(amount);
              return (
                <button key={amount} onClick={() => setFilter(gameFilter, String(amount))}>
                  <span className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                    isActive
                      ? "border-[#fbbf24] bg-[rgba(251,191,36,0.08)] text-[#fbbf24]"
                      : "border-[#2a2a3a] text-[#6b7280] hover:border-[#3a3a4a]"
                  }`}>
                    ${amount}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Challenges grid */}
        {loading ? (
          <div className="flex items-center justify-center py-24">
            <Loader2 className="w-8 h-8 text-[#00ff88] animate-spin" />
          </div>
        ) : challenges.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <Swords className="w-16 h-16 text-[#2a2a3a] mb-4" />
            <h2 className="text-xl font-bold text-[#a1a1aa] mb-2">No Open Challenges</h2>
            <p className="text-[#6b7280] text-sm mb-6 max-w-sm">
              {gameFilter || stakeFilter
                ? `No open challenges${gameFilter ? ` for ${SUPPORTED_GAMES.find(g => g.id === gameFilter)?.name ?? gameFilter}` : ""}${stakeFilter ? ` at $${stakeFilter}` : ""} right now.`
                : "Be the first to create a challenge and get matched with an opponent."}
            </p>
            <Link href="/challenges/new">
              <Button variant="primary" size="md">Create the First Challenge</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {challenges.map((challenge) => (
              <ChallengeCard
                key={challenge.id}
                id={challenge.id}
                game={challenge.game}
                stakeAmount={challenge.stakeAmount}
                creator={challenge.creator}
                status={challenge.status}
                createdAt={new Date(challenge.createdAt)}
                shareCode={challenge.shareCode}
                showAccept={true}
                currentUserId={currentUserId}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
