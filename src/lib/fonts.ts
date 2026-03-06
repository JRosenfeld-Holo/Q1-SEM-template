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
      path: "../../Brand Fonts/Roobert/TTF/Roobert-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../Brand Fonts/Roobert/TTF/Roobert-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../Brand Fonts/Roobert/TTF/Roobert-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../Brand Fonts/Roobert/TTF/Roobert-Bold.ttf",
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
      path: "../../Brand Fonts/MessinaSansMono_Family/MessinaSansMono-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../Brand Fonts/MessinaSansMono_Family/MessinaSansMono-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-messina-var",
  display: "swap",
});
