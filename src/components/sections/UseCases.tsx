"use client";

import { useState } from "react";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { useI18n } from "@/lib/i18n/context";

const CUSTOMER_LOGOS: Record<string, { src: string; w: number; h: number }> = {
  "Verkada": { src: "/customer-logos/verkada.png", w: 56, h: 44 },
  "Fieldin": { src: "/customer-logos/fieldin.png", w: 143, h: 28 },
};

// ── Icons ─────────────────────────────────────────────────────────────────────
function IconCamera() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M23 7l-7 5 7 5V7z" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  );
}
function IconMap() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  );
}
function IconBot() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="11" width="18" height="10" rx="2" /><path d="M12 11V5" /><circle cx="12" cy="4" r="1" /><path d="M8 15h.01M16 15h.01" /><path d="M7 11V8a5 5 0 0 1 10 0v3" />
    </svg>
  );
}
function IconHeart() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}
function IconZap() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
function IconWifi() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><circle cx="12" cy="20" r="1" fill="currentColor" />
    </svg>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────
const USE_CASES = [
  {
    id: "security-video",
    label: "Security & Video",
    Icon: IconCamera,
    headline: "Cameras that can't go dark.",
    subhead: "Multi-carrier failover for mission-critical video.",
    pain: "A security camera on a single carrier is one outage away from a compliance failure and a furious customer. When AT&T and Verizon both had network outages, Verkada's 28,000+ Hologram-powered devices never missed a frame.",
    solution: [
      "Automatic multi-carrier failover: cameras stay online when any single carrier goes down",
      "Pre-certified Verizon path eliminates $20K+ self-certification for US deployments",
      "One SIM per device for indoor, outdoor, and remote camera deployments worldwide",
    ],
    stat: { value: "28,000+", label: "Verkada cameras on Hologram across 85 countries" },
    quote: "When AT&T and Verizon both had outages this year, our devices never went down. That's the flexibility Hologram gives us.",
    customer: "Verkada",
  },
  {
    id: "fleet-tracking",
    label: "Fleet Tracking",
    Icon: IconMap,
    headline: "One SIM for every route, every border.",
    subhead: "Global coverage without per-country carrier contracts.",
    pain: "Containers cross borders. Fleets go international. Managing carrier contracts per country kills expansion before it starts. Tracking gaps mean blind spots, and blind spots mean liability.",
    solution: [
      "Multi-carrier SIM that works in 190+ countries, no renegotiating per market",
      "Pause unused SIMs to stop billing on idle assets and seasonal fleets",
      "Pay only for the data each device actually uses, predictable cost at scale",
    ],
    stat: { value: "126", label: "Carriers reached by Purfresh in 54 countries in a single month" },
    quote: "We used to discuss changing carriers quite a lot. When we made the decision to move to Hologram, the discussion stopped.",
    customer: "Intelligent Cargo Systems",
  },
  {
    id: "robotics",
    label: "Robotics",
    Icon: IconBot,
    headline: "Connectivity that keeps robots in motion.",
    subhead: "Cellular where factory WiFi fails.",
    pain: "WiFi fails where robots work hardest: in open fields, dense warehouses, and high-interference environments. A dropped connection means a stopped robot. A stopped robot means idle workers, missed harvests, and delayed operations.",
    solution: [
      "Cellular that works where factory WiFi can't, no dead zones from metal interference",
      "Multi-carrier failover so a single carrier outage never stops your fleet",
      "5G-ready for latency-critical navigation and real-time command-and-control",
    ],
    stat: { value: "6,000+", label: "Fieldin autonomous farm vehicles with zero downtime" },
    quote: "Our business can't afford downtime. With Hologram, latency is very low and we don't lose signal.",
    customer: "Fieldin",
  },
  {
    id: "healthcare",
    label: "Patient Monitoring",
    Icon: IconHeart,
    headline: "Cellular that reaches every patient.",
    subhead: "No WiFi, no app, no patient setup. Just works.",
    pain: "15% of US adults don't own a smartphone. Bluetooth-dependent RPM excludes the patients who need remote care most. Rural patients with weak broadband can't rely on WiFi-dependent devices. Every missed reading is missed CMS reimbursement.",
    solution: [
      "Cellular-first devices that transmit out of the box, no WiFi or app required",
      "Multi-carrier coverage for rural deployments where single-carrier has gaps",
      "Private APN for HIPAA-compliant PHI transmission without infrastructure overhead",
    ],
    stat: { value: "190+", label: "Countries where Hologram connects remote patient monitoring devices" },
    quote: "Hologram's complete coverage helps ensure that all of our patients are served.",
    customer: "Vital Health Links",
  },
  {
    id: "ev-charging",
    label: "EV Charging",
    Icon: IconZap,
    headline: "Payments that process on every charge.",
    subhead: "Always-on cellular for NEVI-compliant chargers.",
    pain: "25%+ of public EV chargers report downtime issues. Connectivity failures are the top culprit. A charger that can't process payments is a liability. With federal NEVI funding now requiring credit card capability, reliable cellular isn't optional.",
    solution: [
      "Multi-carrier SIM per charger ensures payment processing survives any carrier outage",
      "Remote diagnostics and firmware delivery without truck rolls to each site",
      "One connectivity solution for charger networks spanning highway corridors, lots, and garages",
    ],
    stat: { value: "19.1%", label: "CAGR in EV charger cellular connectivity. Every new charger needs a SIM" },
    quote: "Our charging network spans highway corridors, parking structures, and event venues. Single-carrier coverage doesn't hold up across all of them. Hologram keeps every station online.",
    customer: "ChargeFuse",
  },
  {
    id: "sensors",
    label: "Remote Sensors",
    Icon: IconWifi,
    headline: "One SIM to manage sensors across 190+ countries.",
    subhead: "Deploy globally without per-region carrier contracts.",
    pain: "Managing carrier contracts country-by-country at sensor scale is a full-time operational burden. Remote and rural locations have spotty single-carrier coverage. Seasonal deployments billing through dormancy waste budget that should go to product.",
    solution: [
      "Low-data pricing from $0.10/month per device, Cat-M1 and NB-IoT ready",
      "Pause SIMs on seasonal sensors to stop billing on inactive devices",
      "API-first platform to manage thousands of devices from a single dashboard",
    ],
    stat: { value: "14", label: "Countries on 6 continents where Arable monitors crops on Hologram" },
    quote: "With Hologram, we get the ability to scale on top of systems that we trust and we get to do it in a cost-effective way.",
    customer: "Arable",
  },
] as const;

