"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Products",  href: "https://www.hologram.io/products/global-iot-sim-card/", external: true },
  { label: "Pricing",   href: "https://www.hologram.io/pricing/",                      external: true },
  { label: "Customers", href: "https://www.hologram.io/stories/",                      external: true },
  { label: "Docs",      href: "https://docs.hologram.io/",                             external: true },
];

const PILL_BG = "rgba(32, 33, 38, 0.92)";
const PILL_SHADOW = "0 2px 24px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06)";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4">
      {/* Pill nav */}
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="max-w-6xl mx-auto rounded-full h-14 flex items-center justify-between px-5 border border-white/[0.10] transition-shadow duration-300"
        style={{
          background: PILL_BG,
          backdropFilter: "blur(20px) saturate(160%)",
          WebkitBackdropFilter: "blur(20px) saturate(160%)",
          boxShadow: PILL_SHADOW,
        }}
      >
        {/* Logo */}
        <Link href="https://www.hologram.io" className="flex items-center cursor-pointer shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logos/hologram-wordmark.svg"
            alt="Hologram"
            style={{ height: "24px", width: "auto" }}
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/80 hover:text-white transition-colors duration-200 cursor-pointer"
                style={{ fontFamily: "var(--font-inter-var)" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2 rounded-[10px] bg-brand-lime text-black font-medium text-sm cursor-pointer hover:bg-[#cffe4e] transition-all duration-200"
            style={{ fontFamily: "var(--font-inter-var)" }}
          >
            Talk to an IoT expert
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu — separate pill panel below the nav */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden max-w-6xl mx-auto mt-2 rounded-2xl border border-white/[0.10] px-5 py-5"
          style={{
            background: PILL_BG,
            backdropFilter: "blur(20px) saturate(160%)",
            WebkitBackdropFilter: "blur(20px) saturate(160%)",
            boxShadow: PILL_SHADOW,
          }}
        >
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/85 hover:text-white transition-colors duration-200"
                  style={{ fontFamily: "var(--font-inter-var)" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3 border-t border-white/[0.08]">
              <a
                href="#contact"
                className="inline-flex px-5 py-2.5 rounded-[10px] bg-brand-lime text-black font-medium text-sm w-fit hover:bg-[#cffe4e] transition-all duration-200"
                style={{ fontFamily: "var(--font-inter-var)" }}
                onClick={() => setMenuOpen(false)}
              >
                Talk to an IoT expert
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
