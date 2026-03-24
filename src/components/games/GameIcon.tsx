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
