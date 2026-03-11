"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";

const BADGE_SIZE = 90;

const BADGES: { src: string; alt: string; scale?: number }[] = [
  { src: "/g2-badges/g2_winter_leader.avif", alt: "G2 Winter Leader" },
  { src: "/g2-badges/G2_high_performer.avif", alt: "G2 High Performer" },
  { src: "/g2-badges/g2_best_usability.avif", alt: "G2 Best Usability" },
  { src: "/g2-badges/g2_easiest_to_use.avif", alt: "G2 Easiest to Use" },
  { src: "/g2-badges/g2_easiest_admin.avif", alt: "G2 Easiest Admin" },
  { src: "/g2-badges/g2_easiest set up.avif", alt: "G2 Easiest Setup" },
  { src: "/g2-badges/g2_high_performer_APAC.avif", alt: "G2 High Performer APAC", scale: 0.78 },
  { src: "/g2-badges/G2_EMEA_Winter.avif", alt: "G2 EMEA Winter", scale: 0.78 },
];

export function G2Strip() {
  return (
    <section
      className="py-14 md:py-20 px-6"
      style={{
        borderTopWidth: "1px",
        borderTopStyle: "solid",
        borderTopColor: "var(--theme-border-subtle)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p
            className="text-xs tracking-[0.2em] uppercase text-center mb-8"
            style={{ fontFamily: "var(--font-messina-var)", color: "var(--theme-text-muted)" }}
          >
            Recognized by G2 — the world&apos;s largest software review platform
          </p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {BADGES.map((badge) => {
              const s = badge.scale ?? 1;
              const w = Math.round(BADGE_SIZE * s);
              const h = Math.round(BADGE_SIZE * s);
              return (
                <div
                  key={badge.alt}
                  style={{ width: `${BADGE_SIZE}px`, height: `${BADGE_SIZE}px`, display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    width={w}
                    height={h}
                    style={{ width: `${w}px`, height: `${h}px`, objectFit: "contain", opacity: 0.9 }}
                    draggable={false}
                  />
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
