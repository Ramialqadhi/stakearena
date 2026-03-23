import React from "react";
import { Game } from "@/types";
import { GameIcon } from "@/components/games/GameIcon";

interface GameCardProps {
  game: Game;
  onClick?: () => void;
}

export function GameCard({ game, onClick }: GameCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative rounded-2xl overflow-hidden cursor-pointer transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl"
    >
      {/* Full-bleed game icon as the card background */}
      <GameIcon gameId={game.id} size="xl" className="w-full h-36 rounded-none" />

      {/* Gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <div className="font-black text-[#f0f0f5] text-sm leading-tight mb-1">{game.name}</div>
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-[#a1a1aa] uppercase tracking-wide">{game.category}</span>
          <span className="flex items-center gap-1 text-[10px] font-semibold text-[#00ff88]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse inline-block" />
            {game.activeChallenges}
          </span>
        </div>
      </div>
    </div>
  );
}
