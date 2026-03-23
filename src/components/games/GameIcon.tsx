import React from "react";

interface GameIconProps {
  gameId: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
}

const SIZE_CLASSES: Record<string, string> = {
  xs: "w-8 h-8 rounded-lg",
  sm: "w-12 h-12 rounded-xl",
  md: "w-16 h-16 rounded-xl",
  lg: "w-24 h-24 rounded-2xl",
  xl: "w-32 h-32 rounded-2xl",
};

const ICON_PX: Record<string, number> = {
  xs: 16,
  sm: 22,
  md: 28,
  lg: 40,
  xl: 54,
};

// ─── SVG Icons ─────────────────────────────────────────────────────────────

function ShieldSwordsIcon({ s }: { s: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L20 6V13C20 17.5 16.5 21 12 22C7.5 21 4 17.5 4 13V6L12 2Z"
        stroke="rgba(255,255,255,0.9)" strokeWidth="1.4" strokeLinejoin="round"
        fill="rgba(255,255,255,0.07)"
      />
      <line x1="8.5" y1="9.5" x2="15.5" y2="16.5" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="15.5" y1="9.5" x2="8.5" y2="16.5" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9.5 6.5L11 8.5L12 6L13 8.5L14.5 6.5" stroke="rgba(196,181,253,0.95)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function KingPieceIcon({ s }: { s: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      {/* Cross */}
      <line x1="12" y1="2" x2="12" y2="8" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/>
      <line x1="9" y1="4.5" x2="15" y2="4.5" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/>
      {/* Head */}
      <path d="M8.5 9C8.5 7.5 10 6.5 12 6.5C14 6.5 15.5 7.5 15.5 9C15.5 10.5 14 11.5 12 11.5C10 11.5 8.5 10.5 8.5 9Z"
        stroke="#fbbf24" strokeWidth="1.3" fill="rgba(251,191,36,0.1)"
      />
      {/* Body */}
      <path d="M9 11.5L8 17H16L15 11.5" stroke="#fbbf24" strokeWidth="1.3" strokeLinejoin="round" fill="rgba(251,191,36,0.08)"/>
      {/* Base */}
      <path d="M7 17L6 21H18L17 17" stroke="#fbbf24" strokeWidth="1.3" strokeLinejoin="round" fill="rgba(251,191,36,0.12)"/>
    </svg>
  );
}

function SoccerBallIcon({ s }: { s: number }) {
  const cx = 12, cy = 12, r = 8.5;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const angles = [90, 162, 234, 306, 18];
  const penta = angles.map((a) => ({
    x: cx + r * 0.52 * Math.cos(toRad(a - 90)),
    y: cy + r * 0.52 * Math.sin(toRad(a - 90)),
  }));
  const pentaPath = penta.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ") + "Z";
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r={r} stroke="rgba(255,255,255,0.85)" strokeWidth="1.4" fill="rgba(255,255,255,0.06)"/>
      <path d={pentaPath} stroke="rgba(255,255,255,0.8)" strokeWidth="0.9" fill="rgba(0,0,0,0.2)"/>
      {penta.map((pt, i) => {
        const angle = Math.atan2(pt.y - cy, pt.x - cx);
        return (
          <line key={i}
            x1={pt.x.toFixed(1)} y1={pt.y.toFixed(1)}
            x2={(cx + r * Math.cos(angle)).toFixed(1)}
            y2={(cy + r * Math.sin(angle)).toFixed(1)}
            stroke="rgba(255,255,255,0.4)" strokeWidth="0.8"
          />
        );
      })}
    </svg>
  );
}

// ─── Background Patterns ─────────────────────────────────────────────────────

function ClashPattern() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 64 64" preserveAspectRatio="xMidYMid slice">
      <polygon points="8,4 12,10 8,16 4,10" fill="rgba(139,92,246,0.18)"/>
      <polygon points="52,2 55,7 52,12 49,7" fill="rgba(99,102,241,0.14)"/>
      <polygon points="6,46 10,53 6,60 2,53" fill="rgba(139,92,246,0.12)"/>
      <polygon points="56,42 60,49 56,56 52,49" fill="rgba(99,102,241,0.16)"/>
      <polygon points="32,0 35,5 32,10 29,5" fill="rgba(167,139,250,0.1)"/>
    </svg>
  );
}

