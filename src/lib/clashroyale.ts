const CR_API = "https://api.clashroyale.com/v1";

/** Normalize a player tag: always uppercase, always starts with # */
export function normalizeTag(tag: string): string {
  const t = tag.trim().toUpperCase();
  return t.startsWith("#") ? t : `#${t}`;
}

/** URL-encode a player tag for the CR API path ("#" → "%23") */
function encodeTag(tag: string): string {
  return encodeURIComponent(normalizeTag(tag));
}

/**
 * Parse CR battle timestamps: "20230101T120000.000Z" → Date
 * The CR API omits the dashes/colons that new Date() requires.
 */
function parseCRTime(t: string): Date {
  const m = t.match(/^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})\.(\d+)Z$/);
  if (!m) return new Date(0);
  return new Date(`${m[1]}-${m[2]}-${m[3]}T${m[4]}:${m[5]}:${m[6]}.${m[7]}Z`);
}

export interface BattleResult {
  winnerTag: string; // normalized (#UPPERCASE)
  loserTag:  string;
}

/**
 * Searches playerTag1's battlelog for a 1v1 match against playerTag2
 * that occurred strictly AFTER `afterTimestamp`.
 * Returns the winner/loser tags (normalized), or null if not found.
 */
export async function findBattleResult(
  playerTag1: string,
  playerTag2: string,
  afterTimestamp: Date,
): Promise<BattleResult | null> {
  const apiKey = process.env.CLASH_ROYALE_API_KEY;
  if (!apiKey) return null;

  const p1 = normalizeTag(playerTag1);
  const p2 = normalizeTag(playerTag2);

  let battles: unknown[];
  try {
    const res = await fetch(`${CR_API}/players/${encodeTag(p1)}/battlelog`, {
      headers: { Authorization: `Bearer ${apiKey}` },
      // Never cache — we always want fresh data
      cache: "no-store",
    });
    if (!res.ok) return null;
    const body = await res.json();
    battles = Array.isArray(body) ? body : (body.items ?? []);
  } catch {
    return null;
  }

  for (const raw of battles) {
    const battle = raw as Record<string, unknown>;

    // Must have occurred after the match started
    const battleTime = parseCRTime((battle.battleTime as string) ?? "");
    if (battleTime <= afterTimestamp) continue;

    const team     = battle.team     as Array<Record<string, unknown>> | undefined;
    const opponent = battle.opponent as Array<Record<string, unknown>> | undefined;

    // Must be a 1v1
    if (!team?.length || !opponent?.length) continue;
    if (team.length !== 1 || opponent.length !== 1) continue;

    const teamTag = normalizeTag((team[0].tag as string) ?? "");
    const oppTag  = normalizeTag((opponent[0].tag as string) ?? "");

    // Must be between our two players
    const isMatch =
      (teamTag === p1 && oppTag === p2) ||
      (teamTag === p2 && oppTag === p1);
    if (!isMatch) continue;

    const teamCrowns = (team[0].crowns as number) ?? 0;
    const oppCrowns  = (opponent[0].crowns as number) ?? 0;

    if (teamCrowns === oppCrowns) continue; // draw — keep polling

    const winnerTag = teamCrowns > oppCrowns ? teamTag : oppTag;
    const loserTag  = teamCrowns > oppCrowns ? oppTag  : teamTag;
    return { winnerTag, loserTag };
  }

  return null;
}
