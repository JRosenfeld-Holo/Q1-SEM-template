"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "none";
  className?: string;
  style?: React.CSSProperties;
  amount?: number;
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className,
  style,
  amount = 0.1,
}: FadeInProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount });
  const prefersReduced = useReducedMotion();

  const variants = {
    hidden: {
      opacity: prefersReduced ? 1 : 0,
      y: !prefersReduced && direction === "up" ? 24 : 0,
      x: !prefersReduced && direction === "left" ? -24 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: prefersReduced ? 0 : 0.55,
        delay: prefersReduced ? 0 : delay,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
