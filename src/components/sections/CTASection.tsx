import { FadeIn } from "@/components/ui/FadeIn";

export function CTASection() {
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
            className="text-xs text-brand-lime tracking-[0.2em] uppercase mb-6"
            style={{ fontFamily: "var(--font-messina-var)" }}
          >
            Get connected
          </p>
          <h2
            className="font-medium text-5xl md:text-6xl text-white mb-6 leading-[1.05]"
            style={{ fontFamily: "var(--font-roobert-var)" }}
          >
            Ready to stop fighting your connectivity provider?
          </h2>
          <p
            className="text-white/55 text-lg mb-10 leading-relaxed"
            style={{ fontFamily: "var(--font-inter-var)" }}
          >
            Start with a free developer account and 1 SIM. Scale to
            1,000,000. No minimums, no contracts, and predictable pricing
            that protects your unit economics.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://dashboard.hologram.io/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-lime text-black font-semibold text-sm cursor-pointer hover:shadow-lime-glow-lg transition-all duration-300"
              style={{ fontFamily: "var(--font-inter-var)" }}
            >
              Start building for free
            </a>
            <a
              href="mailto:sales@hologram.io"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 text-white text-sm cursor-pointer hover:border-brand-lime hover:text-brand-lime transition-all duration-300"
              style={{ fontFamily: "var(--font-inter-var)" }}
            >
              Talk to an IoT expert
            </a>
          </div>

          {/* CTA value props */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto">
            {[
              "Multi-carrier uptime with 99.95% SLA",
              "Transparent, predictable pricing",
              "Dedicated engineering support, not ticket queues",
            ].map((line) => (
              <div
                key={line}
                className="flex items-center gap-2 text-xs text-white/40"
                style={{ fontFamily: "var(--font-inter-var)" }}
              >
                <span className="text-brand-lime shrink-0">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 6L5 9L10 3"
                      stroke="#bffd11"
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
