"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { useI18n } from "@/lib/i18n/context";

// Checkmark SVG for feature lists
function Check({ color = "#53f2fa" }: { color?: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <path d="M2.5 6.5L5.5 9.5L10.5 3.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ThreePillars() {
  const { t } = useI18n();
  return (
    <section
      id="products"
      className="py-16 md:py-24 px-6 md:px-12"
      style={{ borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "var(--theme-border-subtle)" }}
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p
            className="text-sm tracking-[0.2em] uppercase mb-5"
            style={{ fontFamily: "var(--font-messina-var)", color: "var(--theme-accent)" }}
          >
            {t.pillars.eyebrow}
          </p>
          <h2
            className="font-medium text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-12 max-w-2xl leading-[1.1]"
            style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-text)" }}
          >
            {t.pillars.headline}
          </h2>
        </FadeIn>

        {/* Dark Bento Grid — 5-column desktop */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:grid-rows-2">

          {/* ── RELIABILITY — dominant card (3/5 cols, full height) ── */}
          <FadeIn
            delay={0.05}
            className="md:col-span-3 md:row-span-2"
          >
            <div
              className="h-full rounded-2xl overflow-hidden transition-all duration-300"
              style={{ background: "linear-gradient(135deg, rgba(83,242,250,0.08) 0%, var(--theme-surface) 60%)", boxShadow: "var(--theme-card-shadow)", border: "1px solid rgba(83,242,250,0.3)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(83,242,250,0.55)"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(83,242,250,0.1)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(83,242,250,0.3)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "var(--theme-card-shadow)"; }}
            >
              <div className="h-full flex flex-col justify-between p-6 md:p-10">
                <div className="flex flex-col gap-5">
                  <span
                    className="text-sm text-brand-cyan tracking-[0.2em] uppercase font-semibold"
                    style={{ fontFamily: "var(--font-messina-var)" }}
                  >
                    Reliability
                  </span>
                  <h3
                    className="font-medium text-2xl md:text-3xl leading-snug max-w-sm"
                    style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-text)" }}
                  >
                    {t.pillars.reliability.headline}
                  </h3>
                  <p
                    className="text-base leading-relaxed max-w-md"
                    style={{ fontFamily: "var(--font-inter-var)", color: "var(--theme-text-secondary)" }}
                  >
                    {t.pillars.reliability.body}
                  </p>

                  <ul className="flex flex-col gap-2.5 mt-2">
                    {t.pillars.reliability.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-base" style={{ fontFamily: "var(--font-inter-var)", color: "var(--theme-text-secondary)" }}>
                        <Check color="#53f2fa" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Big stat */}
                <div
                  className="mt-8 pt-7"
                  style={{ borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "var(--theme-border-subtle)" }}
                >
                  <p
                    className="text-4xl md:text-5xl lg:text-6xl font-semibold text-brand-cyan leading-none tabular-nums"
                    style={{ fontFamily: "var(--font-roobert-var)" }}
                  >
                    {t.pillars.reliability.stat}
                  </p>
                  <p
                    className="text-sm mt-2"
                    style={{ fontFamily: "var(--font-messina-var)", color: "var(--theme-text-muted)" }}
                  >
                    {t.pillars.reliability.statLabel}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* ── PRICING — top-right (2/5 cols) ── */}
          <FadeIn
            delay={0.12}
            className="md:col-span-2"
          >
            <div
              className="h-full rounded-2xl p-6 md:p-8 transition-all duration-300"
              style={{ background: "linear-gradient(135deg, var(--theme-accent-bg) 0%, var(--theme-surface) 100%)", border: "1px solid var(--theme-accent-border)", boxShadow: "var(--theme-card-shadow)" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(191,253,17,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "var(--theme-card-shadow)"; }}
            >
              <span
                className="block text-sm tracking-[0.2em] uppercase font-semibold mb-4"
                style={{ fontFamily: "var(--font-messina-var)", color: "var(--theme-accent)" }}
              >
                {t.pillars.pricing.label}
              </span>
              <h3
                className="font-medium text-xl mb-3 leading-snug"
                style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-text)" }}
              >
                {t.pillars.pricing.headline}
              </h3>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-inter-var)", color: "var(--theme-text-secondary)" }}
              >
                {t.pillars.pricing.body}
              </p>
              <div className="flex items-baseline gap-2">
                <span
                  className="text-3xl font-semibold"
                  style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-accent)" }}
                >
                  {t.pillars.pricing.stat}
                </span>
                <span
                  className="text-sm"
                  style={{ fontFamily: "var(--font-messina-var)", color: "var(--theme-text-muted)" }}
                >
                  {t.pillars.pricing.statLabel}
                </span>
              </div>
            </div>
          </FadeIn>

          {/* ── PARTNERSHIP — bottom-right (2/5 cols) ── */}
          <FadeIn
            delay={0.19}
            className="md:col-span-2"
          >
            <div
              className="h-full rounded-2xl p-6 md:p-8 transition-all duration-300"
              style={{ background: "linear-gradient(135deg, rgba(var(--theme-tertiary-rgb),0.08) 0%, var(--theme-surface) 100%)", boxShadow: "var(--theme-card-shadow)", border: "1px solid rgba(var(--theme-tertiary-rgb),0.3)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = `rgba(var(--theme-tertiary-rgb),0.55)`; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(var(--theme-tertiary-rgb),0.1)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = `rgba(var(--theme-tertiary-rgb),0.3)`; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "var(--theme-card-shadow)"; }}
            >
              <span
                className="block text-sm tracking-[0.2em] uppercase font-semibold mb-4"
                style={{ fontFamily: "var(--font-messina-var)", color: "var(--theme-tertiary)" }}
              >
                {t.pillars.partnership.label}
              </span>
              <h3
                className="font-medium text-xl mb-3 leading-snug"
                style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-text)" }}
              >
                {t.pillars.partnership.headline}
              </h3>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-inter-var)", color: "var(--theme-text-secondary)" }}
              >
                {t.pillars.partnership.body}
              </p>
              <div className="flex items-baseline gap-2">
                <span
                  className="text-3xl font-semibold"
                  style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-tertiary)" }}
                >
                  {t.pillars.partnership.stat}
                </span>
                <span
                  className="text-sm"
                  style={{ fontFamily: "var(--font-messina-var)", color: "var(--theme-text-muted)" }}
                >
                  {t.pillars.partnership.statLabel}
                </span>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
