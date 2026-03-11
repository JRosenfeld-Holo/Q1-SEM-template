"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { useI18n } from "@/lib/i18n/context";

const FEATURES = [
  {
    label: "Global Coverage",
    headline: "550+ carriers, zero coverage gaps",
    body: "Connect across AT&T, T-Mobile, Verizon, and 550+ global carrier partners with a single SIM. HyperSIM intelligently selects the strongest network — so vehicles, cameras, and sensors stay online everywhere they operate.",
    stat: "550+",
    statLabel: "Carrier partners",
  },
  {
    label: "Outage Protection",
    headline: "Automatic failover before you lose a single transaction",
    body: "Multiple independent cores on every SIM provide redundant paths. If an outage is detected, HyperSIM switches to the backup network in seconds — not minutes. We put 99.95% uptime in the contract, not just the marketing.",
    stat: "99.95%",
    statLabel: "Uptime SLA",
  },
  {
    label: "Native Profiles",
    headline: "Built for video, fleet, and high-bandwidth IoT",
    body: "Native carrier profiles deliver up to 500 Mb/s throughput and latency as low as 40ms. Purpose-built for video telematics, autonomous vehicles, real-time surveillance, and any application where bandwidth isn't optional.",
    stat: "500 Mb/s",
    statLabel: "Peak throughput",
  },
  {
    label: "Future Ready",
    headline: "Future-proof with over-the-air provisioning",
    body: "Push carrier profile updates remotely through the entire device lifecycle. No truck rolls, no SIM swaps, no hardware touches. Add new carrier profiles, switch networks, and re-provision — all over the air.",
    stat: "eUICC",
    statLabel: "OTA provisioning",
  },
];

export function HyperSIMProduct() {
  const { t } = useI18n();
  return (
    <section
      className="py-16 md:py-24 px-6 md:px-12"
      style={{ borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "var(--theme-border-subtle)" }}
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-16">
            <div>
              <p
                className="text-sm tracking-[0.2em] uppercase mb-4"
                style={{ fontFamily: "var(--font-messina-var)", color: "var(--theme-accent)" }}
              >
                {t.hyperSIM.eyebrow}
              </p>
              <h2
                className="font-medium text-3xl md:text-4xl lg:text-5xl leading-[1.1] max-w-xl"
                style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-text)" }}
              >
                {t.hyperSIM.headline}
              </h2>
            </div>

          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {FEATURES.map((f, i) => (
            <FadeIn key={f.label} delay={i * 0.08}>
              <div
                className="h-full p-6 md:p-8 rounded-2xl transition-all duration-300 cursor-default"
                style={{
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "var(--theme-border)",
                  backgroundColor: "var(--theme-surface)",
                  boxShadow: "var(--theme-card-shadow)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--theme-border-strong)"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.backgroundColor = "var(--theme-surface-hover)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--theme-border)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.backgroundColor = "var(--theme-surface)"; }}
              >
                <span
                  className="block text-sm tracking-[0.18em] uppercase mb-4"
                  style={{ fontFamily: "var(--font-messina-var)", color: "var(--theme-accent)" }}
                >
                  {f.label}
                </span>
                <h3
                  className="font-medium text-xl mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-text)" }}
                >
                  {f.headline}
                </h3>
                <p
                  className="text-base leading-relaxed mb-6"
                  style={{ fontFamily: "var(--font-inter-var)", color: "var(--theme-text-secondary)" }}
                >
                  {f.body}
                </p>
                <div className="flex items-baseline gap-2">
                  <span
                    className="text-3xl font-semibold"
                    style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-accent)" }}
                  >
                    {f.stat}
                  </span>
                  <span
                    className="text-sm"
                    style={{ fontFamily: "var(--font-messina-var)", color: "var(--theme-text-muted)" }}
                  >
                    {f.statLabel}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
