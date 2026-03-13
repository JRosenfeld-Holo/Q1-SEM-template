"use client";

import { useState, useRef, useEffect } from "react";
import { useI18n, LOCALES } from "@/lib/i18n/context";
import { useTheme } from "@/components/ui/ThemeProvider";

export function LanguagePicker() {
    const { locale, setLocale } = useI18n();
    const { theme } = useTheme();
    const isDark = theme === "dark";
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const current = LOCALES.find((l) => l.code === locale)!;

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div ref={ref} className="relative">
            <button
                onClick={() => setOpen(!open)}
                aria-label="Select language"
                aria-expanded={open}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs cursor-pointer transition-all duration-200"
                style={{
                    fontFamily: "var(--font-roobert-var)",
                    border: `1px solid ${isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)"}`,
                    background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
                    color: "var(--theme-text-secondary)",
                }}
            >
                <span>{current.flag}</span>
                <span className="hidden sm:inline">{current.code.toUpperCase()}</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points={open ? "18 15 12 9 6 15" : "6 9 12 15 18 9"} />
                </svg>
            </button>

            {open && (
                <div
                    className="absolute right-0 top-full mt-2 rounded-xl py-1 z-50 min-w-[160px]"
                    style={{
                        background: "var(--theme-nav-bg)",
                        backdropFilter: "blur(20px)",
                        border: `1px solid ${isDark ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.10)"}`,
                        boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                    }}
                >
                    {LOCALES.map((l) => (
                        <button
                            key={l.code}
                            onClick={() => { setLocale(l.code); setOpen(false); }}
                            className="w-full flex items-center gap-2.5 px-4 py-2 text-sm cursor-pointer transition-colors duration-150"
                            style={{
                                fontFamily: "var(--font-roobert-var)",
                                color: l.code === locale ? "var(--theme-accent)" : "var(--theme-text-secondary)",
                                fontWeight: l.code === locale ? 600 : 400,
                                background: "transparent",
                            }}
                        >
                            <span>{l.flag}</span>
                            <span>{l.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
