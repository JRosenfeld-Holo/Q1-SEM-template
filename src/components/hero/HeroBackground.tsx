"use client";
import { useEffect, useRef } from "react";

// ── Burst config ───────────────────────────────────────────────────────────────
const BURST_COUNT = 120;
const LIME = "#bffd11";
const WHITE = "#ffffff";

// ── Ambient shimmer config ─────────────────────────────────────────────────────
const AMBIENT_COUNT = 800;
const AMBIENT_COLORS = ["#c8e0ff", "#9b59d4", "#ffffff", "#bffd11", "#b8f0e0"];

interface BurstParticle {
  x: number; y: number;
  vx: number; vy: number;
  life: number; decay: number;
  r: number; lime: boolean;
}

interface AmbientParticle {
  x: number; y: number;
  r: number; color: string;
  speed: number; offset: number;
}

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let w = canvas.offsetWidth;
    let h = canvas.offsetHeight;

    const resize = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w;
      canvas.height = h;
    };
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    // Pre-generate ambient particles — biased toward the right half where the card is
    const ambient: AmbientParticle[] = Array.from({ length: AMBIENT_COUNT }, () => {
      // Weighted x: 60% of particles in the right half (card area)
      const x = Math.random() < 0.6
        ? 0.45 + Math.random() * 0.55
        : Math.random() * 0.45;
      return {
        x,
        y: Math.random(),
        r: Math.random() * 1.3 + 0.3,
        color: AMBIENT_COLORS[Math.floor(Math.random() * AMBIENT_COLORS.length)],
        speed: Math.random() * 1.0 + 0.3,
        offset: Math.random() * Math.PI * 2,
      };
    });

    let burst: BurstParticle[] = [];
    let burstFired = false;
    let flashOpacity = 0;
    let prevT = performance.now();
    let raf: number;
    const startT = performance.now();

    const fireBurst = () => {
      const ox = w > 1024 ? w * 0.68 : w * 0.5;
      const oy = h * 0.5;
      flashOpacity = 0.32;
      for (let i = 0; i < BURST_COUNT; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() < 0.3
          ? Math.random() * 1.5 + 0.3
          : Math.random() * 5.0 + 1.5;
        burst.push({
          x: ox, y: oy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          decay: 1 / (Math.random() * 2.8 + 1.0),
          r: Math.random() * 1.6 + 0.3,
          lime: Math.random() < 0.22,
        });
      }
    };

    const draw = () => {
      const now = performance.now();
      const dt = Math.min((now - prevT) / 1000, 0.05);
      prevT = now;
      const elapsed = (now - startT) / 1000;

      if (!burstFired && elapsed >= 1.5) {
        fireBurst();
        burstFired = true;
      }

      ctx.clearRect(0, 0, w, h);

      // ── Ambient shimmer (always on) ──────────────────────────────────────────
      for (const p of ambient) {
        const opacity = (Math.sin(elapsed * p.speed + p.offset) * 0.5 + 0.5) * 0.22;
        ctx.globalAlpha = opacity;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // ── Burst flash ─────────────────────────────────────────────────────────
      if (flashOpacity > 0) {
        const ox = w > 1024 ? w * 0.68 : w * 0.5;
        const oy = h * 0.5;
        const grad = ctx.createRadialGradient(ox, oy, 0, ox, oy, w * 0.4);
        grad.addColorStop(0, `rgba(191,253,17,${flashOpacity * 0.18})`);
        grad.addColorStop(0.3, `rgba(255,255,255,${flashOpacity * 0.1})`);
        grad.addColorStop(1, "transparent");
        ctx.globalAlpha = 1;
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
        flashOpacity = Math.max(0, flashOpacity - dt * 1.6);
      }

      // ── Burst particles ──────────────────────────────────────────────────────
      for (let i = burst.length - 1; i >= 0; i--) {
        const p = burst[i];
        const friction = Math.pow(0.96, dt * 60);
        p.vx *= friction;
        p.vy *= friction;
        p.x += p.vx * dt * 60;
        p.y += p.vy * dt * 60;
        p.life -= p.decay * dt;
        if (p.life <= 0) { burst.splice(i, 1); continue; }
        const alpha = Math.pow(Math.max(0, p.life), 1.5) * (p.lime ? 0.85 : 0.4);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = p.lime ? LIME : WHITE;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 5,
        mixBlendMode: "screen",
      }}
    />
  );
}
