
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      name: "Riya",
      role: "Single Woman",
      avatar: "R",
      quote: "Finally, a platform where I can explore my curiosities without judgment. The consent-first approach makes me feel completely safe.",
      rating: 5
    },
    {
      name: "Alex & Jay",
      role: "Verified Couple",
      avatar: "A&J",
      quote: "The verification process gave us confidence that we're connecting with real, serious couples. We've made amazing friends here!",
      rating: 5
    },
    {
      name: "Tom & Shane",
      role: "Gay Couple",
      avatar: "T&S", 
      quote: "Love how inclusive and welcoming this community is. We found couples who share our values and interests effortlessly.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50/50 to-pink-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            What Our Community Says
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from verified members who found their perfect connections
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105"
            >
              <CardContent className="p-8 space-y-6">
                <Quote className="w-8 h-8 text-purple-400" />
                
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
