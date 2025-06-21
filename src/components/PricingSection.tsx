
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Star } from "lucide-react";

const PricingSection = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const plans = {
    monthly: [
      {
        name: "Free",
        price: "$0",
        period: "/month",
        description: "Perfect for getting started",
        features: [
          "2 messages per connection",
          "Basic profile creation",
          "Browse verified members",
          "Safety features included"
        ],
        cta: "Get Started",
        highlighted: false
      },
      {
        name: "Premium",
        price: "$14.99",
        period: "/month",
        description: "Unlock unlimited conversations", 
        features: [
          "Unlimited chat messages",
          "Access to premium groups",
          "Exclusive member events",
          "Priority customer support",
          "Advanced search filters",
          "Read receipts & typing indicators"
        ],
        cta: "Go Premium",
        highlighted: true
      }
    ],
    yearly: [
      {
        name: "Free",
        price: "$0",
        period: "/year",
        description: "Perfect for getting started",
        features: [
          "2 messages per connection",
          "Basic profile creation", 
          "Browse verified members",
          "Safety features included"
        ],
        cta: "Get Started",
        highlighted: false
      },
      {
        name: "Premium",
        price: "$149.99",
        period: "/year",
        originalPrice: "$179.88",
        description: "Save $30 with annual billing",
        features: [
          "Unlimited chat messages",
          "Access to premium groups",
          "Exclusive member events", 
          "Priority customer support",
          "Advanced search filters",
          "Read receipts & typing indicators"
        ],
        cta: "Go Premium",
        highlighted: true
      }
    ]
  };

  return (
    <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Start free, upgrade when you're ready for unlimited connections
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                billingPeriod === "monthly" 
                ? "bg-white shadow-md text-purple-600 font-semibold" 
                : "text-gray-600"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                billingPeriod === "yearly" 
                ? "bg-white shadow-md text-purple-600 font-semibold" 
                : "text-gray-600"
              }`}
            >
              Yearly
              <Badge className="ml-2 bg-green-500 text-white">Save $30</Badge>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans[billingPeriod].map((plan, index) => (
            <Card 
              key={index}
              className={`relative transition-all duration-500 hover:scale-105 ${
                plan.highlighted 
                ? "border-2 border-purple-500 shadow-2xl bg-gradient-to-br from-white to-purple-50" 
                : "border border-gray-200 hover:shadow-xl bg-white"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center space-y-4">
                <CardTitle className="text-2xl font-bold text-gray-800">{plan.name}</CardTitle>
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-purple-600">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  {plan.originalPrice && (
                    <p className="text-sm text-gray-500">
                      <span className="line-through">{plan.originalPrice}</span> per year
                    </p>
                  )}
                </div>
                <CardDescription className="text-gray-600">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full py-3 font-semibold transition-all duration-300 ${
                    plan.highlighted
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-purple-500/25"
                    : "bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
