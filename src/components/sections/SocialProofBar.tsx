import Image from "next/image";

// Aspect ratios: verkada 205×162 (1.27:1 — nearly square, needs larger render height)
// All others are wide wordmarks rendered at h=28; Verkada at h=44 to match visual weight.
const LOGOS: { name: string; src: string; renderH: number; renderW: number }[] = [
  { name: "Verkada",     src: "/customer-logos/verkada.png",      renderH: 44, renderW: 56  }, // 205/162 × 44
  { name: "Sunday Power",src: "/customer-logos/sunday-power.png", renderH: 28, renderW: 155 }, // 7728/1394 × 28
  { name: "Everactive",  src: "/customer-logos/everactive.png",   renderH: 28, renderW: 87  }, // 623/201 × 28
  { name: "Fieldin",     src: "/customer-logos/fieldin.png",       renderH: 28, renderW: 143 }, // 602/118 × 28
  { name: "Metropolis",  src: "/customer-logos/metropolis.png",   renderH: 28, renderW: 136 }, // 194/40 × 28
  { name: "Suzo-Happ",   src: "/customer-logos/suzohapp.png",     renderH: 20, renderW: 215 }, // 3354/312 × 20
  { name: "UgoWork",     src: "/customer-logos/ugowork.avif",     renderH: 28, renderW: 64  }, // 1600/704 × 28
];

function LogoList({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      className="flex items-center shrink-0"
      aria-hidden={ariaHidden || undefined}
    >
      {LOGOS.map((logo, i) => (
        <li key={`${logo.name}-${i}`} className="flex items-center">
          <span className="px-10 md:px-14 opacity-35 hover:opacity-60 transition-opacity duration-300 flex items-center">
            <Image
              src={logo.src}
              alt={logo.name}
              width={logo.renderW}
              height={logo.renderH}
              style={{ width: "auto", height: `${logo.renderH}px` }}
              draggable={false}
            />
          </span>
          <span className="text-white/10 text-xs" aria-hidden="true">·</span>
        </li>
      ))}
    </ul>
  );
}

export function SocialProofBar() {
  return (
    <section className="py-10 border-t border-white/[0.06] overflow-hidden">
      <p
        className="text-xs text-brand-lime tracking-[0.18em] uppercase text-center mb-7"
        style={{ fontFamily: "var(--font-messina-var)" }}
      >
        Powering mission-critical IoT for 5,000+ companies
      </p>

      {/* Marquee track */}
      <div className="relative overflow-hidden">
        {/* Edge fades */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #000000, transparent)" }}
          aria-hidden="true"
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #000000, transparent)" }}
          aria-hidden="true"
        />

        <div className="flex animate-marquee" aria-label="Customer logos">
          <LogoList />
          <LogoList ariaHidden />
        </div>
      </div>
    </section>
  );
}
