
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import USPSection from "@/components/USPSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import WaitlistForm from "@/components/WaitlistForm";
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
      
      {/* Waitlist Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <WaitlistForm />
      </section>
      
      <Footer />
      <OnboardingModal 
        isOpen={showOnboarding} 
        onClose={() => setShowOnboarding(false)} 
      />
    </div>
  );
};

export default Index;
