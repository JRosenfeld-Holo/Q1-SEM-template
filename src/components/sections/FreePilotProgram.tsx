"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { useI18n } from "@/lib/i18n/context";

const PROMO_CODE = "FREEPILOTSIM";
const STORE_URL = "https://store.hologram.io/";

const WHATS_INCLUDED = [
    "Free SIM",
    "Test Data",
    "API & Dashboard",
    "190+ Countries",
    "550+ Carriers",
    "2G–5G · NB-IoT · CAT-1",
];

/* ── Checkmark icon matching the reference (lucide check inside a bordered circle) ── */
function CheckIcon({ size = 11 }: { size?: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#BFFD11]"
            aria-hidden="true"
        >
            <path d="M20 6 9 17l-5-5" />
        </svg>
    );
}

/* ── Arrow right icon ── */
function ArrowRightIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    );
}

/* ── External link icon ── */
function ExternalLinkIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M15 3h6v6" />
            <path d="M10 14 21 3" />
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        </svg>
    );
}

export function FreePilotProgram() {
    const { t } = useI18n();
    return (
        <section id="free-pilot" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
            <FadeIn>
                <div className="relative rounded-3xl overflow-hidden border border-[#BFFD11]/20 bg-[#030810]">

                    {/* ── Ambient background glows ── */}
                    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                        <div
                            className="absolute top-0 left-0 w-[600px] h-[400px] rounded-full blur-[120px]"
                            style={{ background: "radial-gradient(ellipse, rgba(191,253,17,0.07) 0%, transparent 70%)" }}
                        />
                        <div
                            className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full blur-[100px]"
                            style={{ background: "radial-gradient(ellipse, rgba(83,242,250,0.05) 0%, transparent 70%)" }}
                        />
                    </div>

                    <div className="relative grid lg:grid-cols-[1fr_420px] gap-0 items-stretch">

                        {/* ════════════════════════════════════════════
                LEFT COLUMN — Content
            ════════════════════════════════════════════ */}
                        <div className="px-8 sm:px-12 py-12 flex flex-col justify-center">

                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#BFFD11]/25 bg-[#BFFD11]/5 mb-8 w-fit">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#BFFD11] animate-pulse" aria-hidden="true" />
                                <span className="font-mono text-[11px] font-semibold tracking-widest uppercase text-[#BFFD11]">
                                    {t.freePilot.badge}
                                </span>
                            </div>

                            {/* Logo */}
                            <div className="mb-6">
                                <Image
                                    src="/logos/hologram-wordmark-white.svg"
                                    alt="Hologram"
                                    width={160}
                                    height={42}
                                    className="h-10 w-auto"
                                    style={{ color: "transparent" }}
                                    draggable={false}
                                />
                            </div>

                            {/* Headline */}
                            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight mb-4 text-white">
                                {t.freePilot.headline}
                                <br />
                                <span className="text-[#BFFD11]">{t.freePilot.headlineLine2}</span>
                            </h2>

                            {/* Body copy */}
                            <p className="text-base text-white/55 leading-relaxed mb-8 max-w-lg">
                                {t.freePilot.body}
                            </p>

                            {/* Feature list */}
                            <ul className="space-y-2.5 mb-10">
                                {t.freePilot.checklist.map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-sm text-white/70">
                                        <div className="w-5 h-5 rounded-full bg-[#BFFD11]/15 border border-[#BFFD11]/25 flex items-center justify-center shrink-0">
                                            <CheckIcon size={11} />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            {/* Promo code block */}
                            <div className="mb-8">
                                <div className="inline-flex items-center gap-0 rounded-xl overflow-hidden border border-[#BFFD11]/30">
                                    <div className="px-4 py-2.5 bg-[#BFFD11]/[0.08] border-r border-[#BFFD11]/20">
                                        <p className="font-mono text-[10px] font-semibold tracking-widest uppercase text-[#BFFD11]/60 mb-0.5">
                                            {t.freePilot.promoCodeLabel}
                                        </p>
                                        <p className="font-mono text-lg font-semibold tracking-widest text-[#BFFD11] leading-none">
                                            {PROMO_CODE}
                                        </p>
                                    </div>
                                    <a
                                        href={STORE_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 px-3 py-3 text-xs text-[#BFFD11]/50 hover:text-[#BFFD11] hover:bg-[#BFFD11]/5 transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BFFD11] focus-visible:ring-inset"
                                        aria-label="Visit Hologram store (opens in new tab)"
                                    >
                                        <ArrowRightIcon />
                                    </a>
                                </div>
                            </div>

                            {/* CTA button */}
                            <div>
                                <a
                                    href={STORE_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-[#BFFD11] text-[#00040F] font-semibold text-base transition-colors duration-200 cursor-pointer w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#BFFD11] focus-visible:ring-offset-[#030810]"
                                    aria-label="Claim Your Free SIM (opens in new tab)"
                                >
                                    {t.freePilot.cta}
                                    <ExternalLinkIcon />
                                </a>
                            </div>

                            {/* Footer text */}
                            <p className="text-xs text-white/25 mt-4">
                                Use code{" "}
                                <span className="font-mono text-white/40">{PROMO_CODE}</span>
                                {" "}at checkout ·{" "}
                                <a
                                    href={STORE_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white/50 transition-colors cursor-pointer"
                                >
                                    store.hologram.io
                                </a>
                            </p>
                        </div>

                        {/* ════════════════════════════════════════════
                RIGHT COLUMN — SIM Visual & Grid
            ════════════════════════════════════════════ */}
                        <div className="relative hidden lg:flex items-center justify-center bg-[#020609] border-l border-[#BFFD11]/10 p-8">

                            {/* Grid pattern overlay */}
                            <div
                                className="absolute inset-0 opacity-[0.03]"
                                style={{
                                    backgroundImage: "linear-gradient(rgba(191,253,17,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(191,253,17,0.5) 1px, transparent 1px)",
                                    backgroundSize: "40px 40px",
                                }}
                                aria-hidden="true"
                            />

                            <div className="relative z-10">
                                {/* SIM glow */}
                                <div className="absolute -inset-8 rounded-full blur-[60px] bg-[#BFFD11]/10" aria-hidden="true" />

                                {/* SIM card image */}
                                <Image
                                    src="/textures/sim-card-front.png"
                                    alt="Hologram SIM card"
                                    width={320}
                                    height={400}
                                    className="relative w-64 h-auto drop-shadow-2xl"
                                    style={{ color: "transparent", filter: "drop-shadow(0 0 40px rgba(191,253,17,0.18))" }}
                                    draggable={false}
                                />
                            </div>

                            {/* What's included box */}
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="rounded-xl border border-[#BFFD11]/20 bg-[#030810]/80 px-4 py-3.5 backdrop-blur-sm" style={{ backgroundColor: "rgba(3,8,16,0.8)" }}>
                                    <p className="font-mono text-[10px] font-semibold tracking-widest uppercase text-[#BFFD11]/60 mb-2.5">
                                        What&apos;s included
                                    </p>
                                    <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                                        {WHATS_INCLUDED.map((item) => (
                                            <div key={item} className="flex items-center gap-1.5">
                                                <div className="w-3.5 h-3.5 rounded-full bg-[#BFFD11]/15 border border-[#BFFD11]/25 flex items-center justify-center shrink-0">
                                                    <CheckIcon size={8} />
                                                </div>
                                                <span className="text-[11px] text-white/60 font-mono leading-none">
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </FadeIn>
        </section>
    );
}
