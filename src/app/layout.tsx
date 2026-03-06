import type { Metadata } from "next";
import { inter, roobert, messina } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hologram — Cellular IoT Connectivity That Just Works",
  description:
    "The only IoT connectivity platform that stops outages before they start. Deploy faster, scale smarter, connect everywhere with Hologram HyperSIM.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${roobert.variable} ${messina.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
