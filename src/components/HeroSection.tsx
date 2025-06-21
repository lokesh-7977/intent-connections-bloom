
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-pink-600/10 to-orange-600/10 animate-pulse" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="text-purple-600 w-8 h-8" />
            <span className="text-purple-600 font-semibold text-lg">Premium Connections</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent leading-tight">
            Where Intentional
            <br />
            Connections Begin
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            For open-minded singles, loving couples, and the LGBTQ+ community — 
            <span className="font-semibold text-purple-700"> explore fantasies, share desires, build trust.</span>
          </p>
        </div>

        <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Button 
            onClick={onGetStarted}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
          >
            Get Started for Free
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <p className="text-sm text-gray-600">
            Join thousands of verified members • No credit card required
          </p>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-2 text-gray-600">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium">Verified Couples</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-medium">LGBTQ+ Friendly</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-sm font-medium">Consent First</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
