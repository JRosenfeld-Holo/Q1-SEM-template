"use client";

import { useEffect, useRef, useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { useI18n } from "@/lib/i18n/context";

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




function StatItem({
  prefix,
  value,
  suffix,
  decimals,
  label,
}: { prefix: string; value: number; suffix: string; decimals: number; label: string }) {
  const { value: count, ref } = useCountUp(value, 2000, decimals);

  return (
    <div className="text-center">
      <div
        className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-2 tabular-nums"
        style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-accent)" }}
      >
        <span ref={ref}>
          {prefix}
          {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
          {suffix}
        </span>
      </div>
      <p
        className="text-sm leading-snug mx-auto font-medium"
        style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-text-muted)" }}
      >
        {label}
      </p>
    </div>
  );
}

export function StatsBar() {
  const { t } = useI18n();

  const STATS = [
    { prefix: "", value: 50, suffix: "%", decimals: 0, label: t.stats.labels[0] },
    { prefix: "", value: 99.95, suffix: "%", decimals: 2, label: t.stats.labels[1] },
    { prefix: "", value: 550, suffix: "+", decimals: 0, label: t.stats.labels[2] },
    { prefix: "", value: 6000, suffix: "+", decimals: 0, label: t.stats.labels[3] },
  ];

  return (
    <section
      className="py-14 md:py-20 px-6"
      style={{
        borderTopWidth: "1px",
        borderBottomWidth: "1px",
        borderStyle: "solid",
        borderColor: "var(--theme-border-subtle)",
      }}
    >
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
