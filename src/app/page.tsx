import { Nav } from "@/components/nav/Nav";
import { HeroSection } from "@/components/hero/HeroSection";
import { SocialProofBar } from "@/components/sections/SocialProofBar";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ThreePillars } from "@/components/sections/ThreePillars";
import { HyperSIMProduct } from "@/components/sections/HyperSIMProduct";
import { CustomerSuccess } from "@/components/sections/CustomerSuccess";
import { UseCases } from "@/components/sections/UseCases";
import { StatsBar } from "@/components/sections/StatsBar";
import { CTASection } from "@/components/sections/CTASection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { StickyBar } from "@/components/ui/StickyBar";

export default function HomePage() {
  return (
    <>
      <Nav />
      <StickyBar />
      <main>
        <HeroSection />
        <SocialProofBar />
        <ProblemSection />
        <ThreePillars />
        <HyperSIMProduct />
        <UseCases />
        <CustomerSuccess />
        <StatsBar />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
