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

    // Reduce particles on mobile for smoother scrolling
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 200 : AMBIENT_COUNT;
    const targetFps = isMobile ? 30 : 60;
    const frameInterval = 1000 / targetFps;

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
    const ambient: AmbientParticle[] = Array.from({ length: particleCount }, () => {
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
    let lastFrameT = 0;
    let isVisible = true;

    // Pause animation when hero scrolls off-screen
    const observer = new IntersectionObserver(
      ([entry]) => { isVisible = entry.isIntersecting; },
      { threshold: 0 }
    );
    observer.observe(canvas);

    const draw = (now: number) => {
      raf = requestAnimationFrame(draw);

      // Skip frame if hero is off-screen or we're throttling
      if (!isVisible) return;
      if (now - lastFrameT < frameInterval) return;
      lastFrameT = now;

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
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      observer.disconnect();
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
