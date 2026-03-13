"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
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
    let rafId: number | null = null;
    const onMove = (e: MouseEvent) => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 16);
        mouseY.set(-((e.clientY - rect.top) / rect.height - 0.5) * 10);
        rafId = null;
      });
    };
    const onLeave = () => {
      if (rafId !== null) { cancelAnimationFrame(rafId); rafId = null; }
      mouseX.set(0);
      mouseY.set(0);
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
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
      {/* Backlight — fades in after card entrance animation concludes */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 1.6 }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "120%",
          height: "120%",
          transform: "translate(-50%, -48%) translateZ(0)",
          background:
            "radial-gradient(ellipse at 50% 55%, rgba(191,253,17,0.22) 0%, rgba(83,242,250,0.09) 40%, transparent 65%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Outer div: cinematic spring entrance from near-edge-on */}
      <motion.div
        initial={{ rotateY: 88, rotateX: -22, rotateZ: 10, scale: 1.8, opacity: 0 }}
        animate={{ rotateY: -14, rotateX: 6, rotateZ: -3, scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 55,
          damping: 18,
          delay: 0.3,
          opacity: { duration: 0.35, ease: "easeOut", delay: 0.3 },
        }}
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
          <Image
            src="/textures/sim-card-front.png"
            alt="Hologram HyperSIM card"
            width={1066}
            height={708}
            priority
            draggable={false}
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "460px",
              borderRadius: "18px",
              display: "block",
              userSelect: "none",
            }}
          />

          {/* Light sweep — runs once at card arrival, clipped to card shape */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "18px",
              overflow: "hidden",
              pointerEvents: "none",
            }}
          >
            <motion.div
              initial={{ x: "-110%" }}
              animate={{ x: "210%" }}
              transition={{ duration: 1.0, ease: [0.4, 0, 0.2, 1], delay: 1.6 }}
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(105deg, transparent 25%, rgba(255,255,255,0.15) 48%, rgba(191,253,17,0.07) 56%, transparent 72%)",
              }}
            />
          </div>

        </motion.div>
      </motion.div>

      {/* Floor glow — flat, outside the 3D group */}
      <div
        aria-hidden="true"
        className="sim-floor-glow"
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
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      />
    </div>
  );
}
