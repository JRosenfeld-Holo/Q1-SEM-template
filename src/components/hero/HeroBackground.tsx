"use client";
import { useEffect, useRef } from "react";

// ── Ambient shimmer config ─────────────────────────────────────────────────────
const AMBIENT_COUNT = 800;
const AMBIENT_COLORS = ["#c8e0ff", "#9b59d4", "#ffffff", "#bffd11", "#b8f0e0"];

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

    let raf: number;
    const startT = performance.now();
    let prevT = performance.now();

    const draw = () => {
      const now = performance.now();
      prevT = now;
      const elapsed = (now - startT) / 1000;

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
