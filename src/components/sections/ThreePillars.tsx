import { FadeIn } from "@/components/ui/FadeIn";

// Checkmark SVG for feature lists
function Check({ color = "#53f2fa" }: { color?: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <path d="M2.5 6.5L5.5 9.5L10.5 3.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ThreePillars() {
  return (
    <section id="products" className="py-16 md:py-24 px-6 md:px-12 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p
            className="text-sm text-brand-lime tracking-[0.2em] uppercase mb-5"
            style={{ fontFamily: "var(--font-messina-var)" }}
          >
            How Hologram is different
          </p>
          <h2
            className="font-medium text-3xl md:text-4xl lg:text-5xl text-white mb-8 md:mb-12 max-w-2xl leading-[1.1]"
            style={{ fontFamily: "var(--font-roobert-var)" }}
          >
            Carrier-grade connectivity without the carrier headaches.
          </h2>
        </FadeIn>

        {/* Dark Bento Grid — 5-column desktop */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:grid-rows-2">

          {/* ── RELIABILITY — dominant card (3/5 cols, full height) ── */}
          <FadeIn
            delay={0.05}
            className="md:col-span-3 md:row-span-2 rounded-2xl border border-brand-cyan/30 overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(83,242,250,0.08) 0%, rgba(255,255,255,0.03) 60%, transparent 100%)" } as React.CSSProperties}
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
                  className="font-medium text-2xl md:text-3xl text-white leading-snug max-w-sm"
                  style={{ fontFamily: "var(--font-roobert-var)" }}
                >
                  Multi-carrier redundancy, not single-carrier risk.
                </h3>
                <p
                  className="text-base text-white/80 leading-relaxed max-w-md"
                  style={{ fontFamily: "var(--font-inter-var)" }}
                >
                  HyperSIM connects across 550+ carriers. If one network falters, your devices
                  automatically switch — before your customers notice.
                </p>

                <ul className="flex flex-col gap-2.5 mt-2">
                  {[
                    "Multi-carrier automatic failover",
                    "Real-time outage detection",
                    "Zero-touch remediation",
                    "99.95% uptime SLA (historical 99.99%)",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-base text-white/80" style={{ fontFamily: "var(--font-inter-var)" }}>
                      <Check color="#53f2fa" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Big stat */}
              <div className="mt-8 pt-7 border-t border-white/[0.07]">
                <p
                  className="text-4xl md:text-5xl lg:text-6xl font-semibold text-brand-cyan leading-none tabular-nums"
                  style={{ fontFamily: "var(--font-roobert-var)" }}
                >
                  99.95%
                </p>
                <p
                  className="text-sm text-white/65 mt-2"
                  style={{ fontFamily: "var(--font-messina-var)" }}
                >
                  Uptime SLA — contractually guaranteed
                </p>
              </div>
            </div>
          </FadeIn>

          {/* ── PRICING — top-right (2/5 cols) ── */}
          <FadeIn
            delay={0.12}
            className="md:col-span-2 rounded-2xl border border-brand-lime/30 p-6 md:p-8"
            style={{ background: "linear-gradient(135deg, rgba(191,253,17,0.08) 0%, rgba(255,255,255,0.03) 100%)" } as React.CSSProperties}
          >
            <span
              className="block text-sm text-brand-lime tracking-[0.2em] uppercase font-semibold mb-4"
              style={{ fontFamily: "var(--font-messina-var)" }}
            >
              Pricing
            </span>
            <h3
              className="font-medium text-xl text-white mb-3 leading-snug"
              style={{ fontFamily: "var(--font-roobert-var)" }}
            >
              Transparent pricing you can build a business on.
            </h3>
            <p
              className="text-base text-white/80 leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-inter-var)" }}
            >
              Predictable rates, flexible plans, no hidden fees. Your unit economics stay intact from 10 devices to 10,000.
            </p>
            <div className="flex items-baseline gap-2">
              <span
                className="text-3xl font-semibold text-brand-lime"
                style={{ fontFamily: "var(--font-roobert-var)" }}
              >
                Up to 50%
              </span>
              <span
                className="text-sm text-white/60"
                style={{ fontFamily: "var(--font-messina-var)" }}
              >
                savings vs. carrier direct
              </span>
            </div>
          </FadeIn>

          {/* ── PARTNERSHIP — bottom-right (2/5 cols) ── */}
          <FadeIn
            delay={0.19}
            className="md:col-span-2 rounded-2xl border border-brand-violet/30 p-6 md:p-8"
            style={{ background: "linear-gradient(135deg, rgba(155,89,212,0.08) 0%, rgba(255,255,255,0.03) 100%)" } as React.CSSProperties}
          >
            <span
              className="block text-sm text-brand-violet tracking-[0.2em] uppercase font-semibold mb-4"
              style={{ fontFamily: "var(--font-messina-var)" }}
            >
              Partnership
            </span>
            <h3
              className="font-medium text-xl text-white mb-3 leading-snug"
              style={{ fontFamily: "var(--font-roobert-var)" }}
            >
              An engineering partner, not a support ticket queue.
            </h3>
            <p
              className="text-base text-white/80 leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-inter-var)" }}
            >
              Our solutions engineers dig into modem logs with you. Scale from 1 to 1 million devices with a team that actually picks up the phone.
            </p>
            <div className="flex items-baseline gap-2">
              <span
                className="text-3xl font-semibold text-brand-violet"
                style={{ fontFamily: "var(--font-roobert-var)" }}
              >
                1 → 1M
              </span>
              <span
                className="text-sm text-white/60"
                style={{ fontFamily: "var(--font-messina-var)" }}
              >
                devices with hands-on support
              </span>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
