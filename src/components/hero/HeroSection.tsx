"use client";

import { motion } from "framer-motion";
import { SIMCardScene } from "./SIMCardScene";
import { HeroBackground } from "./HeroBackground";
import { SocialProofBar } from "@/components/sections/SocialProofBar";

const EASE = [0.16, 1, 0.3, 1] as const;

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Radial lime glow — top center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 55% -5%, rgba(191,253,17,0.045) 0%, transparent 65%)",
        }}
      />
      {/* Deep vignette edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(0,4,15,0.7) 100%)",
        }}
      />

      {/* Burst particle effect — fires at card entrance crescendo */}
      <HeroBackground />

      {/* Main content — flex-1 centers the grid in the space above the marquee */}
      <div className="relative z-10 flex-1 flex items-center w-full">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 items-center py-24 lg:py-0">

            {/* ── Left: typography + CTAs ── */}
            <div className="flex flex-col gap-7 order-2 lg:order-1">

              {/* Eyebrow */}
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.0 }}
                className="text-xs text-brand-lime tracking-[0.22em] uppercase"
                style={{ fontFamily: "var(--font-messina-var)" }}
              >
                IoT Connectivity — Built for Scale
              </motion.span>

              {/* H1 */}
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
                className="font-medium text-[2.1rem] sm:text-4xl md:text-5xl xl:text-[4.25rem] leading-[1.04] text-white"
                style={{ fontFamily: "var(--font-roobert-var)" }}
              >
                Every device.
                <br />
                <span className="text-brand-lime">Always online.</span>
              </motion.h1>

              {/* Subhead */}
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.35 }}
                className="text-xl text-white/80 max-w-md leading-relaxed"
                style={{ fontFamily: "var(--font-inter-var)" }}
              >
                Your devices deserve better than single-carrier reliability.
                One SIM spans 550+ carriers across 190+ countries, with
                automatic failover and a 99.95% uptime SLA.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.55 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="https://dashboard.hologram.io/account/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-[10px] bg-brand-lime text-black font-medium text-sm cursor-pointer hover:bg-[#cffe4e] transition-all duration-200"
                  style={{ fontFamily: "var(--font-inter-var)" }}
                >
                  Start building for free
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[10px] border border-white/20 text-white text-sm cursor-pointer hover:bg-[#2b2f3b] hover:border-white/40 transition-all duration-200"
                  style={{ fontFamily: "var(--font-inter-var)" }}
                >
                  Talk to an IoT expert
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 7h8M8 4l3 3-3 3"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </motion.div>

            </div>

            {/* ── Right: 3D Canvas ── */}
            <div className="order-1 lg:order-2 w-full aspect-[4/3] md:aspect-[16/11] lg:aspect-auto lg:h-[600px]">
              <SIMCardScene />
            </div>

          </div>
        </div>
      </div>

      {/* Social proof marquee — pinned at bottom of the fold */}
      <SocialProofBar />
    </section>
  );
}
