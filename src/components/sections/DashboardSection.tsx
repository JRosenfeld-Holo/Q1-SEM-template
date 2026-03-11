"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { useI18n } from "@/lib/i18n/context";

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <circle cx="8" cy="8" r="7" stroke="var(--theme-accent)" strokeWidth="1.2" />
      <path d="M5 8L7 10.5L11 5.5" stroke="var(--theme-accent)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DashboardSection() {
  const { t } = useI18n();

  const ACCENT_MAP = [
    { accent: "#bffd11", rgb: "191,253,17" },
    { accent: "#53f2fa", rgb: "83,242,250" },
    { accent: "#9b59d4", rgb: "155,89,212" },
  ] as const;

  return (
    <section
      id="dashboard"
      className="py-16 md:py-24 px-6 md:px-12"
      style={{ borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "var(--theme-border-subtle)" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Section heading */}
        <FadeIn>
          <p
            className="text-sm tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "var(--font-messina-var)", color: "var(--theme-accent)" }}
          >
            {t.dashboard.eyebrow}
          </p>
          <h2
            className="font-medium text-3xl md:text-4xl lg:text-5xl mb-6 max-w-2xl leading-[1.1]"
            style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-text)" }}
          >
            {t.dashboard.headline}
          </h2>
          <p
            className="text-lg md:text-xl mb-12 max-w-xl leading-relaxed"
            style={{ fontFamily: "var(--font-inter-var)", color: "var(--theme-text-secondary)" }}
          >
            {t.dashboard.sub}
          </p>
        </FadeIn>

        {/* 2-col: feature bullets left, screenshot right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start mb-12">

          {/* Left: bullets + CTA */}
          <FadeIn className="lg:col-span-2 flex flex-col gap-6 lg:sticky lg:top-28">
            <ul className="flex flex-col gap-5">
              {t.dashboard.bullets.map((b) => (
                <li key={b.headline} className="flex items-start gap-3.5">
                  <span className="mt-0.5"><Check /></span>
                  <div>
                    <p
                      className="text-base font-medium mb-1 leading-snug"
                      style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-text)" }}
                    >
                      {b.headline}
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-inter-var)", color: "var(--theme-text-secondary)" }}
                    >
                      {b.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="https://dashboard.hologram.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium cursor-pointer transition-all duration-200 group w-fit"
              style={{ fontFamily: "var(--font-inter-var)", color: "var(--theme-accent)" }}
            >
              {t.dashboard.exploreCta}
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
          </FadeIn>

          {/* Right: layered screenshot composition */}
          <FadeIn delay={0.1} className="lg:col-span-3">
            <div className="relative md:pb-[clamp(72px,10vw,104px)]">

              {/* Main dashboard screenshot */}
              <div
                className="relative z-0 rounded-xl overflow-hidden"
                style={{
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 0 80px rgba(191,253,17,0.05), 0 4px 48px rgba(0,0,0,0.55)",
                }}
              >
                <Image
                  src="/dashboard-images/SIM-page.png"
                  alt="Hologram dashboard"
                  width={2319}
                  height={1817}
                  style={{ width: "100%", height: "auto", display: "block" }}
                  draggable={false}
                />
              </div>

              {/* Floating Outage Protection card — desktop only */}
              <div
                className="hidden md:block absolute left-4 right-10 bottom-0 z-10 rounded-xl overflow-hidden"
                style={{
                  boxShadow: "0 16px 56px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.10)",
                }}
              >
                <Image
                  src="/dashboard-images/fallback-dahs.png"
                  alt="Hologram Outage Protection"
                  width={2424}
                  height={1354}
                  style={{ width: "100%", height: "auto", display: "block" }}
                  draggable={false}
                />
              </div>
            </div>
          </FadeIn>

        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {t.dashboard.cards.map((card, i) => {
            const { accent, rgb } = ACCENT_MAP[i] ?? ACCENT_MAP[0];
            return (
              <FadeIn key={card.label} delay={i * 0.09}>
                <div
                  className="h-full p-6 md:p-8 rounded-2xl transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, rgba(${rgb},0.07) 0%, var(--theme-surface) 60%)`,
                    border: `1px solid rgba(${rgb},0.25)`,
                    boxShadow: "var(--theme-card-shadow)",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = `rgba(${rgb},0.5)`; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 8px 30px rgba(${rgb},0.08)`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = `rgba(${rgb},0.25)`; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "var(--theme-card-shadow)"; }}
                >
                  <span
                    className="block text-sm tracking-[0.18em] uppercase mb-4 font-semibold"
                    style={{ fontFamily: "var(--font-messina-var)", color: accent }}
                  >
                    {card.label}
                  </span>
                  <h3
                    className="font-medium text-lg mb-3 leading-snug"
                    style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-text)" }}
                  >
                    {card.headline}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ fontFamily: "var(--font-inter-var)", color: "var(--theme-text-secondary)" }}
                  >
                    {card.body}
                  </p>
                  <div className="mt-auto pt-2">
                    <span
                      className="block text-2xl font-semibold mb-1"
                      style={{ fontFamily: "var(--font-roobert-var)", color: accent }}
                    >
                      {card.stat}
                    </span>
                    <span
                      className="block text-xs leading-snug"
                      style={{ fontFamily: "var(--font-messina-var)", color: "var(--theme-text-muted)" }}
                    >
                      {card.statLabel}
                    </span>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}
