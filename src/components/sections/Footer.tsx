"use client";

import { useI18n } from "@/lib/i18n/context";

const FOOTER_LINKS = [
  {
    title: "Product",
    links: [
      { label: "IoT SIM cards", href: "https://hologram.io/products/global-iot-sim-card/" },
      { label: "Outage Protection", href: "https://hologram.io/products/dual-core-sims/" },
      { label: "Dashboard", href: "https://hologram.io/products/dashboard/" },
      { label: "Pricing", href: "https://hologram.io/pricing/" },
      { label: "Global coverage", href: "https://hologram.io/coverage/" },
    ],
  },
  {
    title: "Use cases",
    links: [
      { label: "Asset tracking", href: "https://hologram.io/industries/asset-tracking/" },
      { label: "Healthcare", href: "https://hologram.io/industries/healthcare/" },
      { label: "Energy", href: "https://hologram.io/industries/energy/" },
      { label: "Retail", href: "https://hologram.io/industries/retail/" },
      { label: "Video", href: "https://hologram.io/industries/video/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "https://docs.hologram.io" },
      { label: "Developer Hub", href: "https://community.hologram.io" },
      { label: "Blog", href: "https://hologram.io/blog/" },
      { label: "Customer stories", href: "https://hologram.io/stories/" },
      { label: "Security", href: "https://hologram.io/sdn-security/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "https://hologram.io/about/" },
      { label: "Careers", href: "https://hologram.io/careers/" },
      { label: "Partnerships", href: "https://hologram.io/partnerships/" },
      { label: "Contact", href: "https://hologram.io/contact/" },
    ],
  },
];

export function Footer() {
  const { t } = useI18n();

  const sectionTitles: Record<string, string> = {
    Product: t.footer.product,
    "Use cases": t.footer.useCases,
    Resources: t.footer.resources,
    Company: t.footer.company,
  };

  return (
    <footer
      className="px-6 md:px-12 pt-12 md:pt-16 pb-8"
      style={{ borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "var(--theme-border-subtle)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-10 mb-10 md:mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <div className="mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/hologram-wordmark-white.svg"
                alt="Hologram"
                style={{
                  height: "24px",
                  width: "auto",
                  filter: "var(--theme-logo-filter)",
                  transition: "filter 0.35s ease",
                }}
              />
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs mb-5"
              style={{ fontFamily: "var(--font-inter-var)", color: "var(--theme-text-muted)" }}
            >
              {t.footer.tagline}
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((section) => (
            <div key={section.title}>
              <p
                className="text-sm tracking-[0.15em] uppercase mb-4"
                style={{ fontFamily: "var(--font-messina-var)", color: "var(--theme-text-muted)" }}
              >
                {sectionTitles[section.title] || section.title}
              </p>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm transition-colors duration-200"
                      style={{ fontFamily: "var(--font-inter-var)", color: "var(--theme-text-secondary)" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "var(--theme-border-subtle)" }}
        >
          <p
            className="text-sm"
            style={{ fontFamily: "var(--font-messina-var)", color: "var(--theme-text-muted)" }}
          >
            © {new Date().getFullYear()} Hologram, Inc. {t.footer.copyright}
          </p>
          <div className="flex gap-6">
            <a
              href="https://hologram.io/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors duration-200"
              style={{ fontFamily: "var(--font-messina-var)", color: "var(--theme-text-muted)" }}
            >
              {t.footer.privacy}
            </a>
            <a
              href="https://hologram.io/terms-of-use/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors duration-200"
              style={{ fontFamily: "var(--font-messina-var)", color: "var(--theme-text-muted)" }}
            >
              {t.footer.terms}
            </a>
            <a
              href="https://hologram.io/sdn-security/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors duration-200"
              style={{ fontFamily: "var(--font-messina-var)", color: "var(--theme-text-muted)" }}
            >
              {t.footer.security}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
