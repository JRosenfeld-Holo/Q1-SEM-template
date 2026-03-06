"use client";
import { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function SIMCardScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(mouseY, { stiffness: 35, damping: 22 });
  const rotateY = useSpring(mouseX, { stiffness: 35, damping: 22 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 16);
      mouseY.set(-((e.clientY - rect.top) / rect.height - 0.5) * 10);
    };
    const onLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      style={{ perspective: "900px" }}
      className="w-full h-full flex items-center justify-center relative"
    >
      {/* Outer div: cinematic entrance animation */}
      <motion.div
        initial={{ rotateY: 72, rotateX: -18, rotateZ: 8, scale: 1.45, opacity: 0 }}
        animate={{ rotateY: -14, rotateX: 6, rotateZ: -3, scale: 1, opacity: 1 }}
        transition={{ duration: 1.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Inner div: ongoing mouse parallax */}
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
            position: "relative",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/textures/sim-card-front.png"
            alt="Hologram HyperSIM card"
            draggable={false}
            style={{
              width: "100%",
              maxWidth: "460px",
              borderRadius: "18px",
              display: "block",
              userSelect: "none",
            }}
          />

          {/* Subtle edge rim highlight */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "18px",
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.18)",
              pointerEvents: "none",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Floor glow — flat, outside the 3D group */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "4%",
          left: "15%",
          right: "15%",
          height: "80px",
          background:
            "radial-gradient(ellipse at center, rgba(80,130,255,0.18) 0%, transparent 70%)",
          filter: "blur(24px)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
