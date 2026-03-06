"use client";
import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 2800;
const COLORS = ["#c8e0ff", "#9b59d4", "#ffffff", "#bffd11", "#b8f0e0", "#e090ff"];

interface Particle {
  x: number;
  y: number;
  r: number;
  color: string;
  speed: number;
  offset: number;
}

export function GlitterCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Generate stable particle array once on mount
    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.4 + 0.4,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      speed: Math.random() * 1.2 + 0.4,
      offset: Math.random() * Math.PI * 2,
    }));

    const resize = () => {
      const dpr = devicePixelRatio || 1;
      const w = canvas.offsetWidth * dpr;
      const h = canvas.offsetHeight * dpr;
      if (canvas.width !== Math.round(w) || canvas.height !== Math.round(h)) {
        canvas.width = Math.round(w);
        canvas.height = Math.round(h);
      }
    };
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    const startTime = performance.now();
    let raf: number;

    const draw = () => {
      const t = (performance.now() - startTime) / 1000;
      const dpr = devicePixelRatio || 1;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        const opacity = (Math.sin(t * p.speed + p.offset) * 0.5 + 0.5) * 0.65;
        ctx.globalAlpha = opacity;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

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
        borderRadius: "inherit",
        pointerEvents: "none",
        mixBlendMode: "screen",
      }}
    />
  );
}
