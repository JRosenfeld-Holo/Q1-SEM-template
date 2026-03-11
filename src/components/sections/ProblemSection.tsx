"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { useI18n } from "@/lib/i18n/context";

const PAIN_STATS = [
  { stat: "35%+", label: "avg price increase mid-contract, with zero warning" },
  { stat: "Weeks", label: "average time to resolve a connectivity support ticket" },
  { stat: "1 carrier", label: "no redundancy, no failover. A single point of failure" },
];

export function ProblemSection() {
  const { t } = useI18n();
  return (
    <section id="solutions" className="py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p
            className="text-sm tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "var(--font-messina-var)", color: "#c9a84c" }}
          >
            {t.problem.eyebrow}
          </p>
          <h2
            className="font-medium text-3xl md:text-4xl lg:text-5xl mb-10 md:mb-14 max-w-2xl leading-[1.1]"
            style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-text)" }}
          >
            {t.problem.headline}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
          {PAIN_STATS.map((item, i) => (
            <FadeIn key={item.stat} delay={i * 0.08}>
              <div>
                <p
                  className="text-3xl md:text-4xl font-semibold mb-2 tabular-nums"
                  style={{ fontFamily: "var(--font-roobert-var)", color: "#c9a84c" }}
                >
                  {item.stat}
                </p>
                <p
                  className="text-sm leading-snug"
                  style={{ fontFamily: "var(--font-messina-var)", color: "var(--theme-text-muted)" }}
                >
                  {item.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
