
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, MessageCircle } from "lucide-react";

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-brand-lighter via-white to-slate-50 overflow-hidden">
      {/* Header with Logo */}
      <header className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center shadow-lg">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Intentional</h1>
              <p className="text-sm text-slate-600 -mt-1">Connections</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-slate-600 hover:text-brand-primary transition-colors font-medium">How it Works</a>
            <a href="#pricing" className="text-slate-600 hover:text-brand-primary transition-colors font-medium">Pricing</a>
            <a href="#about" className="text-slate-600 hover:text-brand-primary transition-colors font-medium">About</a>
            <Button variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
              Login
            </Button>
          </nav>
        </div>
      </header>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-20">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-brand-primary/20 shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-slate-700 font-medium text-sm">Trusted by 10,000+ verified members</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 leading-tight">
              Where{" "}
              <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">
                Intentional
              </span>
              <br />
              Connections Begin
            </h1>
            
            {/* Subtext */}
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
              For open-minded singles, loving couples, and the LGBTQ+ community —{" "}
              <span className="font-semibold text-slate-700">explore fantasies, share desires, build trust.</span>
            </p>
          </div>

          {/* CTA Section */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                onClick={onGetStarted}
                size="lg"
                className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary/90 hover:to-brand-secondary/90 text-white px-10 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Get Started for Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-slate-200 text-slate-700 hover:bg-slate-50 px-10 py-4 text-lg font-medium rounded-2xl"
              >
                Watch Demo
              </Button>
            </div>
            
            <p className="text-sm text-slate-500">
              Join thousands of verified members • No credit card required • Free forever plan
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col items-center space-y-3 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-slate-200/50">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-slate-800">Verified Couples</h3>
              <p className="text-sm text-slate-600 text-center">Photo verification ensures authentic connections</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-slate-200/50">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-800">LGBTQ+ Friendly</h3>
              <p className="text-sm text-slate-600 text-center">Welcoming all orientations and relationship styles</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-slate-200/50">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-slate-800">Consent First</h3>
              <p className="text-sm text-slate-600 text-center">Every interaction prioritizes mutual respect</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
