"use client";

import { useEffect, useRef, useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";

function useCountUp(end: number, duration = 2000, decimals = 0) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setValue(parseFloat((eased * end).toFixed(decimals)));
            if (t < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, decimals]);

  return { value, ref };
}

const STATS = [
  {
    prefix: "Up to ",
    value: 50,
    suffix: "%",
    decimals: 0,
    label: "Lower connectivity costs vs. carrier direct",
  },
  {
    prefix: "",
    value: 99.95,
    suffix: "%",
    decimals: 2,
    label: "Uptime SLA — contractually guaranteed",
  },
  {
    prefix: "",
    value: 550,
    suffix: "+",
    decimals: 0,
    label: "Carrier partners across 190+ countries",
  },
  {
    prefix: "",
    value: 5000,
    suffix: "+",
    decimals: 0,
    label: "IoT teams trust Hologram to keep devices online",
  },
];

function StatItem({
  prefix,
  value,
  suffix,
  decimals,
  label,
}: (typeof STATS)[0]) {
  const { value: count, ref } = useCountUp(value, 2000, decimals);

  return (
    <div className="text-center">
      <div
        className="text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-lime mb-2 tabular-nums"
        style={{ fontFamily: "var(--font-roobert-var)" }}
      >
        <span ref={ref}>
          {prefix}
          {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
          {suffix}
        </span>
      </div>
      <p
        className="text-sm text-white/65 leading-snug max-w-[160px] mx-auto"
        style={{ fontFamily: "var(--font-messina-var)" }}
      >
        {label}
      </p>
    </div>
  );
}

export function StatsBar() {
  return (
    <section className="py-14 md:py-20 px-6 border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
        {STATS.map((s, i) => (
          <FadeIn key={s.label} delay={i * 0.1} direction="none">
            <StatItem {...s} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
