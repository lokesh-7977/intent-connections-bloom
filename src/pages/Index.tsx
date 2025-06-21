
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Heart, Users, MessageCircle, CheckCircle, Star, ArrowRight, Lock, Sparkles } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import USPSection from "@/components/USPSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import PricingSection from "@/components/PricingSection";
import OnboardingModal from "@/components/OnboardingModal";
import Footer from "@/components/Footer";

const Index = () => {
  const [showOnboarding, setShowOnboarding] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <HeroSection onGetStarted={() => setShowOnboarding(true)} />
      <USPSection />
      <HowItWorksSection />
      <TestimonialsCarousel />
      <PricingSection />
      <Footer />
      <OnboardingModal 
        isOpen={showOnboarding} 
        onClose={() => setShowOnboarding(false)} 
      />
    </div>
  );
};

export default Index;
