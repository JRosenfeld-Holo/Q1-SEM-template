import type { Metadata } from "next";
import { inter, roobert, messina } from "@/lib/fonts";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { LanguageProvider } from "@/lib/i18n/context";
import "./globals.css";

const META_TITLE = "Hologram — Cellular IoT Connectivity That Just Works";
const META_DESC =
  "The only IoT connectivity platform that stops outages before they start. One SIM spans 550+ carriers, 190+ countries — with automatic failover and a contractual 99.95% uptime SLA.";
const META_URL = "https://hologram.io";
const META_IMAGE = "https://hologram.io/textures/sim-card-front.png";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESC,
  metadataBase: new URL(META_URL),
  openGraph: {
    title: META_TITLE,
    description: META_DESC,
    url: META_URL,
    siteName: "Hologram",
    type: "website",
    images: [{ url: META_IMAGE, width: 1066, height: 708, alt: "Hologram HyperSIM card" }],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESC,
    images: [META_IMAGE],
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hologram",
  url: META_URL,
  logo: "https://hologram.io/logos/hologram-wordmark.svg",
  description: META_DESC,
  sameAs: [
    "https://www.linkedin.com/company/hologram-io",
    "https://twitter.com/hologram_io",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${roobert.variable} ${messina.variable}`}
    >
      <head>
        {/* Preload the LCP hero image so the browser fetches it immediately */}
        <link rel="preload" as="image" href="/textures/sim-card-front.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </head>
      <body>
        {/* Prevent theme FOUC — runs synchronously before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('hologram-theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t)}catch(e){}`,
          }}
        />
        <LanguageProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
