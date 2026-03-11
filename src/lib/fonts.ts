import { Inter } from "next/font/google";
import localFont from "next/font/local";

// CSS var names use -var suffix so @theme can reference them without circular deps
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-var",
  display: "swap",
});

export const roobert = localFont({
  src: [
    {
      path: "../../Brand Fonts/Roobert/WOFF2/Roobert-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../Brand Fonts/Roobert/WOFF2/Roobert-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../Brand Fonts/Roobert/WOFF2/Roobert-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../Brand Fonts/Roobert/WOFF2/Roobert-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-roobert-var",
  display: "swap",
});

export const messina = localFont({
  src: [
    {
      path: "../../Brand Fonts/MessinaSansMono_Family/MessinaSansMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../Brand Fonts/MessinaSansMono_Family/MessinaSansMono-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-messina-var",
  display: "swap",
});
