export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Navbar } from "@/components/layout/Navbar";
import { Badge } from "@/components/ui/Badge";
import { WithdrawalActions } from "@/components/admin/WithdrawalActions";
import { DisputePanel } from "@/components/admin/DisputePanel";
import {
  ShieldCheck,
  Users,
  Clock,
  ArrowDownLeft,
  ArrowUpRight,
  AlertTriangle,
  CheckCircle,
  Swords,
  Trophy,
  TrendingUp,
  Gamepad2,
  UserPlus,
} from "lucide-react";

export default async function AdminPage() {
  const session = await auth();

  if (!session?.user?.email || session.user.email !== process.env.ADMIN_EMAIL) {
    redirect("/dashboard");
  }

  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const startOfWeek  = new Date(startOfToday);
  startOfWeek.setDate(startOfToday.getDate() - startOfToday.getDay());

  const [
    userCount,
    pendingWithdrawals,
    processedWithdrawals,
    recentTransactions,
    disputedChallenges,
    totalRevenueAgg,
    totalDepositedAgg,
    totalWithdrawnAgg,
    totalChallengesCreated,
    totalChallengesCompleted,
    totalDisputesResolved,
    totalActiveChallenges,
    challengesByGame,
    biggestWinner,
    newUsersToday,
    newUsersThisWeek,
  ] = await Promise.all([
    prisma.user.count(),
    prisma.withdrawalRequest.findMany({
      where: { status: "PENDING" },
      orderBy: { createdAt: "asc" },
      include: { user: { select: { username: true, email: true } } },
    }),
    prisma.withdrawalRequest.findMany({
      where: { status: { not: "PENDING" } },
      orderBy: { updatedAt: "desc" },
      take: 100,
      include: { user: { select: { username: true, email: true } } },
    }),
    prisma.transaction.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
      include: { user: { select: { username: true } } },
    }),
    prisma.challenge.findMany({
      where:   { status: "DISPUTED" },
      orderBy: { updatedAt: "desc" },
      include: {
        creator:  { select: { id: true, username: true } },
        opponent: { select: { id: true, username: true } },
        evidence: { include: { user: { select: { id: true, username: true } } }, orderBy: { createdAt: "asc" } },
      },
    }),
    prisma.transaction.aggregate({
      where: { type: "RAKE", status: "COMPLETED" },
      _sum: { amount: true },
    }),
    prisma.transaction.aggregate({
      where: { type: "DEPOSIT", status: "COMPLETED" },
      _sum: { amount: true },
    }),
    prisma.withdrawalRequest.aggregate({
      where: { status: "COMPLETED" },
      _sum: { amount: true },
    }),
    prisma.challenge.count(),
    prisma.challenge.count({ where: { status: "COMPLETED" } }),
    prisma.challenge.count({ where: { status: "COMPLETED", winnerId: { not: null } }, }),
    prisma.challenge.count({ where: { status: { in: ["ACTIVE", "DISPUTED"] } } }),
    prisma.challenge.groupBy({
      by: ["game"],
      _count: { id: true },
      orderBy: { _count: { id: "desc" } },
      take: 1,
    }),
    prisma.user.findFirst({
      where: { totalEarnings: { gt: 0 } },
      orderBy: { totalEarnings: "desc" },
      select: { username: true, totalEarnings: true },
    }),
    prisma.user.count({ where: { createdAt: { gte: startOfToday } } }),
    prisma.user.count({ where: { createdAt: { gte: startOfWeek } } }),
  ]);

  const totalRevenue   = totalRevenueAgg._sum.amount   ?? 0;
  const totalDeposited = totalDepositedAgg._sum.amount  ?? 0;
  const totalWithdrawn = totalWithdrawnAgg._sum.amount  ?? 0;
  const popularGame    = challengesByGame[0]?.game ?? "—";

  const typeIcon: Record<string, React.ReactNode> = {
    DEPOSIT:    <ArrowDownLeft className="w-3.5 h-3.5 text-[#00ff88]" />,
    WITHDRAWAL: <ArrowUpRight  className="w-3.5 h-3.5 text-[#ef4444]" />,
    STAKE:      <ArrowUpRight  className="w-3.5 h-3.5 text-[#fbbf24]" />,
    PAYOUT:     <ArrowDownLeft className="w-3.5 h-3.5 text-[#00ff88]" />,
    RAKE:       <ArrowUpRight  className="w-3.5 h-3.5 text-[#6b7280]" />,
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0f]">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">

        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-[rgba(139,92,246,0.15)] border border-[rgba(139,92,246,0.3)] flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-[#8b5cf6]" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-[#f0f0f5]">Admin Dashboard</h1>
            <p className="text-xs text-[#6b7280]">Signed in as {session.user.email}</p>
          </div>
        </div>

        {/* Analytics */}
        <div className="mb-10">
          {/* Revenue & Money */}
          <p className="text-xs font-semibold text-[#6b7280] uppercase tracking-widest mb-3">Revenue & Money</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { icon: TrendingUp,   label: "Total Revenue (Rake)", value: `$${totalRevenue.toFixed(2)}`,   color: "#00ff88", border: "rgba(0,255,136,0.2)" },
              { icon: ArrowDownLeft,label: "Total Deposited",       value: `$${totalDeposited.toFixed(2)}`, color: "#8b5cf6", border: "rgba(139,92,246,0.2)" },
              { icon: ArrowUpRight, label: "Total Withdrawn",       value: `$${totalWithdrawn.toFixed(2)}`, color: "#f59e0b", border: "rgba(245,158,11,0.2)" },
              { icon: Clock,        label: "Pending Withdrawals",   value: pendingWithdrawals.length,       color: "#fbbf24", border: "rgba(251,191,36,0.2)" },
            ].map(({ icon: Icon, label, value, color, border }) => (
              <div key={label} className="glass rounded-xl p-5 border" style={{ borderColor: border }}>
                <Icon className="w-4 h-4 mb-2" style={{ color }} />
                <div className="text-2xl font-black" style={{ color }}>{value}</div>
                <div className="text-xs text-[#6b7280] mt-0.5">{label}</div>
              </div>
            ))}
          </div>

          {/* Challenges */}
          <p className="text-xs font-semibold text-[#6b7280] uppercase tracking-widest mb-3">Challenges</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
            {[
              { icon: Swords,       label: "Total Created",        value: totalChallengesCreated,    color: "#06b6d4", border: "rgba(6,182,212,0.2)" },
              { icon: CheckCircle,  label: "Total Completed",      value: totalChallengesCompleted,  color: "#00ff88", border: "rgba(0,255,136,0.2)" },
              { icon: Gamepad2,     label: "Active Right Now",     value: totalActiveChallenges,     color: "#8b5cf6", border: "rgba(139,92,246,0.2)" },
              { icon: Trophy,       label: "Disputes Resolved",    value: totalDisputesResolved,     color: "#f59e0b", border: "rgba(245,158,11,0.2)" },
              { icon: AlertTriangle,label: "Active Disputes",      value: disputedChallenges.length, color: "#ef4444", border: "rgba(239,68,68,0.2)" },
            ].map(({ icon: Icon, label, value, color, border }) => (
              <div key={label} className="glass rounded-xl p-5 border" style={{ borderColor: border }}>
                <Icon className="w-4 h-4 mb-2" style={{ color }} />
                <div className="text-2xl font-black" style={{ color }}>{value}</div>
                <div className="text-xs text-[#6b7280] mt-0.5">{label}</div>
              </div>
            ))}
          </div>

          {/* Users & Platform */}
          <p className="text-xs font-semibold text-[#6b7280] uppercase tracking-widest mb-3">Users & Platform</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Users,      label: "Total Users",           value: userCount,                                                         color: "#8b5cf6", border: "rgba(139,92,246,0.2)" },
              { icon: UserPlus,   label: "New Today / This Week", value: `${newUsersToday} / ${newUsersThisWeek}`,                          color: "#00ff88", border: "rgba(0,255,136,0.2)" },
              { icon: Gamepad2,   label: "Most Popular Game",     value: popularGame.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()), color: "#f59e0b", border: "rgba(245,158,11,0.2)" },
              { icon: Trophy,     label: "Biggest Winner",        value: biggestWinner ? `${biggestWinner.username}` : "—",                 color: "#fbbf24", border: "rgba(251,191,36,0.2)",
                sub: biggestWinner ? `$${biggestWinner.totalEarnings.toFixed(2)} earned` : undefined },
            ].map(({ icon: Icon, label, value, color, border, sub }) => (
              <div key={label} className="glass rounded-xl p-5 border" style={{ borderColor: border }}>
                <Icon className="w-4 h-4 mb-2" style={{ color }} />
                <div className="text-xl font-black leading-tight" style={{ color }}>{value}</div>
                {sub && <div className="text-xs font-semibold mt-0.5" style={{ color }}>{sub}</div>}
                <div className="text-xs text-[#6b7280] mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Disputes */}
        <div className="glass rounded-xl border border-[rgba(239,68,68,0.2)] overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-[#1e1e2e] flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-[#ef4444]" />
            <h2 className="text-lg font-bold text-[#f0f0f5]">Disputed Matches</h2>
            {disputedChallenges.length > 0 && (
              <span className="ml-auto text-xs font-bold bg-[rgba(239,68,68,0.15)] border border-[rgba(239,68,68,0.3)] text-[#ef4444] px-2 py-0.5 rounded-full">
                {disputedChallenges.length} open
              </span>
            )}
          </div>

          {disputedChallenges.length === 0 ? (
            <div className="px-6 py-10 text-center text-[#6b7280] text-sm">No active disputes.</div>
          ) : (
            <div className="p-4 flex flex-col gap-4">
              {disputedChallenges.map((c) => (
                <DisputePanel key={c.id} challenge={c} />
              ))}
            </div>
          )}
        </div>

        {/* Pending Withdrawals */}
        <div className="glass rounded-xl border border-[rgba(251,191,36,0.2)] overflow-hidden mb-6">
          <div className="px-6 py-4 border-b border-[#1e1e2e] flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#fbbf24]" />
            <h2 className="text-lg font-bold text-[#f0f0f5]">Pending Withdrawals</h2>
            {pendingWithdrawals.length > 0 && (
              <span className="ml-auto text-xs font-bold bg-[rgba(251,191,36,0.15)] border border-[rgba(251,191,36,0.3)] text-[#fbbf24] px-2 py-0.5 rounded-full">
                {pendingWithdrawals.length} pending
              </span>
            )}
          </div>

          {pendingWithdrawals.length === 0 ? (
            <div className="px-6 py-10 text-center text-[#6b7280] text-sm">No pending withdrawal requests.</div>
          ) : (
            <div className="flex flex-col divide-y divide-[#1a1a24]">
              {pendingWithdrawals.map((w) => (
                <div key={w.id} className="px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4">
                  {/* User info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-[#f0f0f5]">{w.user.username}</span>
                      <span className="text-xs text-[#6b7280]">{w.user.email}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                      <span className="text-[#fbbf24] font-black text-base">${w.amount.toFixed(2)}</span>
                      <span className="text-[#a1a1aa]">
                        <span className="text-[#6b7280] text-xs uppercase tracking-wide mr-1">via</span>
                        <span className="font-semibold">{w.method.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase())}</span>
                      </span>
                      <span className="text-[#f0f0f5] font-mono text-xs bg-[#1a1a24] border border-[#2a2a3a] rounded px-2 py-0.5 max-w-[220px] truncate">
                        {w.account}
                      </span>
                    </div>
                    <div className="text-xs text-[#6b7280] mt-1.5">
                      Requested {new Date(w.createdAt).toLocaleString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" })}
                    </div>
                  </div>
                  {/* Action */}
                  <div className="flex-shrink-0">
                    <WithdrawalActions id={w.id} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Processed Withdrawals History */}
        <div className="glass rounded-xl border border-[#1e1e2e] overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-[#1e1e2e] flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#00ff88]" />
            <h2 className="text-lg font-bold text-[#f0f0f5]">Processed Withdrawals</h2>
            {processedWithdrawals.length > 0 && (
              <span className="ml-auto text-xs text-[#6b7280]">{processedWithdrawals.length} total</span>
            )}
          </div>

          {processedWithdrawals.length === 0 ? (
            <div className="px-6 py-10 text-center text-[#6b7280] text-sm">No processed withdrawals yet.</div>
          ) : (
            <div className="flex flex-col divide-y divide-[#1a1a24]">
              {processedWithdrawals.map((w) => (
                <div key={w.id} className="px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-4 opacity-60">
                  {/* User info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-[#a1a1aa]">{w.user.username}</span>
                      <span className="text-xs text-[#6b7280]">{w.user.email}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                      <span className="text-[#a1a1aa] font-bold">${w.amount.toFixed(2)}</span>
                      <span className="text-[#6b7280]">
                        <span className="text-xs uppercase tracking-wide mr-1">via</span>
                        <span className="font-semibold">{w.method.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase())}</span>
                      </span>
                      <span className="text-[#6b7280] font-mono text-xs bg-[#1a1a24] border border-[#2a2a3a] rounded px-2 py-0.5 max-w-[220px] truncate">
                        {w.account}
                      </span>
                    </div>
                    <div className="text-xs text-[#6b7280] mt-1">
                      Requested {new Date(w.createdAt).toLocaleString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" })}
                      {" · "}
                      Processed {new Date(w.updatedAt).toLocaleString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" })}
                    </div>
                  </div>
                  {/* Status badge */}
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#00ff88] bg-[rgba(0,255,136,0.08)] border border-[rgba(0,255,136,0.2)] rounded-full px-2.5 py-1">
                      <CheckCircle className="w-3 h-3" />
                      Processed
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* All Transactions */}
        <div className="glass rounded-xl border border-[#1e1e2e] overflow-hidden">
          <div className="px-6 py-4 border-b border-[#1e1e2e]">
            <h2 className="text-lg font-bold text-[#f0f0f5]">All Transactions</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#1e1e2e]">
                  {["User", "Type", "Amount", "Status", "Description", "Date"].map((h) => (
                    <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-[#6b7280] uppercase tracking-wide whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentTransactions.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-10 text-center text-[#6b7280] text-sm">
                      No transactions yet.
                    </td>
                  </tr>
                ) : (
                  recentTransactions.map((tx) => {
                    const isCredit = tx.type === "DEPOSIT" || tx.type === "PAYOUT";
                    return (
                      <tr key={tx.id} className="border-b border-[#1a1a24] hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                        <td className="px-4 py-3 text-sm font-semibold text-[#f0f0f5]">
                          {tx.user.username}
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1.5">
                            {typeIcon[tx.type]}
                            <span className="text-xs text-[#a1a1aa]">{tx.type}</span>
                          </div>
                        </td>
                        <td className={`px-4 py-3 text-sm font-bold ${isCredit ? "text-[#00ff88]" : "text-[#ef4444]"}`}>
                          {isCredit ? "+" : "−"}${tx.amount.toFixed(2)}
                        </td>
                        <td className="px-4 py-3"><Badge>{tx.status}</Badge></td>
                        <td className="px-4 py-3 text-xs text-[#6b7280] max-w-[200px] truncate">
                          {tx.description || "—"}
                        </td>
                        <td className="px-4 py-3 text-xs text-[#6b7280] whitespace-nowrap">
                          {new Date(tx.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
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
