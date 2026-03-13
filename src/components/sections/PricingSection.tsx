"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { useState } from "react";
import { useI18n } from "@/lib/i18n/context";

/* ── Icon components ── */
function CheckIcon({ accent }: { accent?: boolean }) {
    return (
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0">
            <circle cx="10" cy="10" r="10" fill={accent ? "#bffd11" : "rgba(255,255,255,0.08)"} />
            <path d="M6 10.5L8.5 13L14 7" stroke={accent ? "#00040F" : "rgba(255,255,255,0.5)"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}


function ArrowRightIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
        </svg>
    );
}

/* ── Data ── */
const PAYG_FEATURES = [
    { label: "Data", value: "$0.03 / MB" },
    { label: "SIM monthly fee", value: "$1.00 / SIM" },
    { label: "SIM hardware", value: "$3.00 / SIM" },
    { label: "Outbound SMS", value: "$0.19 / msg" },
    { label: "Inbound SMS", value: "Free", highlight: true },
    { label: "Dashboard + REST API", value: "Included", highlight: true },
    { label: "Test data", value: "Free", highlight: true },
];

const ENTERPRISE_PERKS = [
    { label: "Data pooling", value: "Available", highlight: true },
    { label: "Volume discounts", value: "Available", highlight: true },
    { label: "Multi-year prepaid", value: "Available", highlight: true },
    { label: "Flexible contract terms", value: "Fully custom", highlight: true },
];

const ENTERPRISE_EXTRAS = [
    "Dedicated account manager",
    "Custom SLA & uptime guarantee",
    "Priority technical support",
    "Multi-carrier optimization",
];

