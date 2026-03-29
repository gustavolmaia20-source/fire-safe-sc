import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CitiesSection } from "@/components/CitiesSection";
import { FAQSection } from "@/components/FAQSection";
import { LeadFormSection } from "@/components/LeadFormSection";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <BenefitsSection />
        <CTABanner />
        <DifferentialsSection />
        <TestimonialsSection />
        <CitiesSection />
        <FAQSection />
        <LeadFormSection />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default Index;
