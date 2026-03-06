"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";

// ── Icons ─────────────────────────────────────────────────────────────────────
function IconCamera() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
    </svg>
  );
}
function IconMap() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="3 11 22 2 13 21 11 13 3 11"/>
    </svg>
  );
}
function IconBot() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="11" width="18" height="10" rx="2"/><path d="M12 11V5"/><circle cx="12" cy="4" r="1"/><path d="M8 15h.01M16 15h.01"/><path d="M7 11V8a5 5 0 0 1 10 0v3"/>
    </svg>
  );
}
function IconHeart() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  );
}
function IconZap() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  );
}
function IconWifi() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1" fill="currentColor"/>
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
    pain: "A security camera on a single carrier is one outage away from a compliance failure — and a furious customer. When AT&T and Verizon both had network outages, Verkada's 28,000+ Hologram-powered devices never missed a frame.",
    solution: [
      "Automatic multi-carrier failover — cameras stay online when any single carrier goes down",
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
    pain: "Containers cross borders. Fleets go international. Managing carrier contracts per country kills expansion before it starts. Tracking gaps mean blind spots — and blind spots mean liability.",
    solution: [
      "Multi-carrier SIM that works in 200+ countries — no renegotiating per market",
      "Pause unused SIMs to stop billing on idle assets and seasonal fleets",
      "Pay only for the data each device actually uses — predictable cost at scale",
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
    pain: "WiFi fails where robots work hardest — in open fields, dense warehouses, and high-interference environments. A dropped connection means a stopped robot. A stopped robot means idle workers, missed harvests, and delayed operations.",
    solution: [
      "Cellular that works where factory WiFi can't — no dead zones from metal interference",
      "Multi-carrier failover so a single carrier outage never stops your fleet",
      "5G-ready for latency-critical navigation and real-time command-and-control",
    ],
    stat: { value: "5,000+", label: "Fieldin autonomous farm vehicles with zero downtime" },
    quote: "Our business can't afford downtime. With Hologram, latency is very low — we don't lose signal.",
    customer: "Fieldin",
  },
  {
    id: "healthcare",
    label: "Patient Monitoring",
    Icon: IconHeart,
    headline: "Cellular that reaches every patient.",
    subhead: "No WiFi, no app, no patient setup — just works.",
    pain: "15% of US adults don't own a smartphone. Bluetooth-dependent RPM excludes the patients who need remote care most. Rural patients with weak broadband can't rely on WiFi-dependent devices. Every missed reading is missed CMS reimbursement.",
    solution: [
      "Cellular-first devices that transmit out of the box — no WiFi or app required",
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
    pain: "25%+ of public EV chargers report downtime issues — connectivity failures are the top culprit. A charger that can't process payments is a liability. With federal NEVI funding now requiring credit card capability, reliable cellular isn't optional.",
    solution: [
      "Multi-carrier SIM per charger ensures payment processing survives any carrier outage",
      "Remote diagnostics and firmware delivery without truck rolls to each site",
      "One connectivity solution for charger networks spanning highway corridors, lots, and garages",
    ],
    stat: { value: "19.1%", label: "CAGR in EV charger cellular connectivity — every new charger needs a SIM" },
    quote: "Our charging network spans highway corridors, parking structures, and event venues. Single-carrier coverage doesn't hold up across all of them. Hologram keeps every station online.",
    customer: "ChargeFuse",
  },
  {
    id: "sensors",
    label: "Remote Sensors",
    Icon: IconWifi,
    headline: "One SIM to manage sensors across 200+ countries.",
    subhead: "Deploy globally without per-region carrier contracts.",
    pain: "Managing carrier contracts country-by-country at sensor scale is a full-time operational burden. Remote and rural locations have spotty single-carrier coverage. Seasonal deployments billing through dormancy waste budget that should go to product.",
    solution: [
      "Low-data pricing from $0.10/month per device — Cat-M1 and NB-IoT ready",
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
  const [active, setActive] = useState<UseCaseId>("security-video");

  const current = USE_CASES.find((u) => u.id === active)!;

  return (
    <section id="use-cases" className="py-16 md:py-24 px-6 md:px-12 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p
            className="text-sm text-brand-lime tracking-[0.2em] uppercase mb-5"
            style={{ fontFamily: "var(--font-messina-var)" }}
          >
            Use cases
          </p>
          <h2
            className="font-medium text-3xl md:text-4xl lg:text-5xl text-white mb-6 max-w-2xl leading-[1.1]"
            style={{ fontFamily: "var(--font-roobert-var)" }}
          >
            Built for the devices your business depends on.
          </h2>
          <p
            className="text-white/80 text-lg md:text-xl mb-10 md:mb-14 max-w-xl leading-relaxed"
            style={{ fontFamily: "var(--font-inter-var)" }}
          >
            From cameras to charging stations to robots — Hologram keeps every connected device online.
          </p>
        </FadeIn>

        {/* Tab navigation */}
        <FadeIn delay={0.08}>
          <div
            className="flex flex-nowrap overflow-x-auto gap-2 mb-10 pb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            role="tablist"
            aria-label="Use cases"
          >
            {USE_CASES.map((u) => {
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
                    ${isActive
                      ? "bg-brand-lime/10 border-brand-lime/40 text-brand-lime"
                      : "border-white/[0.10] text-white/75 hover:text-white hover:border-white/30"
                    }
                  `}
                  style={{ fontFamily: "var(--font-inter-var)" }}
                >
                  <span className={isActive ? "text-brand-lime" : "text-white/55"}>
                    <u.Icon />
                  </span>
                  {u.label}
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
            <div className="lg:col-span-3 rounded-2xl border border-white/[0.12] bg-white/[0.05] p-6 md:p-10 flex flex-col gap-8">
              <div>
                <h3
                  className="font-medium text-2xl md:text-3xl text-white mb-2 leading-snug"
                  style={{ fontFamily: "var(--font-roobert-var)" }}
                >
                  {current.headline}
                </h3>
                <p
                  className="text-brand-lime/80 text-sm mb-6"
                  style={{ fontFamily: "var(--font-messina-var)" }}
                >
                  {current.subhead}
                </p>
                <p
                  className="text-white/80 text-base leading-relaxed mb-8"
                  style={{ fontFamily: "var(--font-inter-var)" }}
                >
                  {current.pain}
                </p>

                {/* Solution bullets */}
                <ul className="flex flex-col gap-3">
                  {current.solution.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="text-brand-lime shrink-0 mt-0.5">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                          <circle cx="7" cy="7" r="6" stroke="#bffd11" strokeWidth="1.2"/>
                          <path d="M4.5 7L6.5 9L9.5 5" stroke="#bffd11" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span
                        className="text-base text-white/85 leading-relaxed"
                        style={{ fontFamily: "var(--font-inter-var)" }}
                      >
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: stat + quote — spans 2 cols */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Stat card */}
              <div className="flex-1 rounded-2xl border border-white/[0.12] bg-white/[0.05] p-6 md:p-8 flex flex-col justify-center">
                <p
                  className="text-4xl md:text-5xl lg:text-6xl font-semibold text-brand-lime leading-none mb-3"
                  style={{ fontFamily: "var(--font-roobert-var)" }}
                >
                  {current.stat.value}
                </p>
                <p
                  className="text-base text-white/65 leading-snug"
                  style={{ fontFamily: "var(--font-inter-var)" }}
                >
                  {current.stat.label}
                </p>
              </div>

              {/* Quote card */}
              <div className="rounded-2xl border border-white/[0.12] bg-white/[0.05] p-6 md:p-8">
                <blockquote
                  className="text-base text-white/85 leading-relaxed italic mb-4"
                  style={{ fontFamily: "var(--font-inter-var)" }}
                >
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
                <p
                  className="text-sm text-white/65 uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-messina-var)" }}
                >
                  — {current.customer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
