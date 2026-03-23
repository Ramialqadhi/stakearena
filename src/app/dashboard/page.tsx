export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Navbar } from "@/components/layout/Navbar";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SUPPORTED_GAMES } from "@/types";
import { GameIcon } from "@/components/games/GameIcon";
import {
  Trophy,
  Swords,
  TrendingUp,
  DollarSign,
  Plus,
  Wallet,
  List,
  AlertTriangle,
  ArrowRight,
  Lock,
} from "lucide-react";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

  const [user, activeMatches, recentChallenges, lockedChallenges] = await Promise.all([
    prisma.user.findUnique({
      where: { id: session.user.id },
      select: {
        id: true, username: true, balance: true,
        totalWins: true, totalLosses: true, totalEarnings: true,
      },
    }),
    // ACTIVE + DISPUTED matches where user is creator OR opponent
    prisma.challenge.findMany({
      where: {
        OR: [
          { creatorId: session.user.id },
          { opponentId: session.user.id },
        ],
        status: { in: ["ACTIVE", "DISPUTED"] },
      },
      include: {
        creator:  { select: { id: true, username: true } },
        opponent: { select: { id: true, username: true } },
      },
      orderBy: { updatedAt: "desc" },
    }),
    // Recent history: both created and accepted, any status
    prisma.challenge.findMany({
      where: {
        OR: [
          { creatorId: session.user.id },
          { opponentId: session.user.id },
        ],
        status: { in: ["COMPLETED", "CANCELLED", "PENDING"] },
      },
      include: {
        creator:  { select: { username: true } },
        opponent: { select: { username: true } },
      },
      orderBy: { createdAt: "desc" },
      take: 10,
    }),
    prisma.challenge.findMany({
      where: {
        status: { in: ["PENDING", "ACTIVE", "DISPUTED"] },
        OR: [
          { creatorId: session.user.id, creatorPaid: true },
          { opponentId: session.user.id, opponentPaid: true },
        ],
      },
      select: { stakeAmount: true },
    }),
  ]);

  if (!user) {
    redirect("/login");
  }

  const totalGames = user.totalWins + user.totalLosses;
  const winRate = totalGames > 0 ? Math.round((user.totalWins / totalGames) * 100) : 0;
  const lockedAmount = lockedChallenges.reduce((sum, c) => sum + c.stakeAmount, 0);

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0f]">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#f0f0f5]">
              Welcome back,{" "}
              <span className="gradient-text-green">{user.username}</span>
            </h1>
            <p className="text-[#6b7280] mt-1 text-sm">
              Ready to compete? Your next challenge awaits.
            </p>
          </div>
          <div className="glass rounded-xl px-5 py-3 border border-[rgba(0,255,136,0.2)]">
            <div className="text-xs text-[#6b7280] mb-0.5">Available Balance</div>
            <div className="text-3xl font-black text-[#00ff88]">
              ${user.balance.toFixed(2)}
            </div>
            {lockedAmount > 0 && (
              <div className="flex items-center gap-1.5 mt-1.5">
                <Lock className="w-3 h-3 text-[#fbbf24]" />
                <span className="text-xs text-[#fbbf24] font-semibold">
                  ${lockedAmount.toFixed(2)} locked in challenges
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatsCard
            icon={<Trophy className="w-5 h-5" />}
            value={user.totalWins}
            label="Total Wins"
            color="#00ff88"
          />
          <StatsCard
            icon={<Swords className="w-5 h-5" />}
            value={user.totalLosses}
            label="Total Losses"
            color="#ef4444"
          />
          <StatsCard
            icon={<TrendingUp className="w-5 h-5" />}
            value={`${winRate}%`}
            label="Win Rate"
            color="#8b5cf6"
          />
          <StatsCard
            icon={<DollarSign className="w-5 h-5" />}
            value={`$${user.totalEarnings.toFixed(2)}`}
            label="Total Earnings"
            color="#fbbf24"
          />
        </div>

        {/* Quick Actions */}
        <div className="glass rounded-xl p-6 border border-[#1e1e2e] mb-8">
          <h2 className="text-lg font-bold text-[#f0f0f5] mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/challenges/new">
              <Button variant="primary" size="md">
                <Plus className="w-4 h-4 mr-2" />
                Create Challenge
              </Button>
            </Link>
            <Link href="/challenges">
              <Button variant="outline" size="md">
                <List className="w-4 h-4 mr-2" />
                Browse Challenges
              </Button>
            </Link>
            <Link href="/wallet">
              <Button variant="secondary" size="md">
                <Wallet className="w-4 h-4 mr-2" />
                Deposit Funds
              </Button>
            </Link>
          </div>
        </div>

        {/* My Active Matches — only shown when there are active/disputed challenges */}
        {activeMatches.length > 0 && (
          <div className="glass rounded-xl border border-[rgba(0,255,136,0.25)] overflow-hidden mb-8">
            <div className="px-6 py-4 border-b border-[#1e1e2e] flex items-center gap-2">
              <Swords className="w-4 h-4 text-[#00ff88]" />
              <h2 className="text-lg font-bold text-[#f0f0f5]">My Active Matches</h2>
              <span className="ml-auto text-xs font-bold bg-[rgba(0,255,136,0.12)] border border-[rgba(0,255,136,0.25)] text-[#00ff88] px-2 py-0.5 rounded-full">
                {activeMatches.length} ongoing
              </span>
            </div>

            <div className="flex flex-col divide-y divide-[#1a1a24]">
              {activeMatches.map((match) => {
                const gameInfo = SUPPORTED_GAMES.find(
                  (g) => g.id === match.game || g.name === match.game
                );
                const isCreator  = match.creatorId === session.user.id;
                const opponent   = isCreator ? match.opponent : match.creator;
                const isDisputed = match.status === "DISPUTED";

                return (
                  <div
                    key={match.id}
                    className={`flex items-center gap-4 px-6 py-4 hover:bg-[rgba(255,255,255,0.02)] transition-colors ${isDisputed ? "bg-[rgba(251,191,36,0.03)]" : ""}`}
                  >
                    {/* Game icon */}
                    <GameIcon gameId={match.game} size="sm" />

                    {/* Match info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-sm font-bold text-[#f0f0f5]">
                          {gameInfo?.name ?? match.game}
                        </span>
                        {isDisputed ? (
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#fbbf24] bg-[rgba(251,191,36,0.12)] border border-[rgba(251,191,36,0.3)] px-2 py-0.5 rounded-full">
                            <AlertTriangle className="w-3 h-3" />
                            Disputed — submit evidence
                          </span>
                        ) : (
                          <span className="text-xs font-semibold text-[#00ff88] bg-[rgba(0,255,136,0.1)] border border-[rgba(0,255,136,0.2)] px-2 py-0.5 rounded-full">
                            Active — submit result
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-[#6b7280]">
                        vs <span className="text-[#a1a1aa]">{opponent?.username ?? "?"}</span>
                        <span className="mx-1.5">·</span>
                        <span className="text-[#00ff88] font-semibold">${match.stakeAmount.toFixed(2)}</span> stake
                        <span className="mx-1.5">·</span>
                        <span className="text-[#fbbf24] font-semibold">${(match.stakeAmount * 2 * 0.9).toFixed(2)}</span> winner gets
                      </div>
                    </div>

                    {/* CTA */}
                    <Link href={`/challenges/${match.id}`} className="flex-shrink-0">
                      <Button
                        variant={isDisputed ? "outline" : "primary"}
                        size="sm"
                        className="font-bold whitespace-nowrap"
                      >
                        {isDisputed ? "View Dispute" : "Go to Match"}
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                      </Button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Recent Challenges */}
        <div className="glass rounded-xl border border-[#1e1e2e] overflow-hidden">
          <div className="px-6 py-4 border-b border-[#1e1e2e] flex items-center justify-between">
            <h2 className="text-lg font-bold text-[#f0f0f5]">Recent Challenges</h2>
            <Link href="/challenges" className="text-sm text-[#00ff88] hover:text-[#00cc6a] transition-colors">
              View all
            </Link>
          </div>

          {recentChallenges.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <Swords className="w-12 h-12 text-[#2a2a3a] mx-auto mb-3" />
              <p className="text-[#6b7280] text-sm">No challenges yet.</p>
              <Link href="/challenges/new" className="mt-3 inline-block">
                <Button variant="outline" size="sm">Create your first challenge</Button>
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#1e1e2e]">
                    {["Game", "Opponent", "Role", "Stake", "Status", "Date"].map((h) => (
                      <th key={h} className="text-left px-6 py-3 text-xs font-semibold text-[#6b7280] uppercase tracking-wide whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {recentChallenges.map((challenge) => {
                    const gameInfo  = SUPPORTED_GAMES.find(
                      (g) => g.id === challenge.game || g.name === challenge.game
                    );
                    const isCreator = challenge.creatorId === session.user.id;
                    const opponent  = isCreator ? challenge.opponent : challenge.creator;
                    return (
                      <tr
                        key={challenge.id}
                        className="border-b border-[#1a1a24] hover:bg-[rgba(255,255,255,0.02)] transition-colors"
                      >
                        <td className="px-6 py-4">
                          <Link href={`/challenges/${challenge.id}`} className="flex items-center gap-2 group">
                            <GameIcon gameId={challenge.game} size="xs" />
                            <span className="text-sm text-[#f0f0f5] font-medium group-hover:text-[#00ff88] transition-colors">
                              {gameInfo?.name ?? challenge.game}
                            </span>
                          </Link>
                        </td>
                        <td className="px-6 py-4 text-sm text-[#a1a1aa]">
                          {opponent?.username ?? (
                            <span className="text-[#6b7280] italic">Waiting...</span>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${isCreator ? "text-[#8b5cf6] border-[rgba(139,92,246,0.3)] bg-[rgba(139,92,246,0.08)]" : "text-[#00ff88] border-[rgba(0,255,136,0.3)] bg-[rgba(0,255,136,0.08)]"}`}>
                            {isCreator ? "Creator" : "Opponent"}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm font-bold text-[#00ff88]">
                            ${challenge.stakeAmount.toFixed(2)}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <Badge>{challenge.status}</Badge>
                        </td>
                        <td className="px-6 py-4 text-sm text-[#6b7280] whitespace-nowrap">
                          {new Date(challenge.createdAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
