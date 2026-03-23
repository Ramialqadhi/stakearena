"use client";

import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SUPPORTED_GAMES } from "@/types";
import { GameIcon } from "@/components/games/GameIcon";
import { DollarSign, Trophy } from "lucide-react";

interface ChallengeCreator {
  id: string;
  username: string;
  totalWins: number;
  totalLosses: number;
  avatar?: string | null;
}

interface ChallengeCardProps {
  id: string;
  game: string;
  stakeAmount: number;
  creator: ChallengeCreator;
  status: string;
  createdAt: Date | string;
  shareCode?: string;
  showAccept?: boolean;
  currentUserId?: string;
}

export function ChallengeCard({
  id,
  game,
  stakeAmount,
  creator,
  status,
  createdAt,
  shareCode,
  showAccept = true,
  currentUserId,
}: ChallengeCardProps) {
  const gameInfo = SUPPORTED_GAMES.find((g) => g.id === game || g.name === game);
  const gameId   = gameInfo?.id ?? game;
  const gameName = gameInfo?.name ?? game;

  const winRate =
    creator.totalWins + creator.totalLosses > 0
      ? Math.round((creator.totalWins / (creator.totalWins + creator.totalLosses)) * 100)
      : 0;

  const dateStr = new Date(createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  const joinHref = shareCode
    ? `/challenges/join/${shareCode}`
    : `/challenges/${id}`;

  return (
    <div className="glass rounded-xl p-5 border border-[#1e1e2e] glass-hover transition-all duration-300 flex flex-col gap-4">
      {/* Game header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <GameIcon gameId={gameId} size="sm" />
          <div>
            <div className="font-bold text-[#f0f0f5]">{gameName}</div>
            <div className="text-xs text-[#6b7280]">{dateStr}</div>
          </div>
        </div>
        <Badge>{status}</Badge>
      </div>

      {/* Stake amount */}
      <div className="flex items-center gap-2 bg-[rgba(0,255,136,0.06)] border border-[rgba(0,255,136,0.15)] rounded-lg px-4 py-3">
        <DollarSign className="w-5 h-5 text-[#00ff88]" />
        <span className="text-xl font-black text-[#00ff88]">${stakeAmount.toFixed(2)}</span>
        <span className="text-[#6b7280] text-sm ml-auto">prize pool: ${(stakeAmount * 2).toFixed(2)}</span>
      </div>

      {/* Creator info */}
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#00ff88] to-[#8b5cf6] flex items-center justify-center text-xs font-bold text-[#0a0a0f]">
          {creator.username[0]?.toUpperCase()}
        </div>
        <div>
          <div className="text-sm font-semibold text-[#f0f0f5]">{creator.username}</div>
          <div className="text-xs text-[#6b7280] flex items-center gap-1">
            <Trophy className="w-3 h-3 text-[#fbbf24]" />
            {winRate}% win rate ({creator.totalWins}W/{creator.totalLosses}L)
          </div>
        </div>
      </div>

      {/* Accept button or "Your Challenge" label */}
      {status === "PENDING" && (
        currentUserId === creator.id ? (
          <div className="w-full text-center text-xs font-semibold text-[#6b7280] border border-[#2a2a3a] rounded-lg py-2 bg-[rgba(255,255,255,0.02)]">
            Your Challenge · Waiting for opponent
          </div>
        ) : showAccept ? (
          <Link href={joinHref} className="w-full">
            <Button variant="primary" size="sm" className="w-full font-bold">
              Accept Challenge
            </Button>
          </Link>
        ) : null
      )}
    </div>
  );
}
