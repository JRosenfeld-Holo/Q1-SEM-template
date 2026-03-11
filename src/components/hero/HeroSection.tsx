"use client";

import { motion } from "framer-motion";
import { SIMCardScene } from "./SIMCardScene";
import { HeroBackground } from "./HeroBackground";
import { SocialProofBar } from "@/components/sections/SocialProofBar";
import { useI18n } from "@/lib/i18n/context";

const EASE = [0.16, 1, 0.3, 1] as const;

export function HeroSection() {
  const { t } = useI18n();
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" style={{ backgroundColor: "var(--theme-bg)" }}>
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
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(0,0,0,0.7) 100%)",
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
                className="text-xs tracking-[0.22em] uppercase hidden md:inline"
                style={{ fontFamily: "var(--font-messina-var)", color: "var(--theme-accent)" }}
              >
                {t.hero.eyebrow}
              </motion.span>

              {/* H1 */}
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
                className="font-medium text-[2.1rem] sm:text-4xl md:text-5xl xl:text-[4.25rem] leading-[1.04]"
                style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-text)" }}
              >
                {t.hero.h1a}
                <br />
                <span style={{ color: "var(--theme-accent)" }}>{t.hero.h1b}</span>
              </motion.h1>

              {/* Subhead */}
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.35 }}
                className="text-xl max-w-md leading-relaxed"
                style={{ fontFamily: "var(--font-inter-var)", color: "var(--theme-text-secondary)" }}
              >
                {t.hero.sub}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.55 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-[10px] font-medium text-sm cursor-pointer transition-all duration-200"
                  style={{
                    fontFamily: "var(--font-inter-var)",
                    backgroundColor: "var(--theme-cta-bg)",
                    color: "var(--theme-cta-text)",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--theme-cta-hover)"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "var(--shadow-lime-glow)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--theme-cta-bg)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  {t.hero.cta1}
                </a>
                <a
                  href="#free-pilot"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-[10px] text-sm cursor-pointer transition-all duration-200"
                  style={{
                    fontFamily: "var(--font-inter-var)",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "var(--theme-btn-outline-border)",
                    color: "var(--theme-btn-outline-text)",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--theme-btn-outline-hover-bg)"; e.currentTarget.style.borderColor = "var(--theme-btn-outline-hover-border)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.borderColor = "var(--theme-btn-outline-border)"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  {t.hero.cta2}
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