type UseCaseId = (typeof USE_CASES)[number]["id"];

// ── Component ─────────────────────────────────────────────────────────────────
export function UseCases() {
  const { t } = useI18n();
  const [active, setActive] = useState<UseCaseId>("security-video");

  const currentIdx = USE_CASES.findIndex((u) => u.id === active);
  const current = USE_CASES[currentIdx];
  const card = t.useCases.cards[currentIdx];

  return (
    <section
      id="use-cases"
      className="py-16 md:py-24 px-6 md:px-12"
      style={{ borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "var(--theme-border-subtle)" }}
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p
            className="text-sm tracking-[0.2em] uppercase mb-5"
            style={{ fontFamily: "var(--font-messina-var)", color: "var(--theme-accent)" }}
          >
            {t.useCases.eyebrow}
          </p>
          <h2
            className="font-medium text-3xl md:text-4xl lg:text-5xl mb-6 max-w-2xl leading-[1.1]"
            style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-text)" }}
          >
            {t.useCases.headline}
          </h2>
          <p
            className="text-lg md:text-xl mb-10 md:mb-14 max-w-xl leading-relaxed"
            style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-text-secondary)" }}
          >
            {t.useCases.sub}
          </p>
        </FadeIn>

        {/* Tab navigation */}
        <FadeIn delay={0.08}>
          <div
            className="flex flex-nowrap overflow-x-auto gap-2 mb-10 pb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            role="tablist"
            aria-label="Use cases"
          >
            {USE_CASES.map((u, i) => {
              const isActive = u.id === active;
              return (
                <button
                  key={u.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${u.id}`}
                  onClick={() => setActive(u.id)}
                  className={`
                    inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium whitespace-nowrap shrink-0
                    border transition-all duration-200 cursor-pointer
                  `}
                  style={
                    isActive
                      ? {
                        fontFamily: "var(--font-roobert-var)",
                        backgroundColor: "var(--theme-accent-bg)",
                        borderColor: "var(--theme-accent-border)",
                        color: "var(--theme-accent)",
                      }
                      : {
                        fontFamily: "var(--font-roobert-var)",
                        borderColor: "var(--theme-border)",
                        color: "var(--theme-text-secondary)",
                      }
                  }
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = "#bffd11";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = "var(--theme-border)";
                    }
                  }}
                >
                  <span style={{ color: isActive ? "var(--theme-accent)" : "var(--theme-text-muted)" }}>
                    <u.Icon />
                  </span>
                  {t.useCases.tabs[i] ?? u.label}
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Content panel */}
        <div
          id={`panel-${current.id}`}
          role="tabpanel"
          aria-label={current.label}
          key={current.id}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Left: main content — spans 3 cols */}
            <div
              className="lg:col-span-3 rounded-2xl p-6 md:p-10 flex flex-col gap-8"
              style={{
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "var(--theme-border)",
                backgroundColor: "var(--theme-surface)",
                boxShadow: "var(--theme-card-shadow)",
              }}
            >
              <div>
                <h3
                  className="font-medium text-2xl md:text-3xl mb-2 leading-snug"
                  style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-text)" }}
                >
                  {card?.headline ?? current.headline}
                </h3>
                <p
                  className="text-sm mb-6"
                  style={{ fontFamily: "var(--font-messina-var)", color: "var(--theme-accent-muted)" }}
                >
                  {card?.subhead ?? current.subhead}
                </p>
                <p
                  className="text-base leading-relaxed mb-8"
                  style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-text-secondary)" }}
                >
                  {card?.pain ?? current.pain}
                </p>

                {/* Solution bullets */}
                <ul className="flex flex-col gap-3">
                  {current.solution.map((point, idx) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="shrink-0 mt-0.5" style={{ color: "var(--theme-accent)" }}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                          <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
                          <path d="M4.5 7L6.5 9L9.5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span
                        className="text-base leading-relaxed"
                        style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-text-secondary)" }}
                      >
                        {card?.solution[idx] ?? point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: stat + quote — spans 2 cols */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Stat card */}
              <div
                className="flex-1 rounded-2xl p-6 md:p-8 flex flex-col justify-center"
                style={{
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "var(--theme-border)",
                  backgroundColor: "var(--theme-surface)",
                  boxShadow: "var(--theme-card-shadow)",
                }}
              >
                <p
                  className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-none mb-3"
                  style={{ fontFamily: "var(--font-messina-var)", color: "var(--theme-accent)" }}
                >
                  {current.stat.value}
                </p>
                <p
                  className="text-base leading-snug"
                  style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-text-muted)" }}
                >
                  {card?.statLabel ?? current.stat.label}
                </p>
              </div>

              {/* Quote card */}
              <div
                className="rounded-2xl p-6 md:p-8"
                style={{
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "var(--theme-border)",
                  backgroundColor: "var(--theme-surface)",
                  boxShadow: "var(--theme-card-shadow)",
                }}
              >
                <blockquote
                  className="text-base leading-relaxed italic mb-4"
                  style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-text-secondary)" }}
                >
                  &ldquo;{card?.quote ?? current.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  {CUSTOMER_LOGOS[current.customer] && (
                    <Image
                      src={CUSTOMER_LOGOS[current.customer].src}
                      alt={current.customer}
                      width={CUSTOMER_LOGOS[current.customer].w}
                      height={CUSTOMER_LOGOS[current.customer].h}
                      style={{
                        width: "auto",
                        height: `${CUSTOMER_LOGOS[current.customer].h}px`,
                        maxWidth: "80px",
                        objectFit: "contain",
                        filter: "var(--theme-logo-filter)",
                        opacity: 0.7,
                      }}
                      draggable={false}
                    />
                  )}
                  <p
                    className="text-sm uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-messina-var)", color: "var(--theme-text-muted)" }}
                  >
                    — {current.customer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
