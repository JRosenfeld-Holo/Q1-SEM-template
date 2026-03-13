"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { useI18n } from "@/lib/i18n/context";
import { FadeIn } from "@/components/ui/FadeIn";

const STORIES = [
  {
    company: "Verkada",
    industry: "Physical Security",
    name: "Brandon Davito",
    title: "SVP of Product Management",
    logo: { src: "/customer-logos/verkada.png", w: 56, h: 44 },
    thumbnail: "/case-study-thumbnails/verkada-person.avif",
    videoId: "m-q18SEOScc",
    quote:
      "When AT&T and Verizon both had outages this year, our devices never went down. That's the flexibility Hologram gives us.",
    metrics: [
      { value: "33,000+", label: "Customers worldwide" },
      { value: "28,000+", label: "Devices on Hologram" },
      { value: "85", label: "Countries served" },
    ],
    challenge:
      "33,000+ enterprise customers depend on always-on security cameras. Single-carrier connectivity meant any outage put customer trust and revenue at risk.",
    solution:
      "HyperSIM with multi-carrier failover ensures cameras stay online through any carrier outage. One SIM per device, worldwide, no carrier lock-in.",
  },
  {
    company: "Farmer's Fridge",
    industry: "Smart Vending",
    name: "Luke Saunders",
    title: "President & CEO",
    logo: { src: "/customer-logos/farmers-fridge.avif", w: 73, h: 28 },
    thumbnail: "/case-study-thumbnails/farmers-fridge-person.avif",
    videoId: "QPPWgESttVE",
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
    logo: { src: "/customer-logos/sunday-power.avif", w: 148, h: 28 },
    thumbnail: "/case-study-thumbnails/sunday-power-person.avif",
    videoId: "6FUO4UBT3YU",
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

function VideoLightbox({ videoId, onClose }: { videoId: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(12px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.94, opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-4xl"
        style={{ aspectRatio: "16/9" }}
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          allow="autoplay; fullscreen"
          allowFullScreen
          className="w-full h-full rounded-xl border border-white/[0.1]"
          style={{ display: "block" }}
          title="Customer story video"
        />
        <button
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-10 right-0 text-white/60 hover:text-white transition-colors duration-200 cursor-pointer"
          style={{ fontFamily: "var(--font-roobert-var)" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </motion.div>
    </motion.div>,
    document.body
  );
}

const AUTO_INTERVAL = 9000;

export function CustomerSuccess() {
  const { t } = useI18n();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((next: number, dir: 1 | -1) => {
    setDirection(dir);
    setIndex((next + STORIES.length) % STORIES.length);
  }, []);

  // Auto-rotate (paused while lightbox is open)
  useEffect(() => {
    if (paused || activeVideoId) return;
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % STORIES.length);
    }, AUTO_INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, index, activeVideoId]);

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
    <section
      id="customers"
      className="py-16 md:py-24 px-6 md:px-12"
      style={{ borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "var(--theme-border-subtle)" }}
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p
            className="text-xs tracking-[0.2em] uppercase mb-5"
            style={{ fontFamily: "var(--font-messina-var)", color: "var(--theme-accent)" }}
          >
            {t.customerSuccess.eyebrow}
          </p>
          <div className="flex items-end justify-between mb-8 md:mb-12 gap-6 flex-wrap">
            <h2
              className="font-medium text-3xl md:text-4xl lg:text-5xl max-w-2xl leading-[1.1]"
              style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-text)" }}
            >
              {t.customerSuccess.headline}
            </h2>
            {/* Navigation controls — top right */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => go(index - 1, -1)}
                aria-label="Previous story"
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer"
                style={{
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "var(--theme-border)",
                  color: "var(--theme-text-secondary)",
                }}
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
                    className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${i === index ? "w-6" : "w-3"
                      }`}
                    style={{ backgroundColor: i === index ? "var(--theme-accent)" : "var(--theme-border)" }}
                  />
                ))}
              </div>
              <button
                onClick={() => go(index + 1, 1)}
                aria-label="Next story"
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer"
                style={{
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "var(--theme-border)",
                  color: "var(--theme-text-secondary)",
                }}
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
              <div
                className="rounded-2xl overflow-hidden transition-colors duration-300 grid grid-cols-1 lg:grid-cols-2"
                style={{
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "var(--theme-border)",
                  backgroundColor: "var(--theme-surface)",
                  boxShadow: "var(--theme-card-shadow)",
                }}
              >

                {/* Left: video inset */}
                <div className="p-6 md:p-10 flex items-stretch">
                  <button
                    onClick={() => setActiveVideoId(s.videoId)}
                    aria-label={`Watch ${s.company} customer story video`}
                    className="group relative w-full overflow-hidden rounded-xl cursor-pointer min-h-[240px] md:min-h-0"
                  >
                    <Image
                      src={s.thumbnail}
                      alt={`${s.company} customer story`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 448px"
                      style={{ objectFit: "cover", objectPosition: "center 20%" }}
                      draggable={false}
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/45 group-hover:bg-black/25 transition-colors duration-300" />
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="flex items-center justify-center w-14 h-14 rounded-full group-hover:scale-110 transition-transform duration-300"
                        style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)", border: "2px solid var(--theme-accent)" }}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" style={{ marginLeft: "3px", fill: "var(--theme-accent)" }}>
                          <polygon points="5,3 19,12 5,21" />
                        </svg>
                      </div>
                    </div>
                    {/* Watch story label */}
                    <div className="absolute bottom-3 left-4">
                      <span className="text-xs text-white/70 tracking-[0.15em] uppercase" style={{ fontFamily: "var(--font-messina-var)" }}>
                        {t.customerSuccess.watchStory}
                      </span>
                    </div>
                  </button>
                </div>

                {/* Right: all content stacked */}
                <div
                  className="p-6 md:p-10 flex flex-col gap-6"
                  style={{ borderLeftWidth: "1px", borderLeftStyle: "solid", borderLeftColor: "var(--theme-border-subtle)" }}
                >
                  {/* Company header */}
                  <div className="flex items-center gap-3 min-w-0">
                    <Image
                      src={s.logo.src}
                      alt={s.company}
                      width={s.logo.w}
                      height={s.logo.h}
                      className="shrink-0"
                      style={{
                        width: "auto",
                        height: `${s.logo.h}px`,
                        maxWidth: "min(120px, 40%)",
                        objectFit: "contain",
                        filter: "var(--theme-logo-filter)",
                        transition: "filter 0.35s ease",
                      }}
                      draggable={false}
                    />
                    <span className="h-px flex-1 min-w-[20px]" style={{ backgroundColor: "var(--theme-border-subtle)" }} />
                    <span
                      className="text-[11px] sm:text-sm uppercase tracking-wider shrink-0"
                      style={{ fontFamily: "var(--font-messina-var)", color: "var(--theme-text-muted)" }}
                    >
                      {t.customerSuccess.stories[index]?.industry ?? s.industry}
                    </span>
                  </div>

                  {/* Quote */}
                  <blockquote
                    className="text-xl md:text-2xl leading-snug font-medium"
                    style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-text)" }}
                  >
                    &ldquo;{t.customerSuccess.stories[index]?.quote ?? s.quote}&rdquo;
                  </blockquote>

                  {/* Attribution */}
                  <p
                    className="text-sm leading-snug"
                    style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-text-muted)" }}
                  >
                    {s.name} &mdash; {t.customerSuccess.stories[index]?.title ?? s.title}
                  </p>

                  {/* Metrics */}
                  <div
                    className="grid grid-cols-3 gap-3 sm:gap-4 pt-4"
                    style={{ borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "var(--theme-border-subtle)" }}
                  >
                    {s.metrics.map((m, mIdx) => (
                      <div key={m.label} className="min-w-0">
                        <p
                          className="text-lg sm:text-xl md:text-2xl font-semibold leading-none mb-1 truncate"
                          style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-accent)" }}
                        >
                          {m.value}
                        </p>
                        <p
                          className="text-[11px] sm:text-sm leading-tight"
                          style={{ fontFamily: "var(--font-messina-var)", color: "var(--theme-text-muted)" }}
                        >
                          {t.customerSuccess.stories[index]?.metricLabels[mIdx] ?? m.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Challenge */}
                  <div
                    className="pt-4"
                    style={{ borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "var(--theme-border-subtle)" }}
                  >
                    <p
                      className="text-xs tracking-[0.18em] uppercase mb-3"
                      style={{ fontFamily: "var(--font-messina-var)", color: "var(--theme-accent)" }}
                    >
                      {t.customerSuccess.challengeLabel}
                    </p>
                    <p
                      className="text-base leading-relaxed"
                      style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-text-secondary)" }}
                    >
                      {t.customerSuccess.stories[index]?.challenge ?? s.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <p
                      className="text-xs tracking-[0.18em] uppercase mb-3"
                      style={{ fontFamily: "var(--font-messina-var)", color: "var(--theme-accent)" }}
                    >
                      {t.customerSuccess.solutionLabel}
                    </p>
                    <p
                      className="text-base leading-relaxed"
                      style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-text-secondary)" }}
                    >
                      {t.customerSuccess.stories[index]?.solution ?? s.solution}
                    </p>
                  </div>
                </div>

              </div>{/* end outer card */}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Video lightbox */}
      <AnimatePresence>
        {activeVideoId && (
          <VideoLightbox
            videoId={activeVideoId}
            onClose={() => setActiveVideoId(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
