"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";

const TESTIMONIALS = [
  {
    quote:
      "We have thousands of devices in the field securing mission-critical locations. Hologram's Outage Protection SIMs deliver high reliability and exceptional performance to meet customer needs. In fact, the flexibility that Hologram provides helped us avoid downtime despite AT&T and Verizon outages this year.",
    name: "Brandon Davito",
    title: "SVP of Product Management",
    company: "Verkada",
    industry: "Physical Security",
    logo: { src: "/customer-logos/verkada.png", w: 56, h: 44 },
  },
  {
    quote:
      "When someone's hungry, you don't want to disappoint. Our partnership with Hologram delivered significantly lower costs, better service, and more uptime reliability to achieve our goal of making healthy food as accessible as a candy bar.",
    name: "Luke Saunders",
    title: "President & CEO",
    company: "Farmer's Fridge",
    industry: "Smart Vending",
    logo: { src: "/customer-logos/farmers-fridge.avif", w: 73, h: 28 },
  },
  {
    quote:
      "Partnering with Hologram was a no-brainer. With most other types of supplier relations we have, there are things to be worried about. With Hologram, I don't have anything to be worried about, which is very nice.",
    name: "Endre Ulberg",
    title: "Software Engineer",
    company: "Sunday Power",
    industry: "Renewable Energy",
    logo: { src: "/customer-logos/sunday-power.png", w: 148, h: 28 },
  },
  {
    quote:
      "Our business can't afford downtime. With Hologram, latency is very low. We don't lose signal. It works. Every device that we install will have a Hologram SIM. Ultimately, it feels like Hologram wants us to succeed.",
    name: "Yonatan Horovitz",
    title: "Co-founder & Chief Autonomy Officer",
    company: "Fieldin",
    industry: "Agricultural Autonomy",
    logo: { src: "/customer-logos/fieldin.png", w: 143, h: 28 },
  },
  {
    quote:
      "Hologram delivers connectivity that is essential for every facet of our business — from maximizing the uptime of our client's industrial trucks through accurate and real-time tracking of energy usage where we derive our revenue. Any disruption in our services can have devastating financial consequences for our customers.",
    name: "Jean-François Marchand",
    title: "Marketing & Customer Success Director",
    company: "UgoWork",
    industry: "Industrial Fleet",
    logo: { src: "/customer-logos/ugowork.avif", w: 64, h: 28 },
  },
] as const;

const INTERVAL_MS = 6000;

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (next: number, dir: 1 | -1) => {
      setDirection(dir);
      setIndex((next + TESTIMONIALS.length) % TESTIMONIALS.length);
    },
    []
  );

  const prev = useCallback(() => go(index - 1, -1), [index, go]);
  const next = useCallback(() => go(index + 1, 1), [index, go]);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => go(index + 1, 1), INTERVAL_MS);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [index, paused, go]);

  // Keyboard support
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const t = TESTIMONIALS[index];

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d * 40 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
    exit: (d: number) => ({ opacity: 0, x: d * -40, transition: { duration: 0.3 } }),
  };

  return (
    <section
      className="py-24 px-6 md:px-12 border-t border-white/[0.06]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Customer testimonials"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p
            className="text-xs text-white/40 tracking-[0.2em] uppercase mb-5 text-center"
            style={{ fontFamily: "var(--font-messina-var)" }}
          >
            What customers say
          </p>
          <h2
            className="font-medium text-4xl md:text-5xl text-white mb-14 leading-[1.1] text-center max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-roobert-var)" }}
          >
            Trusted by teams who can&rsquo;t afford to go offline.
          </h2>
        </FadeIn>

        {/* Carousel */}
        <div className="relative">
          {/* Card */}
          <div
            className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] px-8 md:px-16 py-14 min-h-[320px] flex flex-col justify-between"
            aria-live="polite"
            aria-atomic="true"
          >
            {/* Decorative quote mark */}
            <span
              className="absolute top-8 left-8 md:left-14 text-7xl text-brand-lime/15 leading-none select-none pointer-events-none"
              aria-hidden="true"
              style={{ fontFamily: "var(--font-roobert-var)" }}
            >
              &ldquo;
            </span>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex flex-col gap-8"
              >
                {/* Logo or company name */}
                <div className="h-11 flex items-center">
                  {t.logo ? (
                    <Image
                      src={t.logo.src}
                      alt={t.company}
                      width={t.logo.w}
                      height={t.logo.h}
                      style={{ width: "auto", height: `${t.logo.h}px`, opacity: 0.6 }}
                      draggable={false}
                    />
                  ) : (
                    <span
                      className="text-sm font-semibold text-white/40 uppercase tracking-widest"
                      style={{ fontFamily: "var(--font-roobert-var)" }}
                    >
                      {t.company}
                    </span>
                  )}
                </div>

                {/* Quote */}
                <blockquote>
                  <p
                    className="text-lg md:text-xl text-white/85 leading-relaxed"
                    style={{ fontFamily: "var(--font-roobert-var)" }}
                  >
                    {t.quote}
                  </p>
                </blockquote>

                {/* Attribution */}
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-white/[0.06]" />
                  <div className="text-right">
                    <p
                      className="text-sm text-white/70"
                      style={{ fontFamily: "var(--font-inter-var)" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-xs text-white/35 mt-0.5"
                      style={{ fontFamily: "var(--font-inter-var)" }}
                    >
                      {t.title} &mdash; {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Prev / Next arrows */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 rounded-full border border-white/[0.12] bg-brand-deep flex items-center justify-center text-white/50 hover:text-white hover:border-white/25 transition-all duration-200 cursor-pointer"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 rounded-full border border-white/[0.12] bg-brand-deep flex items-center justify-center text-white/50 hover:text-white hover:border-white/25 transition-all duration-200 cursor-pointer"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Dot navigation */}
        <div className="flex items-center justify-center gap-2 mt-8" role="tablist" aria-label="Select testimonial">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.company}
              role="tab"
              aria-selected={i === index}
              aria-label={`${t.company} testimonial`}
              onClick={() => go(i, i > index ? 1 : -1)}
              className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                i === index ? "w-8 bg-brand-lime" : "w-3 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
