/** Match duration (ms) once both players click Ready, per game. */
export const GAME_TTL_MS: Record<string, number> = {
  "clash-royale": 45 * 60 * 1000,  // 45 minutes
};

export const DEFAULT_TTL_MS = 45 * 60 * 1000; // 45-minute fallback

export const READY_DEADLINE_MS = 60 * 60 * 1000;   // 1 hour to click Ready

export function getGameTTL(game: string): number {
  return GAME_TTL_MS[game] ?? DEFAULT_TTL_MS;
}

export function getGameTTLLabel(game: string): string {
  const ms = getGameTTL(game);
  const h  = Math.floor(ms / 3_600_000);
  const m  = Math.floor((ms % 3_600_000) / 60_000);
  if (h > 0 && m > 0) return `${h}h ${m}m`;
  if (h > 0)           return `${h} hour${h !== 1 ? "s" : ""}`;
  return `${m} minutes`;
}
