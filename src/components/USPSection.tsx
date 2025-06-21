
import { Shield, Heart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const USPSection = () => {
  const { t } = useLanguage();

  const usps = [
    {
      icon: Shield,
      title: t('usp.verifiedTitle'),
      description: t('usp.verifiedDesc')
    },
    {
      icon: Heart,
      title: t('usp.consentTitle'), 
      description: t('usp.consentDesc')
    },
    {
      icon: Users,
      title: t('usp.safeTitle'),
      description: t('usp.safeDesc')
    }
  ];

  return (
    <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            {t('usp.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('usp.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {usps.map((usp, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-purple-50/50 hover:scale-105"
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <usp.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{usp.title}</h3>
                <p className="text-gray-600 leading-relaxed">{usp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;
