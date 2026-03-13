import { Nav } from "@/components/nav/Nav";
import { HeroSection } from "@/components/hero/HeroSection";
import { ThreePillars } from "@/components/sections/ThreePillars";
import { StickyBar } from "@/components/ui/StickyBar";
import dynamic from "next/dynamic";

/* Below-fold sections — code-split for faster initial load */
const StatsBar = dynamic(() => import("@/components/sections/StatsBar").then(m => ({ default: m.StatsBar })));
const HyperSIMProduct = dynamic(() => import("@/components/sections/HyperSIMProduct").then(m => ({ default: m.HyperSIMProduct })));
const CoverageSection = dynamic(() => import("@/components/sections/CoverageSection").then(m => ({ default: m.CoverageSection })));
const DashboardSection = dynamic(() => import("@/components/sections/DashboardSection").then(m => ({ default: m.DashboardSection })));
const UseCases = dynamic(() => import("@/components/sections/UseCases").then(m => ({ default: m.UseCases })));
const CustomerSuccess = dynamic(() => import("@/components/sections/CustomerSuccess").then(m => ({ default: m.CustomerSuccess })));
const FreePilotProgram = dynamic(() => import("@/components/sections/FreePilotProgram").then(m => ({ default: m.FreePilotProgram })));
const PricingSection = dynamic(() => import("@/components/sections/PricingSection").then(m => ({ default: m.PricingSection })));
const G2Strip = dynamic(() => import("@/components/sections/G2Strip").then(m => ({ default: m.G2Strip })));
const CTASection = dynamic(() => import("@/components/sections/CTASection").then(m => ({ default: m.CTASection })));
const ContactSection = dynamic(() => import("@/components/sections/ContactSection").then(m => ({ default: m.ContactSection })));
const Footer = dynamic(() => import("@/components/sections/Footer").then(m => ({ default: m.Footer })));

export default function HomePage() {
  return (
    <>
      <Nav />
      <StickyBar />
      <main>
        <HeroSection />
        <StatsBar />
        <ThreePillars />
        <HyperSIMProduct />
        <CoverageSection />
        <DashboardSection />
        <UseCases />
        <CustomerSuccess />
        <PricingSection />
        <CTASection />
        <G2Strip />
        <ContactSection />
        <FreePilotProgram />
      </main>
      <Footer />
    </>
  );
}
