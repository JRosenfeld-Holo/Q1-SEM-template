"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/components/ui/ThemeProvider";
import { useI18n } from "@/lib/i18n/context";
import { LanguagePicker } from "./LanguagePicker";

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300"
      style={{
        border: `1px solid ${isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)"}`,
        background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
      }}
    >
      {/* Sun icon */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          position: "absolute",
          opacity: isDark ? 0 : 1,
          transform: isDark ? "rotate(-90deg) scale(0.5)" : "rotate(0deg) scale(1)",
          transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
          color: "#0f1117",
        }}
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>

      {/* Moon icon */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          position: "absolute",
          opacity: isDark ? 1 : 0,
          transform: isDark ? "rotate(0deg) scale(1)" : "rotate(90deg) scale(0.5)",
          transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
          color: "rgba(255,255,255,0.85)",
        }}
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { t } = useI18n();

  const NAV_LINKS = [
    { label: t.nav.products, href: "#products" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.customers, href: "#customers" },
    { label: t.nav.docs, href: "https://docs.hologram.io/", external: true },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4">
      {/* Pill nav */}
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="max-w-6xl mx-auto rounded-full h-14 flex items-center justify-between px-5 transition-all duration-300"
        style={{
          background: "var(--theme-nav-bg)",
          backdropFilter: "blur(20px) saturate(160%)",
          WebkitBackdropFilter: "blur(20px) saturate(160%)",
          boxShadow: "var(--theme-nav-shadow)",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: isDark ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.08)",
        }}
      >
        {/* Logo */}
        <Link href="https://www.hologram.io" className="flex items-center cursor-pointer shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logos/hologram-wordmark-white.svg"
            alt="Hologram"
            style={{
              height: "24px",
              width: "auto",
              filter: isDark ? "none" : "brightness(0)",
              transition: "filter 0.35s ease",
            }}
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-sm transition-colors duration-200 cursor-pointer hover-nav-link"
                style={{
                  fontFamily: "var(--font-inter-var)",
                  color: "var(--theme-text-secondary)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--theme-text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--theme-text-secondary)")}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop controls: lang picker + theme toggle + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <LanguagePicker />
          <ThemeToggle />
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2 rounded-[10px] font-medium text-sm cursor-pointer transition-all duration-200"
            style={{
              fontFamily: "var(--font-inter-var)",
              backgroundColor: "var(--theme-cta-bg)",
              color: "var(--theme-cta-text)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--theme-cta-hover)"; e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "var(--shadow-lime-glow)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--theme-cta-bg)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            {t.nav.cta}
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <LanguagePicker />
          <ThemeToggle />
          <button
            className="flex flex-col gap-1.5 p-2 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`block w-5 h-0.5 transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              style={{ backgroundColor: "var(--theme-text)" }}
            />
            <span
              className={`block w-5 h-0.5 transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
              style={{ backgroundColor: "var(--theme-text)" }}
            />
            <span
              className={`block w-5 h-0.5 transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              style={{ backgroundColor: "var(--theme-text)" }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu — separate pill panel below the nav */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden max-w-6xl mx-auto mt-2 rounded-2xl px-5 py-5"
          style={{
            background: "var(--theme-nav-bg)",
            backdropFilter: "blur(20px) saturate(160%)",
            WebkitBackdropFilter: "blur(20px) saturate(160%)",
            boxShadow: "var(--theme-nav-shadow)",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: isDark ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.08)",
          }}
        >
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="text-sm transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-inter-var)",
                    color: "var(--theme-text-secondary)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--theme-text)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--theme-text-secondary)")}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li
              className="pt-3"
              style={{ borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "var(--theme-border-subtle)" }}
            >
              <a
                href="#contact"
                className="inline-flex px-5 py-2.5 rounded-[10px] font-medium text-sm w-fit transition-all duration-200"
                style={{
                  fontFamily: "var(--font-inter-var)",
                  backgroundColor: "var(--theme-cta-bg)",
                  color: "var(--theme-cta-text)",
                }}
                onClick={() => setMenuOpen(false)}
              >
                {t.nav.cta}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