function ChessPattern() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 64 64" preserveAspectRatio="xMidYMid slice">
      <rect x="0" y="0" width="8" height="8" fill="rgba(251,191,36,0.12)"/>
      <rect x="8" y="8" width="8" height="8" fill="rgba(251,191,36,0.08)"/>
      <rect x="16" y="0" width="8" height="8" fill="rgba(251,191,36,0.08)"/>
      <rect x="0" y="16" width="8" height="8" fill="rgba(251,191,36,0.08)"/>
      <rect x="48" y="48" width="8" height="8" fill="rgba(251,191,36,0.1)"/>
      <rect x="56" y="56" width="8" height="8" fill="rgba(251,191,36,0.08)"/>
      <rect x="40" y="56" width="8" height="8" fill="rgba(251,191,36,0.06)"/>
      <rect x="56" y="40" width="8" height="8" fill="rgba(251,191,36,0.06)"/>
    </svg>
  );
}

function FIFAPattern() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 64 64" preserveAspectRatio="xMidYMid slice">
      {/* Field center circle */}
      <circle cx="32" cy="32" r="20" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none"/>
      {/* Center spot */}
      <circle cx="32" cy="32" r="2" fill="rgba(255,255,255,0.1)"/>
      {/* Center line */}
      <line x1="0" y1="32" x2="64" y2="32" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
    </svg>
  );
}

// ─── Theme map ───────────────────────────────────────────────────────────────

interface GameTheme {
  gradient: string;
  glow: string;
  Icon: (props: { s: number }) => React.ReactElement;
  Pattern: () => React.ReactElement;
}

const THEMES: Record<string, GameTheme> = {
  "clash-royale": {
    gradient: "linear-gradient(135deg, #1e1b4b 0%, #3730a3 45%, #4c1d95 100%)",
    glow: "rgba(139,92,246,0.35)",
    Icon: ({ s }) => <ShieldSwordsIcon s={s} />,
    Pattern: ClashPattern,
  },
  chess: {
    gradient: "linear-gradient(135deg, #1c1917 0%, #3d3530 50%, #1c1917 100%)",
    glow: "rgba(251,191,36,0.3)",
    Icon: ({ s }) => <KingPieceIcon s={s} />,
    Pattern: ChessPattern,
  },
  fifa: {
    gradient: "linear-gradient(135deg, #052e16 0%, #15803d 55%, #064e3b 100%)",
    glow: "rgba(74,222,128,0.3)",
    Icon: ({ s }) => <SoccerBallIcon s={s} />,
    Pattern: FIFAPattern,
  },
};

const FALLBACK_THEME: GameTheme = {
  gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
  glow: "rgba(0,255,136,0.2)",
  Icon: ({ s }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="6" width="18" height="12" rx="2" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" fill="rgba(255,255,255,0.06)"/>
      <circle cx="8" cy="12" r="2" stroke="rgba(255,255,255,0.6)" strokeWidth="1" fill="none"/>
      <line x1="13" y1="10" x2="19" y2="10" stroke="rgba(255,255,255,0.5)" strokeWidth="1" strokeLinecap="round"/>
      <line x1="13" y1="14" x2="17" y2="14" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  ),
  Pattern: () => <></>,
};

// ─── Exported gradient data (for use in banners / backgrounds) ───────────────

export const GAME_GRADIENTS: Record<string, string> = {
  "clash-royale": "linear-gradient(135deg, #1e1b4b 0%, #3730a3 45%, #4c1d95 100%)",
  chess:          "linear-gradient(135deg, #1c1917 0%, #3d3530 50%, #1c1917 100%)",
  fifa:           "linear-gradient(135deg, #052e16 0%, #15803d 55%, #064e3b 100%)",
};

// ─── Component ───────────────────────────────────────────────────────────────

export function GameIcon({ gameId, size = "sm", className = "" }: GameIconProps) {
  const theme = THEMES[gameId] ?? FALLBACK_THEME;
  const iconSize = ICON_PX[size];

  return (
    <div
      className={`${SIZE_CLASSES[size]} relative overflow-hidden flex-shrink-0 ${className}`}
      style={{ background: theme.gradient, boxShadow: `0 4px 16px ${theme.glow}` }}
    >
      {/* Background pattern */}
      <theme.Pattern />

      {/* Radial highlight in top-left corner */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.08) 0%, transparent 65%)" }}
      />

      {/* Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <theme.Icon s={iconSize} />
      </div>
    </div>
  );
}
