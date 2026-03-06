import { FadeIn } from "@/components/ui/FadeIn";

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
  return (
    <section className="py-24 px-6 md:px-12 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p
                className="text-sm text-brand-lime tracking-[0.2em] uppercase mb-4"
                style={{ fontFamily: "var(--font-messina-var)" }}
              >
                HyperSIM
              </p>
              <h2
                className="font-medium text-4xl md:text-5xl text-white leading-[1.1] max-w-xl"
                style={{ fontFamily: "var(--font-roobert-var)" }}
              >
                One SIM that never locks you into a single carrier
              </h2>
            </div>

          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {FEATURES.map((f, i) => (
            <FadeIn key={f.label} delay={i * 0.08}>
              <div className="h-full p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:border-brand-lime/20 hover:bg-white/[0.035] transition-all duration-300 cursor-default">
                <span
                  className="block text-sm text-brand-lime tracking-[0.18em] uppercase mb-4"
                  style={{ fontFamily: "var(--font-messina-var)" }}
                >
                  {f.label}
                </span>
                <h3
                  className="font-medium text-xl text-white mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-roobert-var)" }}
                >
                  {f.headline}
                </h3>
                <p
                  className="text-base text-white/80 leading-relaxed mb-6"
                  style={{ fontFamily: "var(--font-inter-var)" }}
                >
                  {f.body}
                </p>
                <div className="flex items-baseline gap-2">
                  <span
                    className="text-3xl font-semibold text-brand-lime"
                    style={{ fontFamily: "var(--font-roobert-var)" }}
                  >
                    {f.stat}
                  </span>
                  <span
                    className="text-sm text-white/65"
                    style={{ fontFamily: "var(--font-messina-var)" }}
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
