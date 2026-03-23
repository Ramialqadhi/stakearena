export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Navbar } from "@/components/layout/Navbar";
import { Badge } from "@/components/ui/Badge";
import { AcceptChallengeButton } from "@/components/challenges/AcceptChallengeButton";
import { SUPPORTED_GAMES } from "@/types";
import { GameIcon } from "@/components/games/GameIcon";
import { DollarSign, Trophy, Swords, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default async function JoinChallengePage({
  params,
}: {
  params: Promise<{ shareCode: string }>;
}) {
  const { shareCode } = await params;
  const session = await auth();

  const challenge = await prisma.challenge.findUnique({
    where: { shareCode },
    include: {
      creator: { select: { id: true, username: true, totalWins: true, totalLosses: true } },
      opponent: { select: { id: true, username: true } },
    },
  });

  if (!challenge) notFound();

  const gameInfo = SUPPORTED_GAMES.find((g) => g.id === challenge.game);
  const pot      = challenge.stakeAmount * 2;
  const payout   = pot * 0.9;
  const winRate  =
    challenge.creator.totalWins + challenge.creator.totalLosses > 0
      ? Math.round((challenge.creator.totalWins / (challenge.creator.totalWins + challenge.creator.totalLosses)) * 100)
      : 0;

  const isCreator  = session?.user?.id === challenge.creatorId;
  const isOpponent = session?.user?.id === challenge.opponentId;

  // Already a participant — go to challenge detail
  if ((isCreator || isOpponent) && challenge.status !== "PENDING") {
    return (
      <div className="flex flex-col min-h-screen bg-[#0a0a0f]">
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="glass rounded-2xl p-8 border border-[#1e1e2e] max-w-md w-full text-center">
            <Badge>{challenge.status}</Badge>
            <h2 className="text-xl font-black text-[#f0f0f5] mt-4 mb-2">This challenge is {challenge.status.toLowerCase()}</h2>
            <Link href={`/challenges/${challenge.id}`}>
              <Button variant="primary" size="md" className="mt-4">
                View Challenge <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0f]">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-lg">

          {/* Header */}
          <div className="text-center mb-8">
            <GameIcon gameId={challenge.game} size="lg" className="mx-auto mb-6" />
            <h1 className="text-3xl font-black text-[#f0f0f5]">
              You&apos;ve been challenged!
            </h1>
            <p className="text-[#6b7280] mt-2">
              Accept and put your skills to the test.
            </p>
          </div>

          <div className="glass rounded-2xl border border-[#1e1e2e] overflow-hidden">
            {/* Game + status */}
            <div className="px-6 py-5 border-b border-[#1e1e2e] flex items-center justify-between">
              <div>
                <div className="text-lg font-black text-[#f0f0f5]">{gameInfo?.name ?? challenge.game}</div>
                <div className="text-xs text-[#6b7280]">1v1 · {gameInfo?.category}</div>
              </div>
              <Badge>{challenge.status}</Badge>
            </div>

            {/* Stake details */}
            <div className="px-6 py-5 border-b border-[#1e1e2e] grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-xs text-[#6b7280] mb-1">Each Pays</div>
                <div className="text-2xl font-black text-[#00ff88]">${challenge.stakeAmount.toFixed(2)}</div>
              </div>
              <div>
                <div className="text-xs text-[#6b7280] mb-1">Prize Pool</div>
                <div className="text-2xl font-black text-[#fbbf24]">${pot.toFixed(2)}</div>
              </div>
              <div>
                <div className="text-xs text-[#6b7280] mb-1">Winner Gets</div>
                <div className="text-2xl font-black text-[#f0f0f5]">${payout.toFixed(2)}</div>
              </div>
            </div>

            {/* Creator info */}
            <div className="px-6 py-5 border-b border-[#1e1e2e] flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00ff88] to-[#8b5cf6] flex items-center justify-center font-black text-[#0a0a0f]">
                {challenge.creator.username[0].toUpperCase()}
              </div>
              <div className="flex-1">
                <div className="font-bold text-[#f0f0f5]">{challenge.creator.username}</div>
                <div className="text-xs text-[#6b7280] flex items-center gap-1">
                  <Trophy className="w-3 h-3 text-[#fbbf24]" />
                  {winRate}% win rate · {challenge.creator.totalWins}W / {challenge.creator.totalLosses}L
                </div>
              </div>
              <Swords className="w-5 h-5 text-[#6b7280]" />
              <div className="w-10 h-10 rounded-full bg-[#1a1a24] border-2 border-dashed border-[#2a2a3a] flex items-center justify-center text-[#6b7280] text-xs font-bold">
                YOU
              </div>
            </div>

            {/* Notes */}
            {challenge.notes && (
              <div className="px-6 py-4 border-b border-[#1e1e2e] bg-[rgba(255,255,255,0.02)]">
                <div className="text-xs text-[#6b7280] mb-1 uppercase tracking-wide font-semibold">Notes from challenger</div>
                <div className="text-sm text-[#a1a1aa]">{challenge.notes}</div>
              </div>
            )}

            {/* Platform fee notice */}
            <div className="px-6 py-3 bg-[rgba(139,92,246,0.05)] border-b border-[#1e1e2e]">
              <div className="text-xs text-[#6b7280] flex items-center gap-2">
                <DollarSign className="w-3 h-3 text-[#8b5cf6]" />
                10% platform fee · Winner receives ${payout.toFixed(2)} of the ${pot.toFixed(2)} pot
              </div>
            </div>

            {/* Action area */}
            <div className="px-6 py-6">
              {challenge.status !== "PENDING" ? (
                <div className="text-center text-[#6b7280] text-sm">
                  This challenge is no longer open.{" "}
                  <Link href="/challenges" className="text-[#00ff88] hover:underline">Browse open challenges</Link>
                </div>
              ) : isCreator ? (
                <div className="text-center">
                  <p className="text-[#6b7280] text-sm mb-4">This is your challenge. Share this link with your opponent.</p>
                  <Link href="/dashboard"><Button variant="outline" size="md" className="w-full">Back to Dashboard</Button></Link>
                </div>
              ) : !session ? (
                <div className="text-center">
                  <p className="text-[#6b7280] text-sm mb-4">Sign in to accept this challenge.</p>
                  <Link href={`/login?redirect=/challenges/join/${shareCode}`}>
                    <Button variant="primary" size="md" className="w-full font-bold">
                      Sign In to Accept <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              ) : (
                <AcceptChallengeButton
                  challengeId={challenge.id}
                  stakeAmount={challenge.stakeAmount}
                  game={challenge.game}
                />
              )}
            </div>
          </div>

          <p className="text-center text-xs text-[#6b7280] mt-4">
            By accepting you agree to stake ${challenge.stakeAmount.toFixed(2)} from your wallet balance.
          </p>
        </div>
      </main>
    </div>
  );
}
