export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import { Navbar } from "@/components/layout/Navbar";

function wr(wins: number, losses: number) {
  const t = wins + losses;
  return t > 0 ? Math.round((wins / t) * 100) : 0;
}

const PODIUM = {
  1: {
    border:      "rgba(0,255,136,0.45)",
    glow:        "0 0 40px rgba(0,255,136,0.18), 0 0 80px rgba(0,255,136,0.07)",
    avatarGrad:  "linear-gradient(135deg,#00ff88,#00cc66)",
    avatarColor: "#0a0a0f",
    accent:      "#00ff88",
    label:       "1st Place",
  },
  2: {
    border:      "rgba(209,213,219,0.3)",
    glow:        "0 0 24px rgba(209,213,219,0.1)",
    avatarGrad:  "linear-gradient(135deg,#d1d5db,#9ca3af)",
    avatarColor: "#0a0a0f",
    accent:      "#d1d5db",
    label:       "2nd Place",
  },
  3: {
    border:      "rgba(205,127,50,0.3)",
    glow:        "0 0 24px rgba(205,127,50,0.1)",
    avatarGrad:  "linear-gradient(135deg,#cd7f32,#a0522d)",
    avatarColor: "#fff",
    accent:      "#cd7f32",
    label:       "3rd Place",
  },
} as const;

