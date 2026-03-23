"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { ChevronDown, X, CheckCircle, Loader2, Users, Gamepad2 } from "lucide-react";

/* ─── constants ─────────────────────────────────────────────────── */
const STAKE  = 25;
const PAYOUT = +(STAKE * 2 * 0.9).toFixed(2);
const ORB    = 240; // px

const GAMES = [
  { id: "clash-royale", name: "Clash Royale", emoji: "⚔️" },
  { id: "chess",        name: "Chess",        emoji: "♟️" },
  { id: "fifa",         name: "FIFA",         emoji: "⚽" },
] as const;

type GameId  = typeof GAMES[number]["id"];
type Phase   = "idle" | "searching" | "matched" | "expired";
type Counts  = Record<string, Record<string, number>>;

function fmt(iso: string): string {
  const left = Math.max(0, new Date(iso).getTime() - Date.now());
  const m = Math.floor(left / 60_000);
  const s = Math.floor((left % 60_000) / 1_000);
  return `${m}:${String(s).padStart(2, "0")}`;
}

/* ─── particle canvas ───────────────────────────────────────────── */
function Canvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    const W = () => canvas.width;
    const H = () => canvas.height;

    function resize() {
      canvas!.width  = window.innerWidth;
      canvas!.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    type P = { x: number; y: number; vx: number; vy: number; life: number; decay: number; r: number; hue: number; trail: [number,number][] };
    const rand = (a: number, b: number) => Math.random() * (b - a) + a;
    const COLS = ["0,255,136", "0,255,136", "0,200,100", "139,92,246"];

    function spawn(): P {
      const a = rand(0, Math.PI * 2);
      const spd = rand(1.5, 4.5);
      return { x: rand(0, W()), y: rand(0, H()), vx: Math.cos(a)*spd, vy: Math.sin(a)*spd,
               life: rand(0.3, 1), decay: rand(0.01, 0.022), r: rand(1, 2.2),
               hue: Math.floor(rand(0, COLS.length)), trail: [] };
    }

    const particles: P[] = Array.from({ length: 80 }, () => { const p = spawn(); p.life = rand(0,1); return p; });

    // lightning
    let bolt: [number,number][] = [];
    let boltA = 0;
    let nextBolt = Date.now() + rand(2000, 4000);

    function genBolt(x1: number, y1: number, x2: number, y2: number, rough: number, d: number): [number,number][] {
      if (d === 0) return [[x1,y1],[x2,y2]];
      const mx = (x1+x2)/2 + rand(-rough,rough);
      const my = (y1+y2)/2 + rand(-rough,rough);
      const r2 = rough * 0.55;
      return [...genBolt(x1,y1,mx,my,r2,d-1), ...genBolt(mx,my,x2,y2,r2,d-1).slice(1)];
    }

    function tick() {
      const w = W(), h = H(), now = Date.now();
      ctx!.clearRect(0, 0, w, h);

      // center glow
      const cg = ctx!.createRadialGradient(w/2, h/2, 0, w/2, h/2, Math.min(w,h)*0.5);
      cg.addColorStop(0, "rgba(0,255,136,0.04)");
      cg.addColorStop(1, "transparent");
      ctx!.fillStyle = cg; ctx!.fillRect(0,0,w,h);

      // bolt
      if (now > nextBolt) {
        nextBolt = now + rand(2000, 4500);
        const x1 = rand(0,w), y1 = 0;
        const x2 = rand(0,w), y2 = rand(h*0.3, h*0.8);
        bolt = genBolt(x1,y1,x2,y2,rand(w*0.04,w*0.09),6);
        boltA = 0.65;
      }
      if (boltA > 0 && bolt.length > 1) {
        ctx!.save();
        ctx!.globalAlpha = boltA;
        ctx!.strokeStyle = `rgba(0,255,136,${boltA.toFixed(2)})`;
        ctx!.lineWidth = 1.5; ctx!.shadowBlur = 12; ctx!.shadowColor = "#00ff88";
        ctx!.beginPath(); ctx!.moveTo(bolt[0][0], bolt[0][1]);
        for (let i = 1; i < bolt.length; i++) ctx!.lineTo(bolt[i][0], bolt[i][1]);
        ctx!.stroke(); ctx!.restore();
        boltA -= 0.015;
      }

      // sparks
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.trail.push([p.x, p.y]);
        if (p.trail.length > 10) p.trail.shift();
        p.x += p.vx; p.y += p.vy; p.life -= p.decay;
        if (p.life <= 0) { particles[i] = spawn(); continue; }
        const col = COLS[p.hue], a = p.life * 0.85;
        if (p.trail.length > 1) {
          ctx!.beginPath();
          ctx!.moveTo(p.trail[0][0], p.trail[0][1]);
          for (let t = 1; t < p.trail.length; t++) ctx!.lineTo(p.trail[t][0], p.trail[t][1]);
          ctx!.strokeStyle = `rgba(${col},${(a*0.35).toFixed(3)})`; ctx!.lineWidth = p.r*0.6; ctx!.stroke();
        }
        ctx!.beginPath(); ctx!.arc(p.x, p.y, p.r, 0, Math.PI*2);
        ctx!.fillStyle = `rgba(${col},${a.toFixed(3)})`; ctx!.fill();
        const gr = ctx!.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r*5);
        gr.addColorStop(0, `rgba(${col},${(a*0.28).toFixed(3)})`);
        gr.addColorStop(1, `rgba(${col},0)`);
        ctx!.beginPath(); ctx!.arc(p.x,p.y,p.r*5,0,Math.PI*2);
        ctx!.fillStyle = gr; ctx!.fill();
      }
      raf = requestAnimationFrame(tick);
    }
    tick();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }}
    />
  );
}

