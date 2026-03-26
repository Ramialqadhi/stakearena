import { NextRequest, NextResponse } from "next/server";
import { normalizeTag } from "@/lib/clashroyale";

const CR_API = "https://proxy.royaleapi.dev/v1";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const tag1 = searchParams.get("tag1");
  const tag2 = searchParams.get("tag2");

  if (!tag1) {
    return NextResponse.json(
      { error: "Provide ?tag1=ABC123 and optionally ?tag2=DEF456" },
      { status: 400 }
    );
  }

  const apiKey = process.env.CLASH_ROYALE_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "CLASH_ROYALE_API_KEY not set" }, { status: 500 });
  }

  const p1 = normalizeTag(tag1);
  const p1Encoded = encodeURIComponent(p1);
  const url = `${CR_API}/players/${p1Encoded}/battlelog`;

  let status: number;
  let body: unknown;
  try {
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${apiKey}` },
      cache: "no-store",
    });
    status = res.status;
    body = await res.json();
  } catch (err) {
    return NextResponse.json({ error: String(err), p1, url }, { status: 500 });
  }

  // If tag2 provided, filter battles that involve tag2
  const p2 = tag2 ? normalizeTag(tag2) : null;
  const battles = Array.isArray(body) ? body : (body as Record<string, unknown>).items ?? body;

  if (p2 && Array.isArray(battles)) {
    const filtered = (battles as Array<Record<string, unknown>>).filter((b) => {
      const team = b.team as Array<Record<string, unknown>> | undefined;
      const opp  = b.opponent as Array<Record<string, unknown>> | undefined;
      const tags = [
        ...(team ?? []).map((p) => normalizeTag((p.tag as string) ?? "")),
        ...(opp  ?? []).map((p) => normalizeTag((p.tag as string) ?? "")),
      ];
      return tags.includes(p2);
    });
    return NextResponse.json({ p1, p2, url, crStatus: status, matchingBattles: filtered, allBattleCount: (battles as unknown[]).length });
  }

  return NextResponse.json({ p1, url, crStatus: status, battles: body });
}
