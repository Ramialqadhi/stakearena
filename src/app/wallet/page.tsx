export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Navbar } from "@/components/layout/Navbar";
import { WalletDepositForm } from "@/components/wallet/WalletDepositForm";
import { WalletWithdrawForm } from "@/components/wallet/WalletWithdrawForm";
import { PendingWithdrawals } from "@/components/wallet/PendingWithdrawals";
import { Badge } from "@/components/ui/Badge";
import { Wallet, ArrowDownLeft, ArrowUpRight, Clock, Lock } from "lucide-react";

export default async function WalletPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const [user, transactions, pendingWithdrawals, lockedChallenges] = await Promise.all([
    prisma.user.findUnique({ where: { id: session.user.id } }),
    prisma.transaction.findMany({
      where: { userId: session.user.id },
      orderBy: { createdAt: "desc" },
      take: 20,
    }),
    prisma.withdrawalRequest.findMany({
      where: { userId: session.user.id, status: "PENDING" },
      orderBy: { createdAt: "desc" },
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

  if (!user) redirect("/login");

  const lockedAmount = lockedChallenges.reduce((sum, c) => sum + c.stakeAmount, 0);

  const typeIcon: Record<string, React.ReactNode> = {
    DEPOSIT:    <ArrowDownLeft className="w-4 h-4 text-[#00ff88]" />,
    WITHDRAWAL: <ArrowUpRight  className="w-4 h-4 text-[#ef4444]" />,
    STAKE:      <ArrowUpRight  className="w-4 h-4 text-[#fbbf24]" />,
    PAYOUT:     <ArrowDownLeft className="w-4 h-4 text-[#00ff88]" />,
    RAKE:       <ArrowUpRight  className="w-4 h-4 text-[#6b7280]" />,
  };

  const typeColor: Record<string, string> = {
    DEPOSIT:    "text-[#00ff88]",
    WITHDRAWAL: "text-[#ef4444]",
    STAKE:      "text-[#fbbf24]",
    PAYOUT:     "text-[#00ff88]",
    RAKE:       "text-[#6b7280]",
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0f]">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-8">
        <h1 className="text-2xl font-black text-[#f0f0f5] mb-6">Wallet</h1>

        {/* Balance card */}
        <div className="glass rounded-2xl p-6 border border-[rgba(0,255,136,0.2)] mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[rgba(0,255,136,0.1)] border border-[rgba(0,255,136,0.2)] flex items-center justify-center">
                <Wallet className="w-7 h-7 text-[#00ff88]" />
              </div>
              <div>
                <div className="text-sm text-[#6b7280] mb-0.5">Available Balance</div>
                <div className="text-4xl font-black text-[#00ff88]">${user.balance.toFixed(2)}</div>
              </div>
            </div>
            <div className="text-xs text-[#6b7280] sm:text-right">
              <div>10% platform fee on winnings</div>
              <div className="mt-0.5">Withdrawals processed within 24–48 hrs</div>
            </div>
          </div>
          {lockedAmount > 0 && (
            <div className="mt-4 pt-4 border-t border-[#1e1e2e] flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-[#fbbf24] flex-shrink-0" />
              <span className="text-sm text-[#a1a1aa]">
                <span className="font-bold text-[#fbbf24]">${lockedAmount.toFixed(2)}</span>
                {" "}locked in active challenges — will be returned or paid out when matches resolve
              </span>
            </div>
          )}
        </div>

        {/* Pending withdrawals */}
        <PendingWithdrawals withdrawals={pendingWithdrawals.map(w => ({
          id: w.id,
          amount: w.amount,
          method: w.method,
          account: w.account,
          createdAt: w.createdAt.toISOString(),
        }))} />

        {/* Deposit + Withdraw forms side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <WalletDepositForm />
          <WalletWithdrawForm balance={user.balance} />
        </div>

        {/* Transaction history */}
        <div className="glass rounded-xl border border-[#1e1e2e] overflow-hidden">
          <div className="px-6 py-4 border-b border-[#1e1e2e]">
            <h2 className="text-lg font-bold text-[#f0f0f5]">Transaction History</h2>
          </div>

          {transactions.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <Clock className="w-10 h-10 text-[#2a2a3a] mx-auto mb-3" />
              <p className="text-[#6b7280] text-sm">No transactions yet.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#1e1e2e]">
                    <th className="text-left px-6 py-3 text-xs font-semibold text-[#6b7280] uppercase tracking-wide">Type</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-[#6b7280] uppercase tracking-wide">Description</th>
                    <th className="text-right px-6 py-3 text-xs font-semibold text-[#6b7280] uppercase tracking-wide">Amount</th>
                    <th className="text-right px-6 py-3 text-xs font-semibold text-[#6b7280] uppercase tracking-wide">Status</th>
                    <th className="text-right px-6 py-3 text-xs font-semibold text-[#6b7280] uppercase tracking-wide">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((tx) => {
                    const isCredit = tx.type === "DEPOSIT" || tx.type === "PAYOUT";
                    return (
                      <tr key={tx.id} className="border-b border-[#1a1a24] hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            {typeIcon[tx.type]}
                            <span className="text-sm text-[#a1a1aa]">{tx.type}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-[#6b7280] max-w-[200px] truncate">
                          {tx.description || "—"}
                        </td>
                        <td className={`px-6 py-4 text-right text-sm font-bold ${typeColor[tx.type]}`}>
                          {isCredit ? "+" : "−"}${tx.amount.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <Badge>{tx.status}</Badge>
                        </td>
                        <td className="px-6 py-4 text-right text-sm text-[#6b7280]">
                          {new Date(tx.createdAt).toLocaleDateString("en-US", {
                            month: "short", day: "numeric", year: "numeric",
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