/* ─── dropdown ──────────────────────────────────────────────────── */
function GameDropdown({ value, onChange, disabled }: { value: GameId; onChange: (v: GameId) => void; disabled: boolean }) {
  const [open, setOpen] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const sel = GAMES.find(g => g.id === value) ?? GAMES[0];

  return (
    <div ref={divRef} style={{ position: "relative", width: "260px" }}>
      <button
        type="button"
        onClick={() => { if (!disabled) setOpen(o => !o); }}
        disabled={disabled}
        style={{
          width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: "12px", padding: "12px 20px", borderRadius: "16px",
          background: "rgba(12,12,20,0.9)", backdropFilter: "blur(14px)",
          border: open ? "1px solid rgba(0,255,136,0.55)" : "1px solid rgba(0,255,136,0.28)",
          color: "#f0f0f5", fontSize: "14px", fontWeight: 700, cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.4 : 1,
          boxShadow: open ? "0 0 0 1px rgba(0,255,136,0.15), 0 0 18px rgba(0,255,136,0.1)" : "none",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "16px" }}>{sel.emoji}</span>
          <span>{sel.name}</span>
        </span>
        <span style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          width: "20px", height: "20px", borderRadius: "6px",
          background: "rgba(0,255,136,0.1)",
          transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s",
        }}>
          <ChevronDown size={14} color="#00ff88" />
        </span>
      </button>

      {open && (
        <div style={{
          position: "absolute", bottom: "calc(100% + 8px)", left: 0, right: 0,
          borderRadius: "16px", overflow: "hidden", zIndex: 100,
          background: "rgba(8,8,18,0.97)", backdropFilter: "blur(20px)",
          border: "1px solid rgba(0,255,136,0.22)",
          boxShadow: "0 -8px 40px rgba(0,0,0,0.7)",
        }}>
          {GAMES.map(g => (
            <button
              key={g.id}
              type="button"
              onClick={() => { onChange(g.id as GameId); setOpen(false); }}
              style={{
                width: "100%", display: "flex", alignItems: "center", gap: "12px",
                padding: "12px 20px", background: g.id === value ? "rgba(0,255,136,0.1)" : "transparent",
                color: g.id === value ? "#00ff88" : "#c8c8d8",
                fontSize: "14px", fontWeight: 600, cursor: "pointer", border: "none", textAlign: "left",
              }}
            >
              <span style={{ fontSize: "16px" }}>{g.emoji}</span>
              <span>{g.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── main page ─────────────────────────────────────────────────── */
export default function QuickMatchPage() {
  const { data: session, update } = useSession();
  const router = useRouter();

  const [game,      setGame]      = useState<GameId>("clash-royale");
  const [phase,     setPhase]     = useState<Phase>("idle");
  const [counts,    setCounts]    = useState<Counts>({});
  const [expiry,    setExpiry]    = useState<string | null>(null);
  const [countdown, setCountdown] = useState("");
  const [matchedId, setMatchedId] = useState<string | null>(null);
  const [joining,   setJoining]   = useState(false);
  const [error,     setError]     = useState("");
  const [credGate,  setCredGate]  = useState(false);

  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* queue counts */
  const fetchCounts = useCallback(async () => {
    try {
      const d = await fetch("/api/matchmaking/counts").then(r => r.json());
      setCounts(d.counts ?? {});
    } catch { /**/ }
  }, []);

  useEffect(() => {
    fetchCounts();
    const id = setInterval(fetchCounts, 15_000);
    return () => clearInterval(id);
  }, [fetchCounts]);

  /* countdown */
  useEffect(() => {
    if (phase !== "searching" || !expiry) return;
    setCountdown(fmt(expiry));
    const id = setInterval(() => setCountdown(fmt(expiry)), 500);
    return () => clearInterval(id);
  }, [phase, expiry]);

  /* poll for match */
  const pollStatus = useCallback(async () => {
    try {
      const d = await fetch("/api/matchmaking/status").then(r => r.json());
      if (d.status === "matched" && d.challengeId) {
        if (pollRef.current) clearInterval(pollRef.current);
        setMatchedId(d.challengeId);
        setPhase("matched");
        await update({});
        setTimeout(() => router.push(`/challenges/${d.challengeId}`), 1600);
      } else if (d.status === "expired") {
        if (pollRef.current) clearInterval(pollRef.current);
        await update({});
        setPhase("expired");
      } else if (d.status === "idle") {
        if (pollRef.current) clearInterval(pollRef.current);
        setPhase("idle");
      }
    } catch { /**/ }
  }, [update, router]);

  useEffect(() => {
    if (phase !== "searching") return;
    pollRef.current = setInterval(pollStatus, 3000);
    return () => { if (pollRef.current) clearInterval(pollRef.current); };
  }, [phase, pollStatus]);

  /* restore queue state on mount */
  useEffect(() => {
    if (!session?.user) return;
    fetch("/api/matchmaking/status").then(r => r.json()).then(d => {
      if (d.status === "waiting") {
        if (d.game) setGame(d.game as GameId);
        setExpiry(d.expiresAt);
        setPhase("searching");
      }
    }).catch(() => {});
  }, [session?.user]);

  async function joinQueue() {
    setError(""); setCredGate(false); setJoining(true);
    try {
      const res  = await fetch("/api/matchmaking/join", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ game, stakeAmount: STAKE }),
      });
      const data = await res.json();
      if (!res.ok) {
        if (data.credentialGate) { setCredGate(true); return; }
        setError(data.error || "Failed to join queue.");
        return;
      }
      await update({});
      if (data.matched) {
        setMatchedId(data.challengeId); setPhase("matched");
        setTimeout(() => router.push(`/challenges/${data.challengeId}`), 1600);
      } else {
        setExpiry(data.expiresAt); setPhase("searching");
      }
    } catch { setError("Something went wrong."); }
    finally { setJoining(false); }
  }

  async function leaveQueue() {
    try { await fetch("/api/matchmaking/leave", { method: "POST" }); await update({}); fetchCounts(); } catch { /**/ }
    setPhase("idle"); setExpiry(null); setError(""); setCredGate(false);
  }

  const isSearching = phase === "searching";
  const isMatched   = phase === "matched";
  const queueCount  = counts[game]?.[String(STAKE)] ?? 0;
  const gameName    = GAMES.find(g => g.id === game)?.name ?? game;

  const orbAnimClass = isMatched ? "orb-matched" : isSearching ? "orb-breathe" : "orb-idle-glow";

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100svh", background: "#0a0a0f", overflow: "hidden" }}>
      <Navbar />

      {/* canvas + content share a positioned container */}
      <div style={{ position: "relative", flex: 1, minHeight: 0, display: "flex", flexDirection: "column", alignItems: "center" }}>

        {/* particle canvas — absolute behind everything */}
        <Canvas />

        {/* radial glow — above canvas, still behind content */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }} aria-hidden>
          <div style={{
            position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
            width: 700, height: 700, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,255,136,0.07) 0%, transparent 60%)",
          }} />
          <div style={{
            position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
            width: 380, height: 380, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 55%)",
          }} />
        </div>

        {/* ── all visible content above canvas ── */}
        <div style={{
          position: "relative", zIndex: 2, flex: 1, minHeight: 0,
          display: "flex", flexDirection: "column", alignItems: "center", width: "100%",
        }}>

          {/* title */}
          <div style={{ textAlign: "center", paddingTop: 24, paddingBottom: 4, flexShrink: 0 }}>
            <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.4rem)", fontWeight: 900, color: "#f0f0f5", letterSpacing: "-0.02em", margin: 0 }}>
              ⚡ Quick Match
            </h1>
            <p style={{ fontSize: 11, color: "#4b5563", marginTop: 4, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              stake $25 · instant · winner takes $45
            </p>
          </div>

          {/* orb zone — flex 1, centers the orb */}
          <div style={{ flex: 1, minHeight: 0, display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
            <div style={{ position: "relative", width: ORB + 140, height: ORB + 140, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>

              {/* ping rings */}
              {!isMatched && (isSearching
                ? [0,1,2,3].map(i => (
                  <div key={i} className="search-ping" style={{
                    position: "absolute", width: ORB, height: ORB, borderRadius: "50%",
                    border: "1px solid #00ff88", pointerEvents: "none",
                    animationDelay: `${i * 0.55}s`,
                  }} />
                ))
                : <div className="idle-ping" style={{
                    position: "absolute", width: ORB, height: ORB, borderRadius: "50%",
                    border: "1px solid rgba(0,255,136,0.5)", pointerEvents: "none",
                  }} />
              )}

              {/* rotating dashed ring */}
              {!isMatched && (
                <div className={isSearching ? "ring-spin-fast" : "ring-spin-slow"} style={{
                  position: "absolute", width: ORB + 44, height: ORB + 44, borderRadius: "50%",
                  border: `2px dashed ${isSearching ? "rgba(0,255,136,0.5)" : "rgba(0,255,136,0.28)"}`,
                  pointerEvents: "none",
                }} />
              )}

              {/* matched pulse ring */}
              {isMatched && (
                <div className="orb-matched" style={{
                  position: "absolute", width: ORB + 44, height: ORB + 44, borderRadius: "50%",
                  border: "2px solid #00ff88", pointerEvents: "none",
                }} />
              )}

              {/* rotating conic arc — gives the ring an "alive" energy sweep */}
              <div
                className={isSearching ? "ring-spin-fast" : "ring-spin-slow"}
                style={{
                  position: "absolute",
                  width: ORB + 6, height: ORB + 6,
                  borderRadius: "50%",
                  background: "conic-gradient(from 0deg, transparent 55%, rgba(0,255,136,0.55) 72%, rgba(0,255,136,0.95) 80%, rgba(0,255,136,0.55) 88%, transparent 100%)",
                  filter: "blur(7px)",
                  pointerEvents: "none",
                  opacity: isSearching ? 1 : 0.65,
                }}
              />

              {/* orb button — transparent, ring only */}
              <button
                onClick={() => {
                  if (isSearching || isMatched || joining) return;
                  if (!session?.user) { router.push("/login"); return; }
                  joinQueue();
                }}
                disabled={isSearching || isMatched || joining}
                className={orbAnimClass}
                style={{
                  position: "relative", zIndex: 1,
                  width: ORB, height: ORB, borderRadius: "50%",
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4,
                  background: "transparent",
                  border: `3px solid ${isMatched ? "#00ff88" : isSearching ? "#00ff88" : "#00ff88"}`,
                  cursor: (isSearching || isMatched || joining) ? "default" : "pointer",
                  userSelect: "none",
                  transition: "border-color 0.4s",
                }}
              >
                {isMatched ? (
                  <>
                    <CheckCircle size={52} color="#00ff88" />
                    <span style={{ fontSize: 12, fontWeight: 900, color: "#00ff88", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 4 }}>Match Found!</span>
                  </>
                ) : isSearching ? (
                  <>
                    <span style={{ fontSize: 18, fontWeight: 900, color: "#00ff88", letterSpacing: "0.12em", textTransform: "uppercase" }}>Searching</span>
                    <Loader2 size={26} color="#00ff88" style={{ marginTop: 4, animation: "spin 1s linear infinite" }} />
                  </>
                ) : (
                  <>
                    <span style={{ fontSize: "clamp(1.3rem,3.5vw,1.9rem)", fontWeight: 900, color: "#00ff88", letterSpacing: "0.1em", textTransform: "uppercase", lineHeight: 1 }}>FIND</span>
                    <span style={{ fontSize: "clamp(1.3rem,3.5vw,1.9rem)", fontWeight: 900, color: "#00ff88", letterSpacing: "0.1em", textTransform: "uppercase", lineHeight: 1 }}>MATCH</span>
                    <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(0,255,136,0.5)", letterSpacing: "0.14em", textTransform: "uppercase", marginTop: 8 }}>$25 stake</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* ── bottom section ── */}
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 12, width: "100%", maxWidth: 320, paddingBottom: 24, paddingLeft: 16, paddingRight: 16 }}>

            {/* credential gate */}
            {credGate && (
              <div style={{
                width: "100%", padding: "14px 16px", borderRadius: 16,
                background: "rgba(8,8,16,0.92)", border: "1px solid rgba(139,92,246,0.4)",
                display: "flex", flexDirection: "column", gap: 10,
              }}>
                <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                  <Gamepad2 size={16} color="#8b5cf6" style={{ flexShrink: 0, marginTop: 1 }} />
                  <p style={{ fontSize: 12, color: "#a1a1aa", margin: 0, lineHeight: 1.5 }}>
                    Add your <strong style={{ color: "#f0f0f5" }}>{gameName}</strong> credentials in your profile before playing.
                  </p>
                </div>
                <Link href="/profile" style={{
                  display: "block", textAlign: "center", padding: "8px 0", borderRadius: 12,
                  background: "#8b5cf6", color: "#fff", fontSize: 12, fontWeight: 700,
                  letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none",
                }}>
                  Profile → Game Profiles
                </Link>
              </div>
            )}

            {/* generic error */}
            {error && (
              <p style={{ fontSize: 12, color: "#ef4444", textAlign: "center", margin: 0 }}>{error}</p>
            )}

            {/* game dropdown */}
            <GameDropdown
              value={game}
              onChange={(v) => { setGame(v); setCredGate(false); setError(""); }}
              disabled={isSearching || isMatched}
            />

            {/* cancel when searching */}
            {isSearching && (
              <button onClick={leaveQueue} style={{
                display: "flex", alignItems: "center", gap: 8, padding: "10px 20px", borderRadius: 12,
                border: "1px solid rgba(239,68,68,0.35)", background: "rgba(239,68,68,0.06)",
                color: "#ef4444", fontSize: 13, fontWeight: 700, cursor: "pointer",
              }}>
                <X size={15} /> Cancel &amp; Refund
              </button>
            )}

            {/* matched link */}
            {isMatched && matchedId && (
              <Link href={`/challenges/${matchedId}`} style={{ fontSize: 13, color: "#00ff88", fontWeight: 700, textDecoration: "none" }}>
                Go to match →
              </Link>
            )}

            {/* expired */}
            {phase === "expired" && (
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: 13, color: "#6b7280", margin: "0 0 8px" }}>No match found — stake refunded.</p>
                <button onClick={() => setPhase("idle")} style={{ fontSize: 13, color: "#00ff88", background: "none", border: "none", cursor: "pointer", fontWeight: 700 }}>
                  Try again
                </button>
              </div>
            )}

            {/* info bar */}
            {(phase === "idle" || phase === "searching") && (
              <div style={{
                display: "flex", alignItems: "center", gap: 16, padding: "8px 20px", borderRadius: 16,
                background: "rgba(8,8,16,0.75)", border: "1px solid rgba(255,255,255,0.06)",
                backdropFilter: "blur(10px)", fontSize: 13, color: "#6b7280",
              }}>
                <span>Winner takes <strong style={{ color: "#00ff88" }}>${PAYOUT}</strong></span>
                <span style={{ width: 1, height: 16, background: "#2a2a3a" }} />
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <Users size={14} color="#00ff88" />
                  <strong style={{ color: "#f0f0f5" }}>{isSearching ? queueCount + 1 : queueCount}</strong> in queue
                </span>
                {isSearching && expiry && (
                  <>
                    <span style={{ width: 1, height: 16, background: "#2a2a3a" }} />
                    <span style={{ fontFamily: "monospace", color: "#8b5cf6", fontWeight: 700, fontSize: 12 }}>{countdown}</span>
                  </>
                )}
              </div>
            )}

            {/* sign in prompt */}
            {!session?.user && phase === "idle" && (
              <p style={{ fontSize: 12, color: "#6b7280", textAlign: "center", margin: 0 }}>
                <Link href="/login" style={{ color: "#00ff88", fontWeight: 700, textDecoration: "none" }}>Sign in</Link>
                {" "}to play for real stakes
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
