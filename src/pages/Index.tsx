
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import USPSection from "@/components/USPSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import OnboardingModal from "@/components/OnboardingModal";
import Footer from "@/components/Footer";

const Index = () => {
  const [showOnboarding, setShowOnboarding] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <HeroSection onGetStarted={() => setShowOnboarding(true)} />
      <USPSection />
      <HowItWorksSection />
      <TestimonialsCarousel />
      <Footer />
      <OnboardingModal 
        isOpen={showOnboarding} 
        onClose={() => setShowOnboarding(false)} 
      />
    </div>
  );
};

export default Index;
