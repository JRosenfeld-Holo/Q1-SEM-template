"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { useI18n } from "@/lib/i18n/context";

export function CTASection() {
  const { t } = useI18n();
  return (
    <section id="cta" className="py-32 px-6 text-center relative overflow-hidden">
      {/* Radial lime glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(191,253,17,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        <FadeIn>
          <p
            className="text-sm tracking-[0.2em] uppercase mb-6"
            style={{ fontFamily: "var(--font-messina-var)", color: "var(--theme-accent)" }}
          >
            {t.cta.eyebrow}
          </p>
          <h2
            className="font-medium text-4xl md:text-5xl lg:text-6xl mb-6 leading-[1.05]"
            style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-text)" }}
          >
            {t.cta.headline}
          </h2>
          <p
            className="text-lg md:text-xl mb-10 leading-relaxed"
            style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-text-secondary)" }}
          >
            {t.cta.sub}
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-[10px] font-medium text-sm cursor-pointer transition-all duration-200"
              style={{
                fontFamily: "var(--font-roobert-var)",
                backgroundColor: "var(--theme-cta-bg)",
                color: "var(--theme-cta-text)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--theme-cta-hover)"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "var(--shadow-lime-glow)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--theme-cta-bg)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              {t.cta.cta2}
            </a>
            <a
              href="#free-pilot"
              className="inline-flex items-center justify-center px-8 py-4 rounded-[10px] text-sm cursor-pointer transition-all duration-200"
              style={{
                fontFamily: "var(--font-roobert-var)",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "var(--theme-btn-outline-border)",
                color: "var(--theme-btn-outline-text)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--theme-btn-outline-hover-bg)"; e.currentTarget.style.borderColor = "var(--theme-btn-outline-hover-border)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.borderColor = "var(--theme-btn-outline-border)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              {t.cta.cta1}
            </a>
          </div>

          {/* CTA value props */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto">
            {t.cta.checks.map((line) => (
              <div
                key={line}
                className="flex items-center gap-2 text-sm"
                style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-text-muted)" }}
              >
                <span className="shrink-0" style={{ color: "var(--theme-accent)" }}>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 6L5 9L10 3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {line}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
