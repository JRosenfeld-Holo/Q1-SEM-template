"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";

const STORIES = [
  {
    company: "Verkada",
    industry: "Physical Security",
    name: "Brandon Davito",
    title: "SVP of Product Management",
    logo: { src: "/customer-logos/verkada.png", w: 56, h: 44 },
    quote:
      "When AT&T and Verizon both had outages this year, our devices never went down. That's the flexibility Hologram gives us.",
    metrics: [
      { value: "33,000+", label: "Customers worldwide" },
      { value: "28,000+", label: "Devices on Hologram" },
      { value: "85", label: "Countries served" },
    ],
    challenge:
      "33,000+ enterprise customers depend on always-on security cameras. Single-carrier connectivity meant any outage put customer trust — and revenue — at risk.",
    solution:
      "HyperSIM with multi-carrier failover ensures cameras stay online through any carrier outage. One SIM per device, worldwide — no carrier lock-in.",
  },
  {
    company: "Farmer's Fridge",
    industry: "Smart Vending",
    name: "Luke Saunders",
    title: "President & CEO",
    logo: { src: "/customer-logos/farmers-fridge.avif", w: 73, h: 28 },
    quote:
      "The ROI with Hologram has been exceptional. We were able to cut our IoT bills in half.",
    metrics: [
      { value: "2,000+", label: "Smart fridges" },
      { value: "10M+", label: "Meals served" },
      { value: "50%", label: "Connectivity cost reduction" },
    ],
    challenge:
      "2,000+ smart vending machines across 22 U.S. markets, each one processing real-time transactions. Their previous provider hit them with unpredictable costs and inconsistent coverage.",
    solution:
      "Multi-carrier HyperSIM with Outage Protection keeps every fridge transacting 24/7. Result: 50% reduction in connectivity costs with transparent, predictable pricing.",
  },
  {
    company: "Sunday Power",
    industry: "Renewable Energy",
    name: "Endre Ulberg",
    title: "Software Engineer",
    logo: { src: "/customer-logos/sunday-power.png", w: 148, h: 28 },
    quote:
      "With Hologram, we get the ability to scale on top of systems that we trust and we get to do it in a cost-effective way.",
    metrics: [
      { value: "100+", label: "Solar installations" },
      { value: "19.5B kWh", label: "Energy produced annually" },
      { value: "4,500t", label: "Carbon offset per year" },
    ],
    challenge:
      "Remote solar installations in areas with spotty coverage. Connectivity outages meant lost monitoring data, lost revenue, and a threatened business model.",
    solution:
      "Always-on multi-carrier connectivity with pay-as-you-go pricing. Hologram's API-first platform lets Sunday Power scale installations without scaling operational complexity.",
  },
];

function ChevronLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

const AUTO_INTERVAL = 9000;

export function CustomerSuccess() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((next: number, dir: 1 | -1) => {
    setDirection(dir);
    setIndex((next + STORIES.length) % STORIES.length);
  }, []);

  // Auto-rotate
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % STORIES.length);
    }, AUTO_INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, index]);

  const s = STORIES[index];

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d * 32 }),
    center: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
    exit: (d: number) => ({
      opacity: 0,
      x: d * -32,
      transition: { duration: 0.25 },
    }),
  };

  return (
    <section id="customers" className="py-24 px-6 md:px-12 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p
            className="text-xs text-brand-lime tracking-[0.2em] uppercase mb-5"
            style={{ fontFamily: "var(--font-messina-var)" }}
          >
            Customer success
          </p>
          <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
            <h2
              className="font-medium text-4xl md:text-5xl text-white max-w-2xl leading-[1.1]"
              style={{ fontFamily: "var(--font-roobert-var)" }}
            >
              Teams that switched to Hologram — and never looked back.
            </h2>
            {/* Navigation controls — top right */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => go(index - 1, -1)}
                aria-label="Previous story"
                className="w-9 h-9 rounded-full border border-white/[0.12] flex items-center justify-center text-white/75 hover:text-white hover:border-white/40 transition-all duration-200 cursor-pointer"
              >
                <ChevronLeft />
              </button>
              <div className="flex gap-1.5" role="tablist" aria-label="Customer stories">
                {STORIES.map((st, i) => (
                  <button
                    key={st.company}
                    role="tab"
                    aria-selected={i === index}
                    aria-label={st.company}
                    onClick={() => go(i, i > index ? 1 : -1)}
                    className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                      i === index ? "w-6 bg-brand-lime" : "w-3 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => go(index + 1, 1)}
                aria-label="Next story"
                className="w-9 h-9 rounded-full border border-white/[0.12] flex items-center justify-center text-white/75 hover:text-white hover:border-white/40 transition-all duration-200 cursor-pointer"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </FadeIn>

        {/* Carousel */}
        <div
          className="overflow-hidden"
          aria-live="polite"
          aria-atomic="true"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={s.company}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl border border-white/[0.08] overflow-hidden hover:border-white/[0.14] transition-colors duration-300">
                {/* Left: logo + quote + attribution + metrics */}
                <div className="p-8 md:p-10 bg-white/[0.02] flex flex-col justify-between gap-8">
                  <div>
                    {/* Company header */}
                    <div className="flex items-center gap-3 mb-6">
                      <Image
                        src={s.logo.src}
                        alt={s.company}
                        width={s.logo.w}
                        height={s.logo.h}
                        style={{ width: "auto", height: `${s.logo.h}px` }}
                        draggable={false}
                      />
                      <span className="h-px flex-1 bg-white/[0.08]" />
                      <span
                        className="text-sm text-white/65 uppercase tracking-wider shrink-0"
                        style={{ fontFamily: "var(--font-messina-var)" }}
                      >
                        {s.industry}
                      </span>
                    </div>

                    {/* Quote */}
                    <blockquote
                      className="text-xl md:text-2xl text-white leading-snug font-medium mb-5"
                      style={{ fontFamily: "var(--font-roobert-var)" }}
                    >
                      &ldquo;{s.quote}&rdquo;
                    </blockquote>

                    {/* Attribution */}
                    <p
                      className="text-sm text-white/65 leading-snug"
                      style={{ fontFamily: "var(--font-inter-var)" }}
                    >
                      {s.name} &mdash; {s.title}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/[0.06]">
                    {s.metrics.map((m) => (
                      <div key={m.label}>
                        <p
                          className="text-xl md:text-2xl font-semibold text-brand-lime leading-none mb-1"
                          style={{ fontFamily: "var(--font-roobert-var)" }}
                        >
                          {m.value}
                        </p>
                        <p
                          className="text-sm text-white/65 leading-tight"
                          style={{ fontFamily: "var(--font-messina-var)" }}
                        >
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: challenge / solution */}
                <div className="p-8 md:p-10 flex flex-col gap-6 border-t lg:border-t-0 lg:border-l border-white/[0.06]">
                  <div>
                    <p
                      className="text-xs text-brand-lime tracking-[0.18em] uppercase mb-3"
                      style={{ fontFamily: "var(--font-messina-var)" }}
                    >
                      Challenge
                    </p>
                    <p
                      className="text-base text-white/80 leading-relaxed"
                      style={{ fontFamily: "var(--font-inter-var)" }}
                    >
                      {s.challenge}
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-xs text-brand-lime tracking-[0.18em] uppercase mb-3"
                      style={{ fontFamily: "var(--font-messina-var)" }}
                    >
                      Solution
                    </p>
                    <p
                      className="text-base text-white/80 leading-relaxed"
                      style={{ fontFamily: "var(--font-inter-var)" }}
                    >
                      {s.solution}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
