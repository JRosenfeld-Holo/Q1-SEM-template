"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { useI18n } from "@/lib/i18n/context";

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
    logo: { src: "/customer-logos/sunday-power.avif", w: 148, h: 28 },
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
  const { t } = useI18n();
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

  const testimonial = TESTIMONIALS[index];

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d * 40 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
    exit: (d: number) => ({ opacity: 0, x: d * -40, transition: { duration: 0.3 } }),
  };

  return (
    <section
      className="py-24 px-6 md:px-12"
      style={{ borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "var(--theme-border-subtle)" }}
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
            className="text-xs tracking-[0.2em] uppercase mb-5 text-center"
            style={{ fontFamily: "var(--font-messina-var)", color: "var(--theme-accent)" }}
          >
            {t.testimonials.eyebrow}
          </p>
          <h2
            className="font-medium text-4xl md:text-5xl mb-14 leading-[1.1] text-center max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-text)" }}
          >
            {t.testimonials.headline}
          </h2>
        </FadeIn>

        {/* Carousel */}
        <div className="relative">
          {/* Card */}
          <div
            className="relative overflow-hidden rounded-2xl px-8 md:px-16 py-14 min-h-[320px] flex flex-col justify-between"
            style={{
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "var(--theme-border)",
              backgroundColor: "var(--theme-surface)",
              boxShadow: "var(--theme-card-shadow)",
            }}
            aria-live="polite"
            aria-atomic="true"
          >
            {/* Decorative quote mark */}
            <span
              className="absolute top-8 left-8 md:left-14 text-7xl leading-none select-none pointer-events-none"
              aria-hidden="true"
              style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-accent)", opacity: 0.15 }}
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
                  {testimonial.logo ? (
                    <Image
                      src={testimonial.logo.src}
                      alt={testimonial.company}
                      width={testimonial.logo.w}
                      height={testimonial.logo.h}
                      style={{ width: "auto", height: `${testimonial.logo.h}px`, opacity: 0.6, filter: "var(--theme-logo-filter)" }}
                      draggable={false}
                    />
                  ) : (
                    <span
                      className="text-sm font-semibold uppercase tracking-widest"
                      style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-text-muted)" }}
                    >
                      {testimonial.company}
                    </span>
                  )}
                </div>

                {/* Quote */}
                <blockquote>
                  <p
                    className="text-lg md:text-xl leading-relaxed"
                    style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-text)" }}
                  >
                    {testimonial.quote}
                  </p>
                </blockquote>

                {/* Attribution */}
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1" style={{ backgroundColor: "var(--theme-border-subtle)" }} />
                  <div className="text-right">
                    <p
                      className="text-sm"
                      style={{ fontFamily: "var(--font-inter-var)", color: "var(--theme-text-secondary)" }}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ fontFamily: "var(--font-inter-var)", color: "var(--theme-text-muted)" }}
                    >
                      {testimonial.title} &mdash; {testimonial.company}
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer"
            style={{
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "var(--theme-border)",
              backgroundColor: "var(--theme-surface)",
              color: "var(--theme-text-muted)",
            }}
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer"
            style={{
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "var(--theme-border)",
              backgroundColor: "var(--theme-surface)",
              color: "var(--theme-text-muted)",
            }}
          >
            <ChevronRight />
          </button>
        </div>

        {/* Progress-bar dot navigation */}
        <div className="flex items-center justify-center gap-2 mt-8" role="tablist" aria-label="Select testimonial">
          {TESTIMONIALS.map((item, i) => (
            <button
              key={item.company}
              role="tab"
              aria-selected={i === index}
              aria-label={`${item.company} testimonial`}
              onClick={() => go(i, i > index ? 1 : -1)}
              className="relative h-1 rounded-full overflow-hidden transition-all duration-300 cursor-pointer"
              style={{
                width: i === index ? 48 : 12,
                backgroundColor: "var(--theme-border)",
              }}
            >
              {i === index && (
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{ backgroundColor: "var(--theme-accent)" }}
                  initial={{ width: "0%" }}
                  animate={{ width: paused ? undefined : "100%" }}
                  transition={{
                    duration: INTERVAL_MS / 1000,
                    ease: "linear",
                  }}
                  key={`progress-${index}`}
                />
              )}
              {i !== index && (
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: "var(--theme-border)" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* CTA nudge */}
        <div className="flex justify-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium cursor-pointer transition-all duration-200 group"
            style={{ fontFamily: "var(--font-inter-var)", color: "var(--theme-accent)" }}
          >
            Join 6,000+ IoT teams on Hologram
            <svg
              width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
