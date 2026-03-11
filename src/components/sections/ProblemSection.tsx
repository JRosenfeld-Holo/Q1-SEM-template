"use client";

import { FadeIn } from "@/components/ui/FadeIn";

export function ProblemSection() {
  return (
    <section id="solutions" className="py-10 md:py-14 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <FadeIn>
          <p
            className="text-lg md:text-xl lg:text-2xl leading-relaxed"
            style={{
              fontFamily: "var(--font-inter-var)",
              color: "var(--theme-text-secondary)",
            }}
          >
            Tired of{" "}
            <span style={{ color: "var(--theme-text)", fontWeight: 500 }}>surprise price hikes</span>,{" "}
            <span style={{ color: "var(--theme-text)", fontWeight: 500 }}>single-carrier dead zones</span>, and{" "}
            <span style={{ color: "var(--theme-text)", fontWeight: 500 }}>week-long support tickets</span>?{" "}
            <a
              href="#products"
              className="inline-flex items-center gap-1 transition-colors duration-200"
              style={{ color: "var(--theme-accent)", fontWeight: 600 }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              See how Hologram solves this
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginTop: 1 }}>
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
