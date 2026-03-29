import { Header } from "@/components/Header";
import { UrgencyBar } from "@/components/UrgencyBar";
import { HeroSection } from "@/components/HeroSection";
import { SocialProofBar } from "@/components/SocialProofBar";
import { ServicesSection } from "@/components/ServicesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ChecklistSection } from "@/components/ChecklistSection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { CTABanner } from "@/components/CTABanner";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CitiesSection } from "@/components/CitiesSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <UrgencyBar />
      <main>
        <HeroSection />
        <SocialProofBar />
        <ServicesSection />
        <HowItWorksSection />
        <BenefitsSection />
        <ChecklistSection />
        <CTABanner />
        <DifferentialsSection />
        <TestimonialsSection />
        <CitiesSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default Index;