export function PricingSection() {
    const [hoveredCard, setHoveredCard] = useState<"payg" | "enterprise" | null>(null);
    const { t } = useI18n();

    return (
        <section id="pricing" className="py-20 md:py-32 px-6 relative overflow-hidden">
            {/* Background glow */}
            <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(191,253,17,0.04) 0%, transparent 70%)",
                }}
            />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* ── Header ── */}
                <FadeIn>
                    <div className="text-center mb-16 md:mb-20">
                        <p
                            className="text-xs tracking-[0.2em] uppercase mb-4"
                            style={{ fontFamily: "var(--font-messina-var)", color: "var(--theme-accent)" }}
                        >
                            {t.pricing.eyebrow}
                        </p>
                        <h2
                            className="font-medium text-3xl md:text-4xl lg:text-5xl mb-5 leading-[1.1]"
                            style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-text)" }}
                        >
                            {t.pricing.headline}
                        </h2>
                        <p
                            className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
                            style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-text-muted)" }}
                        >
                            {t.pricing.sub}
                        </p>
                    </div>
                </FadeIn>

                {/* ── Pricing Cards ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                    {/* ═══ PAY-AS-YOU-GO CARD ═══ */}
                    <FadeIn delay={0.05}>
                        <div
                            className="relative rounded-2xl p-8 md:p-10 h-full flex flex-col transition-all duration-300"
                            style={{
                                backgroundColor: "rgba(255,255,255,0.025)",
                                border: "1px solid var(--theme-border)",
                                boxShadow: hoveredCard === "payg" ? "0 0 60px rgba(191,253,17,0.06)" : "none",
                            }}
                            onMouseEnter={() => setHoveredCard("payg")}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Header */}
                            <div className="mb-8">
                                <p
                                    className="text-xs tracking-[0.2em] uppercase mb-3"
                                    style={{ fontFamily: "var(--font-messina-var)", color: "var(--theme-text-muted)" }}
                                >
                                    {t.pricing.selfService}
                                </p>
                                <h3
                                    className="text-2xl md:text-3xl font-medium mb-3"
                                    style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-text)" }}
                                >
                                    {t.pricing.paygName}
                                </h3>
                                <p
                                    className="text-sm leading-relaxed"
                                    style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-text-muted)", minHeight: "60px" }}
                                >
                                    {t.pricing.paygDesc}
                                </p>
                            </div>

                            {/* Price highlight */}
                            <div
                                className="flex items-baseline gap-2 mb-8 pb-8"
                                style={{ borderBottom: "1px solid var(--theme-border-subtle)" }}
                            >
                                <span
                                    className="text-3xl md:text-4xl lg:text-5xl font-semibold"
                                    style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-accent)" }}
                                >
                                    $0.03
                                </span>
                                <span
                                    className="text-base"
                                    style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-text-muted)" }}
                                >
                                    / MB
                                </span>
                            </div>

                            {/* Feature rows */}
                            <div className="flex flex-col gap-0 mb-8 flex-1">
                                {PAYG_FEATURES.map((feat) => (
                                    <div
                                        key={feat.label}
                                        className="flex items-center justify-between py-3"
                                        style={{ borderBottom: "1px solid var(--theme-border-subtle)" }}
                                    >
                                        <span
                                            className="text-sm"
                                            style={{ fontFamily: "var(--font-roobert-var)", color: "var(--theme-text-secondary)" }}
                                        >
                                            {feat.label}
                                        </span>
                                        <span
                                            className="text-sm font-medium"
                                            style={{
                                                fontFamily: "var(--font-messina-var)",
                                                color: feat.highlight ? "var(--theme-accent)" : "var(--theme-text)",
                                            }}
                                        >
                                            {feat.value}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <a
                                href="#free-pilot"
                                className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer"
                                style={{
                                    fontFamily: "var(--font-roobert-var)",
                                    borderWidth: "1px",
                                    borderStyle: "solid",
                                    borderColor: "var(--theme-btn-outline-border)",
                                    color: "var(--theme-btn-outline-text)",
                                    backgroundColor: "transparent",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = "var(--theme-btn-outline-hover-bg)";
                                    e.currentTarget.style.borderColor = "var(--theme-btn-outline-hover-border)";
                                    e.currentTarget.style.transform = "translateY(-2px)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = "transparent";
                                    e.currentTarget.style.borderColor = "var(--theme-btn-outline-border)";
                                    e.currentTarget.style.transform = "translateY(0)";
                                }}
                            >
                                {t.pricing.paygCta}
                                <ArrowRightIcon />
                            </a>
                        </div>
                    </FadeIn>

                    {/* ═══ ENTERPRISE CARD ═══ */}
                    <FadeIn delay={0.12}>
                        <div
                            className="relative rounded-2xl p-8 md:p-10 h-full flex flex-col transition-all duration-300"
                            style={{
                                backgroundColor: "#00040F",
                                border: "1px solid rgba(191,253,17,0.2)",
                                boxShadow: hoveredCard === "enterprise"
                                    ? "0 0 80px rgba(191,253,17,0.08), inset 0 1px 0 rgba(255,255,255,0.06)"
                                    : "inset 0 1px 0 rgba(255,255,255,0.04)",
                            }}
                            onMouseEnter={() => setHoveredCard("enterprise")}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* "Most Popular" badge */}
                            <div
                                className="absolute -top-px left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-b-lg"
                                style={{
                                    backgroundColor: "#bffd11",
                                    boxShadow: "0 4px 20px rgba(191,253,17,0.3)",
                                }}
                            >
                                <span
                                    className="text-[10px] tracking-[0.18em] uppercase font-bold"
                                    style={{ fontFamily: "var(--font-messina-var)", color: "#00040F" }}
                                >
                                    {t.pricing.enterpriseBadge}
                                </span>
                            </div>

                            {/* Subtle grid pattern */}
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 pointer-events-none rounded-2xl"
                                style={{
                                    backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
                  `,
                                    backgroundSize: "32px 32px",
                                    maskImage: "radial-gradient(ellipse at 50% 30%, black 20%, transparent 70%)",
                                    WebkitMaskImage: "radial-gradient(ellipse at 50% 30%, black 20%, transparent 70%)",
                                }}
                            />

                            <div className="relative z-10 flex flex-col h-full pt-4">
                                {/* Header */}
                                <div className="mb-8">
                                    <p
                                        className="text-xs tracking-[0.2em] uppercase mb-3 opacity-0"
                                        style={{ fontFamily: "var(--font-messina-var)" }}
                                    >
                                        &nbsp;
                                    </p>
                                    <h3
                                        className="text-2xl md:text-3xl font-medium mb-3"
                                        style={{ fontFamily: "var(--font-roobert-var)", color: "#ffffff" }}
                                    >
                                        {t.pricing.customPlan}
                                    </h3>
                                    <p
                                        className="text-sm leading-relaxed"
                                        style={{ fontFamily: "var(--font-roobert-var)", color: "rgba(255,255,255,0.55)", minHeight: "60px" }}
                                    >
                                        {t.pricing.enterpriseDesc}
                                    </p>
                                </div>

                                {/* Price highlight */}
                                <div
                                    className="flex items-baseline gap-2 mb-8 pb-8"
                                    style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                                >
                                    <span
                                        className="text-3xl md:text-4xl lg:text-5xl font-semibold"
                                        style={{ fontFamily: "var(--font-roobert-var)", color: "#bffd11" }}
                                    >
                                        Custom
                                    </span>
                                </div>

                                {/* Included perks */}
                                <div className="flex flex-col gap-0 mb-8 flex-1">
                                    {ENTERPRISE_PERKS.map((perk) => (
                                        <div
                                            key={perk.label}
                                            className="flex items-center justify-between py-3"
                                            style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                                        >
                                            <span
                                                className="text-sm"
                                                style={{ fontFamily: "var(--font-roobert-var)", color: "rgba(255,255,255,0.65)" }}
                                            >
                                                {perk.label}
                                            </span>
                                            <span
                                                className="text-sm font-medium"
                                                style={{
                                                    fontFamily: "var(--font-messina-var)",
                                                    color: perk.highlight ? "#bffd11" : "#ffffff",
                                                }}
                                            >
                                                {perk.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Enterprise extras */}
                                <div
                                    className="rounded-xl p-5 mb-8"
                                    style={{
                                        border: "1px solid rgba(191,253,17,0.12)",
                                        backgroundColor: "rgba(191,253,17,0.03)",
                                    }}
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {ENTERPRISE_EXTRAS.map((extra) => (
                                            <div key={extra} className="flex items-center gap-2.5">
                                                <CheckIcon accent />
                                                <span
                                                    className="text-sm"
                                                    style={{ fontFamily: "var(--font-roobert-var)", color: "rgba(255,255,255,0.65)" }}
                                                >
                                                    {extra}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA */}
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer"
                                    style={{
                                        fontFamily: "var(--font-roobert-var)",
                                        backgroundColor: "#bffd11",
                                        color: "#00040F",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = "#d4ff5e";
                                        e.currentTarget.style.transform = "translateY(-2px)";
                                        e.currentTarget.style.boxShadow = "0 8px 30px rgba(191,253,17,0.25)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = "#bffd11";
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.boxShadow = "none";
                                    }}
                                >
                                    {t.pricing.enterpriseCta}
                                    <ArrowRightIcon />
                                </a>
                            </div>
                        </div>
                    </FadeIn>
                </div>

            </div>
        </section>
    );
}
