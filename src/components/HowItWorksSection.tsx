
import { UserPlus, Heart, MessageCircle, CheckCircle, Coffee } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Create a Profile",
      description: "Sign up as a single or verified couple with your preferences and interests"
    },
    {
      icon: Heart,
      title: "Match by Intent", 
      description: "Connect with like-minded individuals based on shared desires and boundaries"
    },
    {
      icon: MessageCircle,
      title: "Chat (2 messages free)",
      description: "Start meaningful conversations with your matches at no cost"
    },
    {
      icon: CheckCircle,
      title: "Consent",
      description: "Establish clear boundaries and mutual agreement before deeper interactions"
    },
    {
      icon: Coffee,
      title: "Meet (optional)",
      description: "Take your connection offline when you're both ready and comfortable"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your journey to meaningful connections in 5 simple steps
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''} animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
                    <p className="text-gray-600 text-lg">{step.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 flex justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                  <step.icon className="w-16 h-16 text-purple-600" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