export default async function LeaderboardPage() {
  const users = await prisma.user.findMany({
    orderBy: { totalEarnings: "desc" },
    take: 20,
    select: { id: true, username: true, totalWins: true, totalLosses: true, totalEarnings: true },
  });

  const top3    = users.slice(0, 3);
  const restList = users.slice(3);

  // podium display order: 2nd | 1st | 3rd
  const podium      = [top3[1], top3[0], top3[2]];
  const podiumRanks = [2, 1, 3] as const;

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: "#0a0a0f" }}>
      <Navbar />

      <main style={{ flex: 1, maxWidth: 860, margin: "0 auto", width: "100%", padding: "48px 16px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h1 style={{
            fontSize: "clamp(2rem,6vw,3rem)", fontWeight: 900,
            color: "#f0f0f5", letterSpacing: "-0.03em", margin: "0 0 8px",
          }}>
            Leaderboard
          </h1>
          <p style={{ fontSize: 14, color: "#6b7280", margin: 0 }}>
            Top players ranked by total earnings
          </p>
        </div>

        {/* ── Podium ── */}
        {top3.length > 0 && (
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 12,
            alignItems: "flex-end",
            marginBottom: 40,
          }}>
            {podium.map((user, i) => {
              if (!user) return <div key={i} />;
              const rank = podiumRanks[i];
              const s    = PODIUM[rank];
              const rate = wr(user.totalWins, user.totalLosses);
              const isFirst = rank === 1;

              return (
                <div key={user.id} style={{
                  background: "rgba(14,14,22,0.95)",
                  border:     `1px solid ${s.border}`,
                  borderRadius: 20,
                  boxShadow:  s.glow,
                  padding:    isFirst ? "28px 16px 20px" : "20px 12px 16px",
                  display: "flex", flexDirection: "column", alignItems: "center",
                  gap: isFirst ? 10 : 8,
                  marginTop: isFirst ? 0 : rank === 2 ? 32 : 48,
                  position: "relative",
                  backdropFilter: "blur(16px)",
                }}>

                  {/* Crown for #1 */}
                  {isFirst && (
                    <div style={{ position: "absolute", top: -18, left: "50%", transform: "translateX(-50%)" }}>
                      <svg width="32" height="22" viewBox="0 0 32 22" fill="none">
                        <path d="M2 20L6 5L12 12L16 2L20 12L26 5L30 20H2Z"
                          fill="#fbbf24" stroke="#f59e0b" strokeWidth="0.8"
                          style={{ filter: "drop-shadow(0 0 8px rgba(251,191,36,0.9))" }} />
                      </svg>
                    </div>
                  )}

                  {/* Rank pill */}
                  <span style={{
                    fontSize: 10, fontWeight: 800, letterSpacing: "0.14em",
                    textTransform: "uppercase", color: s.accent,
                    background: `${s.accent}14`,
                    border: `1px solid ${s.accent}40`,
                    padding: "3px 10px", borderRadius: 8,
                  }}>
                    {s.label}
                  </span>

                  {/* Avatar */}
                  <div style={{
                    width: isFirst ? 72 : 56, height: isFirst ? 72 : 56,
                    borderRadius: "50%",
                    background: s.avatarGrad,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: isFirst ? 26 : 20, fontWeight: 900, color: s.avatarColor,
                    boxShadow: `0 0 20px ${s.accent}55`,
                    border: `2px solid ${s.accent}70`,
                    flexShrink: 0,
                  }}>
                    {user.username[0]?.toUpperCase()}
                  </div>

                  {/* Username */}
                  <div style={{
                    fontSize: isFirst ? 16 : 14, fontWeight: 800, color: "#f0f0f5",
                    textAlign: "center", width: "100%",
                    overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                  }}>
                    {user.username}
                  </div>

                  {/* Earnings */}
                  <div style={{
                    fontSize: isFirst ? 22 : 18, fontWeight: 900, color: s.accent,
                    textShadow: isFirst ? `0 0 16px ${s.accent}80` : "none",
                    letterSpacing: "-0.02em",
                  }}>
                    ${user.totalEarnings.toFixed(0)}
                  </div>

                  {/* Stats row */}
                  <div style={{
                    display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap",
                    justifyContent: "center", fontSize: 11,
                  }}>
                    <span style={{ color: "#00ff88", fontWeight: 700 }}>{user.totalWins}W</span>
                    <span style={{ color: "#4b5563" }}>·</span>
                    <span style={{ color: "#ef4444", fontWeight: 700 }}>{user.totalLosses}L</span>
                    <span style={{ color: "#4b5563" }}>·</span>
                    <span style={{ color: s.accent, fontWeight: 700 }}>{rate}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ── Ranks 4–20 ── */}
        {restList.length > 0 && (
          <div style={{
            background: "rgba(14,14,22,0.8)",
            border: "1px solid #1e1e2e",
            borderRadius: 20,
            overflow: "hidden",
          }}>
            {/* Column headers */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "48px 1fr 64px 72px 96px",
              padding: "10px 20px",
              borderBottom: "1px solid #1e1e2e",
              gap: 8,
            }}>
              {(["#", "Player", "Wins", "Win Rate", "Earnings"] as const).map((h, i) => (
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
              const rank = i + 4;
              const rate = wr(user.totalWins, user.totalLosses);

              return (
                <div key={user.id} style={{
                  display: "grid",
                  gridTemplateColumns: "48px 1fr 64px 72px 96px",
                  padding: "13px 20px",
                  gap: 8,
                  alignItems: "center",
                  borderBottom: i < restList.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                  transition: "background 0.15s",
                }}>
                  {/* Rank */}
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#4b5563" }}>
                    {rank}
                  </div>

                  {/* Player */}
                  <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
                    <div style={{
                      width: 30, height: 30, borderRadius: "50%", flexShrink: 0,
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 12, fontWeight: 800, color: "#6b7280",
                    }}>
                      {user.username[0]?.toUpperCase()}
                    </div>
                    <span style={{
                      fontSize: 14, fontWeight: 600, color: "#d1d5db",
                      overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                    }}>
                      {user.username}
                    </span>
                  </div>

                  {/* Wins */}
                  <div style={{ textAlign: "right", fontSize: 13, fontWeight: 700, color: "#00ff88" }}>
                    {user.totalWins}
                  </div>

                  {/* Win rate */}
                  <div style={{ textAlign: "right", fontSize: 13, fontWeight: 700, color: "#a1a1aa" }}>
                    {rate}%
                  </div>

                  {/* Earnings */}
                  <div style={{ textAlign: "right", fontSize: 13, fontWeight: 800, color: "#fbbf24" }}>
                    ${user.totalEarnings.toFixed(2)}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {users.length === 0 && (
          <div style={{ textAlign: "center", padding: "80px 24px", color: "#4b5563" }}>
            <div style={{ fontSize: 52, marginBottom: 16 }}>🏆</div>
            <div style={{ fontSize: 16, fontWeight: 600, color: "#6b7280" }}>No players ranked yet.</div>
            <div style={{ fontSize: 14, marginTop: 6 }}>Be the first to compete and claim the top spot.</div>
          </div>
        )}

      </main>
    </div>
  );
}
