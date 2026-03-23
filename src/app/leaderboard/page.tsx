export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import { Navbar } from "@/components/layout/Navbar";
import { Trophy, Medal } from "lucide-react";

export default async function LeaderboardPage() {
  const users = await prisma.user.findMany({
    orderBy: { totalEarnings: "desc" },
    take: 20,
    select: {
      id: true,
      username: true,
      avatar: true,
      totalWins: true,
      totalLosses: true,
      totalEarnings: true,
    },
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0f]">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[rgba(251,191,36,0.15)] border border-[rgba(251,191,36,0.3)] mb-4">
            <Trophy className="w-7 h-7 text-[#fbbf24]" />
          </div>
          <h1 className="text-3xl font-black text-[#f0f0f5] mb-2">Leaderboard</h1>
          <p className="text-[#6b7280] text-sm">Top players ranked by total earnings</p>
        </div>

        {/* Top 3 podium */}
        {users.length >= 3 && (
          <div className="grid grid-cols-3 gap-3 mb-8">
            {/* 2nd place */}
            <div className="glass rounded-xl p-4 border border-[rgba(192,192,192,0.2)] text-center flex flex-col items-center gap-2 mt-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c0c0c0] to-[#a0a0a0] flex items-center justify-center text-sm font-black text-[#0a0a0f]">
                {users[1]?.username[0]?.toUpperCase()}
              </div>
              <div>
                <div className="text-xs font-bold text-[#c0c0c0]">2nd</div>
                <div className="text-sm font-bold text-[#f0f0f5] truncate max-w-[80px]">
                  {users[1]?.username}
                </div>
                <div className="text-xs text-[#c0c0c0] font-semibold">
                  ${users[1]?.totalEarnings.toFixed(0)}
                </div>
              </div>
            </div>

            {/* 1st place */}
            <div className="glass rounded-xl p-4 border border-[rgba(0,255,136,0.3)] glow-green text-center flex flex-col items-center gap-2">
              <Medal className="w-6 h-6 text-[#fbbf24]" />
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00ff88] to-[#8b5cf6] flex items-center justify-center text-sm font-black text-[#0a0a0f]">
                {users[0]?.username[0]?.toUpperCase()}
              </div>
              <div>
                <div className="text-xs font-bold text-[#00ff88]">1st Place</div>
                <div className="text-sm font-bold text-[#f0f0f5] truncate max-w-[80px]">
                  {users[0]?.username}
                </div>
                <div className="text-xs text-[#00ff88] font-bold">
                  ${users[0]?.totalEarnings.toFixed(0)}
                </div>
              </div>
            </div>

            {/* 3rd place */}
            <div className="glass rounded-xl p-4 border border-[rgba(205,127,50,0.2)] text-center flex flex-col items-center gap-2 mt-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#cd7f32] to-[#a0522d] flex items-center justify-center text-sm font-black text-[#0a0a0f]">
                {users[2]?.username[0]?.toUpperCase()}
              </div>
              <div>
                <div className="text-xs font-bold text-[#cd7f32]">3rd</div>
                <div className="text-sm font-bold text-[#f0f0f5] truncate max-w-[80px]">
                  {users[2]?.username}
                </div>
                <div className="text-xs text-[#cd7f32] font-semibold">
                  ${users[2]?.totalEarnings.toFixed(0)}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Full leaderboard table */}
        <div className="glass rounded-xl border border-[#1e1e2e] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#1e1e2e]">
                  <th className="text-left px-6 py-3 text-xs font-semibold text-[#6b7280] uppercase tracking-wide w-12">
                    Rank
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-[#6b7280] uppercase tracking-wide">
                    Player
                  </th>
                  <th className="text-right px-6 py-3 text-xs font-semibold text-[#6b7280] uppercase tracking-wide">
                    Wins
                  </th>
                  <th className="text-right px-6 py-3 text-xs font-semibold text-[#6b7280] uppercase tracking-wide">
                    Losses
                  </th>
                  <th className="text-right px-6 py-3 text-xs font-semibold text-[#6b7280] uppercase tracking-wide">
                    Win Rate
                  </th>
                  <th className="text-right px-6 py-3 text-xs font-semibold text-[#6b7280] uppercase tracking-wide">
                    Earnings
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-[#6b7280] text-sm">
                      No players ranked yet. Be the first to compete!
                    </td>
                  </tr>
                ) : (
                  users.map((user, index) => {
                    const rank = index + 1;
                    const totalGames = user.totalWins + user.totalLosses;
                    const winRate =
                      totalGames > 0
                        ? Math.round((user.totalWins / totalGames) * 100)
                        : 0;

                    const rankColor =
                      rank === 1
                        ? "text-[#00ff88]"
                        : rank === 2
                        ? "text-[#c0c0c0]"
                        : rank === 3
                        ? "text-[#cd7f32]"
                        : "text-[#6b7280]";

                    const rowClass =
                      rank === 1
                        ? "border-b border-[rgba(0,255,136,0.1)] bg-[rgba(0,255,136,0.03)]"
                        : rank === 2
                        ? "border-b border-[rgba(192,192,192,0.08)]"
                        : rank === 3
                        ? "border-b border-[rgba(205,127,50,0.08)]"
                        : "border-b border-[#1a1a24] hover:bg-[rgba(255,255,255,0.01)] transition-colors";

                    return (
                      <tr key={user.id} className={rowClass}>
                        <td className="px-6 py-4">
                          <span className={`text-lg font-black ${rankColor}`}>
                            {rank <= 3 ? ["🥇", "🥈", "🥉"][rank - 1] : `#${rank}`}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                              style={{
                                background:
                                  rank === 1
                                    ? "linear-gradient(135deg, #00ff88, #8b5cf6)"
                                    : "linear-gradient(135deg, #3a3a4a, #2a2a3a)",
                                color: rank === 1 ? "#0a0a0f" : "#a1a1aa",
                              }}
                            >
                              {user.username[0]?.toUpperCase()}
                            </div>
                            <span className={`font-semibold ${rank === 1 ? "text-[#00ff88]" : "text-[#f0f0f5]"}`}>
                              {user.username}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right text-sm font-semibold text-[#00ff88]">
                          {user.totalWins}
                        </td>
                        <td className="px-6 py-4 text-right text-sm text-[#ef4444]">
                          {user.totalLosses}
                        </td>
                        <td className="px-6 py-4 text-right text-sm text-[#a1a1aa]">
                          {winRate}%
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className={`font-bold ${rank === 1 ? "text-[#00ff88]" : "text-[#fbbf24]"}`}>
                            ${user.totalEarnings.toFixed(2)}
                          </span>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
