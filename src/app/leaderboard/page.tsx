export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import { Navbar } from "@/components/layout/Navbar";

/* ── helpers ──────────────────────────────────────────────────────── */
function wr(wins: number, losses: number) {
  const t = wins + losses;
  return t > 0 ? Math.round((wins / t) * 100) : 0;
}

/* ── rank medal ───────────────────────────────────────────────────── */
function RankBadge({ rank }: { rank: number }) {
  if (rank === 1) return (
    <div style={{
      width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
      background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
      display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: "0 0 12px rgba(251,191,36,0.6), 0 0 24px rgba(251,191,36,0.25)",
      border: "1.5px solid rgba(251,191,36,0.8)",
    }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M2 7l4 10h12l4-10-6 4-4-7-4 7-6-4z" fill="#0a0a0f" strokeLinejoin="round"/>
      </svg>
    </div>
  );
  if (rank === 2) return (
    <div style={{
      width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
      background: "linear-gradient(135deg, #d1d5db, #9ca3af)",
      display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: "0 0 10px rgba(209,213,219,0.35)",
      border: "1.5px solid rgba(209,213,219,0.6)",
    }}>
      <span style={{ fontSize: 14, fontWeight: 900, color: "#1a1a2a" }}>2</span>
    </div>
  );
  if (rank === 3) return (
    <div style={{
      width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
      background: "linear-gradient(135deg, #cd7f32, #a0522d)",
      display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: "0 0 10px rgba(205,127,50,0.35)",
      border: "1.5px solid rgba(205,127,50,0.6)",
    }}>
      <span style={{ fontSize: 14, fontWeight: 900, color: "#1a1a2a" }}>3</span>
    </div>
  );
  return (
    <div style={{
      width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
      background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <span style={{ fontSize: 12, fontWeight: 700, color: "#6b7280" }}>#{rank}</span>
    </div>
  );
}

/* ── win-rate bar ─────────────────────────────────────────────────── */
function WinRateBar({ rate, rank }: { rate: number; rank: number }) {
  const color = rank === 1 ? "#00ff88" : rank === 2 ? "#d1d5db" : rank === 3 ? "#cd7f32" : "#00ff88";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{
        flex: 1, height: 4, background: "rgba(255,255,255,0.06)", borderRadius: 2, overflow: "hidden",
        minWidth: 48,
      }}>
        <div style={{
          height: "100%", width: `${rate}%`,
          background: color,
          borderRadius: 2,
          boxShadow: rank <= 3 ? `0 0 6px ${color}80` : "none",
          transition: "width 0.6s ease",
        }} />
      </div>
      <span style={{ fontSize: 12, fontWeight: 700, color, minWidth: 34, textAlign: "right" }}>
        {rate}%
      </span>
    </div>
  );
}

/* ── page ─────────────────────────────────────────────────────────── */
export default async function LeaderboardPage() {
  const [users, totalPlayers, completedAgg] = await Promise.all([
    prisma.user.findMany({
      orderBy: { totalEarnings: "desc" },
      take: 20,
      select: { id: true, username: true, totalWins: true, totalLosses: true, totalEarnings: true },
    }),
    prisma.user.count(),
    prisma.challenge.aggregate({
      where: { status: "COMPLETED" },
      _count: { id: true },
      _sum:   { stakeAmount: true },
    }),
  ]);

  const totalMatches     = completedAgg._count.id;
  const totalPrize       = ((completedAgg._sum.stakeAmount ?? 0) * 2 * 0.9);

  const top3    = users.slice(0, 3);
  const restList = users.slice(3);

  // podium order: 2nd | 1st | 3rd
  const podium = [top3[1], top3[0], top3[2]];
  const podiumRanks = [2, 1, 3];

  const podiumStyles: Record<number, {
    border: string; glow: string; avatarBg: string; avatarColor: string;
    labelColor: string; earningsColor: string; height: number; top: number;
  }> = {
    1: {
      border: "1px solid rgba(0,255,136,0.5)",
      glow: "0 0 30px rgba(0,255,136,0.18), 0 0 60px rgba(0,255,136,0.08)",
      avatarBg: "linear-gradient(135deg, #00ff88, #00cc66)",
      avatarColor: "#0a0a0f",
      labelColor: "#00ff88",
      earningsColor: "#00ff88",
      height: 200, top: 0,
    },
    2: {
      border: "1px solid rgba(209,213,219,0.3)",
      glow: "0 0 20px rgba(209,213,219,0.08)",
      avatarBg: "linear-gradient(135deg, #d1d5db, #9ca3af)",
      avatarColor: "#0a0a0f",
      labelColor: "#d1d5db",
      earningsColor: "#d1d5db",
      height: 164, top: 36,
    },
    3: {
      border: "1px solid rgba(205,127,50,0.3)",
      glow: "0 0 20px rgba(205,127,50,0.08)",
      avatarBg: "linear-gradient(135deg, #cd7f32, #a0522d)",
      avatarColor: "#fff",
      labelColor: "#cd7f32",
      earningsColor: "#cd7f32",
      height: 148, top: 52,
    },
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: "#0a0a0f" }}>
      <Navbar />

      <main style={{ flex: 1, maxWidth: 860, margin: "0 auto", width: "100%", padding: "40px 16px 60px" }}>

        {/* ── Page header ── */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            width: 64, height: 64, borderRadius: 20,
            background: "rgba(0,255,136,0.08)",
            border: "1px solid rgba(0,255,136,0.3)",
            marginBottom: 16,
            boxShadow: "0 0 24px rgba(0,255,136,0.15), 0 0 48px rgba(0,255,136,0.06)",
          }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" style={{ filter: "drop-shadow(0 0 8px rgba(0,255,136,0.8))" }}>
              <path d="M6 2H18V9C18 12.3137 15.3137 15 12 15C8.68629 15 6 12.3137 6 9V2Z" fill="#00ff88" opacity="0.9"/>
              <path d="M4 2H6V7C4.89543 7 4 6.10457 4 5V2Z" fill="#00ff88" opacity="0.5"/>
              <path d="M18 2H20V5C20 6.10457 19.1046 7 18 7V2Z" fill="#00ff88" opacity="0.5"/>
              <path d="M9 15V18M15 15V18M6 18H18" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M8 21H16" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 900, color: "#f0f0f5", letterSpacing: "-0.03em", margin: "0 0 8px" }}>
            Leaderboard
          </h1>
          <p style={{ fontSize: 14, color: "#6b7280", margin: 0 }}>
            Top players ranked by total earnings
          </p>
        </div>

        {/* ── Platform stats ── */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12,
          marginBottom: 40,
        }}>
          {[
            { label: "Total Players",   value: totalPlayers.toLocaleString(),           icon: "👥" },
            { label: "Matches Played",  value: totalMatches.toLocaleString(),            icon: "⚔️" },
            { label: "Prize Paid Out",  value: `$${totalPrize.toLocaleString("en-US", { maximumFractionDigits: 0 })}`, icon: "💰" },
          ].map(stat => (
            <div key={stat.label} style={{
              background: "rgba(18,18,26,0.8)", border: "1px solid #1e1e2e",
              borderRadius: 16, padding: "16px 12px", textAlign: "center",
              backdropFilter: "blur(12px)",
            }}>
              <div style={{ fontSize: 22, marginBottom: 6 }}>{stat.icon}</div>
              <div style={{ fontSize: "clamp(1.1rem, 3vw, 1.5rem)", fontWeight: 900, color: "#00ff88", letterSpacing: "-0.02em", lineHeight: 1 }}>
                {stat.value}
              </div>
              <div style={{ fontSize: 11, color: "#6b7280", marginTop: 4, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── Top 3 podium ── */}
        {top3.length >= 1 && (
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10,
            marginBottom: 32, alignItems: "flex-end",
          }}>
            {podium.map((user, i) => {
              if (!user) return <div key={i} />;
              const rank = podiumRanks[i];
              const s = podiumStyles[rank];
              const rate = wr(user.totalWins, user.totalLosses);
              const isFirst = rank === 1;

              return (
                <div key={user.id} style={{
                  background: "rgba(14,14,22,0.9)",
                  border: s.border,
                  borderRadius: 18,
                  boxShadow: s.glow,
                  padding: "20px 12px 16px",
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
                  marginTop: s.top,
                  backdropFilter: "blur(12px)",
                  position: "relative",
                }}>
                  {/* crown for #1 */}
                  {isFirst && (
                    <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)" }}>
                      <svg width="28" height="20" viewBox="0 0 24 18" fill="none" style={{ filter: "drop-shadow(0 0 6px rgba(251,191,36,0.9))" }}>
                        <path d="M2 16L5 5L9.5 10L12 2L14.5 10L19 5L22 16H2Z" fill="#fbbf24" stroke="#f59e0b" strokeWidth="0.5"/>
                      </svg>
                    </div>
                  )}

                  {/* rank label */}
                  <span style={{
                    fontSize: 10, fontWeight: 800, color: s.labelColor,
                    letterSpacing: "0.14em", textTransform: "uppercase",
                    background: `${s.labelColor}18`, padding: "2px 8px", borderRadius: 6,
                    border: `1px solid ${s.labelColor}40`,
                  }}>
                    {rank === 1 ? "1st Place" : rank === 2 ? "2nd Place" : "3rd Place"}
                  </span>

                  {/* avatar */}
                  <div style={{
                    width: isFirst ? 64 : 52, height: isFirst ? 64 : 52,
                    borderRadius: "50%", background: s.avatarBg,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: isFirst ? 22 : 18, fontWeight: 900, color: s.avatarColor,
                    boxShadow: `0 0 16px ${s.labelColor}50`,
                    border: `2px solid ${s.labelColor}60`,
                    flexShrink: 0,
                  }}>
                    {user.username[0]?.toUpperCase()}
                  </div>

                  {/* username */}
                  <div style={{
                    fontSize: isFirst ? 15 : 13, fontWeight: 800, color: "#f0f0f5",
                    textAlign: "center", maxWidth: "100%",
                    overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", width: "100%",
                  }}>
                    {user.username}
                  </div>

                  {/* earnings */}
                  <div style={{
                    fontSize: isFirst ? 17 : 15, fontWeight: 900, color: s.earningsColor,
                    textShadow: isFirst ? `0 0 12px ${s.earningsColor}80` : "none",
                  }}>
                    ${user.totalEarnings.toFixed(0)}
                  </div>

                  {/* W/L */}
                  <div style={{ fontSize: 11, color: "#6b7280", textAlign: "center" }}>
                    <span style={{ color: "#00ff88", fontWeight: 700 }}>{user.totalWins}W</span>
                    {" / "}
                    <span style={{ color: "#ef4444", fontWeight: 700 }}>{user.totalLosses}L</span>
                    {" · "}
                    <span style={{ color: s.labelColor, fontWeight: 700 }}>{rate}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ── Full list (rank 4+) ── */}
        {restList.length > 0 && (
          <div style={{
            background: "rgba(14,14,22,0.8)", border: "1px solid #1e1e2e",
            borderRadius: 20, overflow: "hidden", backdropFilter: "blur(12px)",
          }}>
            {/* table header */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "52px 1fr 80px 80px 110px 100px",
              padding: "10px 20px",
              borderBottom: "1px solid #1e1e2e",
              gap: 8,
            }}>
              {["Rank", "Player", "Wins", "Losses", "Win Rate", "Earnings"].map((h, i) => (
                <div key={h} style={{
                  fontSize: 10, fontWeight: 700, color: "#4b5563",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  textAlign: i >= 2 ? "right" : "left",
                }}>
                  {h}
                </div>
              ))}
            </div>

            {restList.map((user, i) => {
              const rank  = i + 4;
              const rate  = wr(user.totalWins, user.totalLosses);
              const isEven = i % 2 === 0;

              return (
                <div key={user.id} style={{
                  display: "grid",
                  gridTemplateColumns: "52px 1fr 80px 80px 110px 100px",
                  padding: "12px 20px",
                  gap: 8,
                  alignItems: "center",
                  background: isEven ? "transparent" : "rgba(255,255,255,0.012)",
                  borderBottom: i < restList.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                  transition: "background 0.15s",
                }}>
                  {/* rank */}
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <RankBadge rank={rank} />
                  </div>

                  {/* player */}
                  <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: "50%", flexShrink: 0,
                      background: "linear-gradient(135deg, #2a2a3a, #1e1e2e)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 13, fontWeight: 800, color: "#a1a1aa",
                    }}>
                      {user.username[0]?.toUpperCase()}
                    </div>
                    <span style={{
                      fontSize: 14, fontWeight: 700, color: "#e0e0e8",
                      overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                    }}>
                      {user.username}
                    </span>
                  </div>

                  {/* wins */}
                  <div style={{ textAlign: "right", fontSize: 14, fontWeight: 700, color: "#00ff88" }}>
                    {user.totalWins}
                  </div>

                  {/* losses */}
                  <div style={{ textAlign: "right", fontSize: 14, fontWeight: 600, color: "#ef4444" }}>
                    {user.totalLosses}
                  </div>

                  {/* win rate bar */}
                  <div>
                    <WinRateBar rate={rate} rank={rank} />
                  </div>

                  {/* earnings */}
                  <div style={{ textAlign: "right", fontSize: 14, fontWeight: 800, color: "#fbbf24" }}>
                    ${user.totalEarnings.toFixed(2)}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {users.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 24px", color: "#4b5563" }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>🏆</div>
            <div style={{ fontSize: 16, fontWeight: 600 }}>No players ranked yet.</div>
            <div style={{ fontSize: 14, marginTop: 6 }}>Be the first to compete and claim the top spot.</div>
          </div>
        )}
      </main>
    </div>
  );
}
