"use client";

import { useEffect, useRef } from "react";

type Spark = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;       // 0–1, decreases each frame
  decay: number;
  r: number;
  color: string;
  trail: { x: number; y: number }[];
};

const SPARK_COLORS = [
  "rgba(0,255,136,",
  "rgba(0,255,136,",
  "rgba(0,255,136,",
  "rgba(80,255,160,",
  "rgba(139,92,246,",
];

function rand(a: number, b: number) { return Math.random() * (b - a) + a; }

function spawnSpark(w: number, h: number): Spark {
  const angle = rand(0, Math.PI * 2);
  const speed = rand(2, 5.5);
  return {
    x: rand(0, w),
    y: rand(0, h),
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    life: 1,
    decay: rand(0.012, 0.024),
    r: rand(1, 2.4),
    color: SPARK_COLORS[Math.floor(Math.random() * SPARK_COLORS.length)],
    trail: [],
  };
}

/* Lightning bolt via midpoint displacement */
function genBolt(
  x1: number, y1: number,
  x2: number, y2: number,
  roughness: number,
  depth: number,
): [number, number][] {
  if (depth === 0) return [[x1, y1], [x2, y2]];
  const mx = (x1 + x2) / 2 + rand(-roughness, roughness);
  const my = (y1 + y2) / 2 + rand(-roughness, roughness);
  const next = roughness * 0.55;
  return [
    ...genBolt(x1, y1, mx, my, next, depth - 1),
    ...genBolt(mx, my, x2, y2, next, depth - 1).slice(1),
  ];
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const sparks: Spark[] = [];
    const SPARK_COUNT = 90;

    function resize() {
      canvas!.width  = window.innerWidth;
      canvas!.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    // Seed initial sparks
    for (let i = 0; i < SPARK_COUNT; i++) {
      const s = spawnSpark(canvas.width, canvas.height);
      s.life = rand(0, 1); // stagger starting lives
      sparks.push(s);
    }

    // Lightning state
    let boltPoints: [number, number][] = [];
    let boltAlpha = 0;
    let nextBolt = Date.now() + rand(1800, 3500);

    function maybeSpawnBolt(now: number, w: number, h: number) {
      if (now < nextBolt) return;
      nextBolt = now + rand(1800, 3500);

      const edge = Math.floor(rand(0, 4)); // 0=top, 1=right, 2=bottom, 3=left
      let x1: number, y1: number, x2: number, y2: number;
      if (edge === 0)      { x1 = rand(0, w); y1 = 0;   x2 = rand(0, w); y2 = rand(h * 0.3, h * 0.7); }
      else if (edge === 1) { x1 = w;          y1 = rand(0, h); x2 = rand(w * 0.2, w * 0.7); y2 = rand(0, h); }
      else if (edge === 2) { x1 = rand(0, w); y1 = h;   x2 = rand(0, w); y2 = rand(h * 0.3, h * 0.7); }
      else                 { x1 = 0;          y1 = rand(0, h); x2 = rand(w * 0.3, w * 0.8); y2 = rand(0, h); }

      const roughness = rand(w * 0.04, w * 0.09);
      boltPoints = genBolt(x1, y1, x2, y2, roughness, 6);
      boltAlpha = 0.7;
    }

    function draw() {
      const w = canvas!.width;
      const h = canvas!.height;
      const now = Date.now();

      ctx!.clearRect(0, 0, w, h);

      // Radial spotlight at center
      const cx = w / 2, cy = h / 2;
      const spotlight = ctx!.createRadialGradient(cx, cy, 0, cx, cy, Math.min(w, h) * 0.55);
      spotlight.addColorStop(0, "rgba(0,255,136,0.045)");
      spotlight.addColorStop(0.5, "rgba(0,80,40,0.02)");
      spotlight.addColorStop(1, "transparent");
      ctx!.fillStyle = spotlight;
      ctx!.fillRect(0, 0, w, h);

      // Lightning bolt
      maybeSpawnBolt(now, w, h);
      if (boltAlpha > 0 && boltPoints.length > 1) {
        ctx!.save();
        ctx!.globalAlpha = boltAlpha;
        ctx!.strokeStyle = `rgba(0,255,136,${boltAlpha.toFixed(3)})`;
        ctx!.lineWidth = 1.5;
        ctx!.shadowColor = "#00ff88";
        ctx!.shadowBlur = 10;
        ctx!.beginPath();
        ctx!.moveTo(boltPoints[0][0], boltPoints[0][1]);
        for (let i = 1; i < boltPoints.length; i++) {
          ctx!.lineTo(boltPoints[i][0], boltPoints[i][1]);
        }
        ctx!.stroke();
        ctx!.restore();
        boltAlpha -= 0.018;
        if (boltAlpha < 0) boltAlpha = 0;
      }

      // Sparks + trails
      for (let i = 0; i < sparks.length; i++) {
        const p = sparks[i];

        // Record trail
        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > 10) p.trail.shift();

        // Move
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;

        // Respawn
        if (p.life <= 0) {
          sparks[i] = spawnSpark(w, h);
          continue;
        }

        const alpha = p.life * 0.9;

        // Draw trail
        if (p.trail.length > 1) {
          ctx!.beginPath();
          ctx!.moveTo(p.trail[0].x, p.trail[0].y);
          for (let t = 1; t < p.trail.length; t++) {
            ctx!.lineTo(p.trail[t].x, p.trail[t].y);
          }
          ctx!.strokeStyle = `${p.color}${(alpha * 0.4).toFixed(3)})`;
          ctx!.lineWidth = p.r * 0.6;
          ctx!.stroke();
        }

        // Draw dot
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `${p.color}${alpha.toFixed(3)})`;
        ctx!.fill();

        // Soft glow
        const grad = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
        grad.addColorStop(0, `${p.color}${(alpha * 0.3).toFixed(3)})`);
        grad.addColorStop(1, `${p.color}0)`);
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2);
        ctx!.fillStyle = grad;
        ctx!.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
