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
  return (
    <footer className="border-t border-white/[0.06] px-6 md:px-12 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <div className="mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/hologram-wordmark.svg"
                alt="Hologram"
                style={{ height: "24px", width: "auto" }}
              />
            </div>
            <p
              className="text-sm text-white/40 leading-relaxed max-w-xs mb-5"
              style={{ fontFamily: "var(--font-inter-var)" }}
            >
              Carrier-grade IoT connectivity with multi-carrier redundancy,
              transparent pricing, and responsive engineering support.
            </p>
            <a
              href="mailto:sales@hologram.io"
              className="text-sm text-brand-lime hover:text-white transition-colors duration-200"
              style={{ fontFamily: "var(--font-inter-var)" }}
            >
              sales@hologram.io
            </a>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((section) => (
            <div key={section.title}>
              <p
                className="text-xs text-white/40 tracking-[0.15em] uppercase mb-4"
                style={{ fontFamily: "var(--font-messina-var)" }}
              >
                {section.title}
              </p>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                      style={{ fontFamily: "var(--font-inter-var)" }}
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
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.06]">
          <p
            className="text-xs text-white/40"
            style={{ fontFamily: "var(--font-messina-var)" }}
          >
            © {new Date().getFullYear()} Hologram, Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://hologram.io/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/40 hover:text-white/50 transition-colors duration-200"
              style={{ fontFamily: "var(--font-messina-var)" }}
            >
              Privacy Policy
            </a>
            <a
              href="https://hologram.io/terms-of-use/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/40 hover:text-white/50 transition-colors duration-200"
              style={{ fontFamily: "var(--font-messina-var)" }}
            >
              Terms of Use
            </a>
            <a
              href="https://hologram.io/sdn-security/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/40 hover:text-white/50 transition-colors duration-200"
              style={{ fontFamily: "var(--font-messina-var)" }}
            >
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
