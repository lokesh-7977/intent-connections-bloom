
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Heart, Sparkles, Users, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(1, "Please select your state"),
  gender: z.string().min(1, "Please select your gender"),
  lookingFor: z.string().min(1, "Please select what you're looking for")
});

const WaitlistForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      city: '',
      state: '',
      gender: '',
      lookingFor: ''
    }
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("Form submitted:", values);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    toast({
      title: "Welcome to the waitlist!",
      description: "We'll notify you when DesiBandhan launches.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto p-8">
        <div className="text-center animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-slate-800 mb-4">
            You're on the list! 🎉
          </h3>
          <p className="text-lg text-slate-600 mb-6">
            Thank you for joining DesiBandhan's exclusive waitlist. We'll keep you updated on our launch and send you early access when we're ready!
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>1000+ people waiting</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Early access guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 md:p-8">
      <div className="text-center mb-8 animate-fade-in">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="w-8 h-8 text-brand-primary animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
            Join the Waitlist
          </h2>
          <Heart className="w-8 h-8 text-brand-secondary animate-pulse" />
        </div>
        <p className="text-slate-600 text-lg">
          Be among the first to experience meaningful connections on DesiBandhan
        </p>
        <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-full">
          <Sparkles className="w-4 h-4 text-brand-primary" />
          <span className="text-sm font-medium text-slate-700">Early access + exclusive features</span>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 animate-slide-up">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-slate-700 font-medium">Full Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your full name" 
                        className="h-12 rounded-xl border-slate-200 focus:border-brand-primary focus:ring-brand-primary/20 transition-all duration-300"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-slate-700 font-medium">Email Address</FormLabel>
                    <FormControl>
                      <Input 
                        type="email"
                        placeholder="your@email.com" 
                        className="h-12 rounded-xl border-slate-200 focus:border-brand-primary focus:ring-brand-primary/20 transition-all duration-300"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-slate-700 font-medium">Phone Number</FormLabel>
                    <FormControl>
                      <Input 
                        type="tel"
                        placeholder="+91 9876543210" 
                        className="h-12 rounded-xl border-slate-200 focus:border-brand-primary focus:ring-brand-primary/20 transition-all duration-300"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-slate-700 font-medium">City</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your city" 
                        className="h-12 rounded-xl border-slate-200 focus:border-brand-primary focus:ring-brand-primary/20 transition-all duration-300"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-slate-700 font-medium">State</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 rounded-xl border-slate-200 focus:border-brand-primary focus:ring-brand-primary/20">
                          <SelectValue placeholder="Select your state" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
                        <SelectItem value="karnataka">Karnataka</SelectItem>
                        <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                        <SelectItem value="telangana">Telangana</SelectItem>
                        <SelectItem value="kerala">Kerala</SelectItem>
                        <SelectItem value="maharashtra">Maharashtra</SelectItem>
                        <SelectItem value="gujarat">Gujarat</SelectItem>
                        <SelectItem value="rajasthan">Rajasthan</SelectItem>
                        <SelectItem value="punjab">Punjab</SelectItem>
                        <SelectItem value="haryana">Haryana</SelectItem>
                        <SelectItem value="delhi">Delhi</SelectItem>
                        <SelectItem value="west-bengal">West Bengal</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-slate-700 font-medium">Gender</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 rounded-xl border-slate-200 focus:border-brand-primary focus:ring-brand-primary/20">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="non-binary">Non-binary</SelectItem>
                        <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="lookingFor"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-slate-700 font-medium">What are you looking for?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-12 rounded-xl border-slate-200 focus:border-brand-primary focus:ring-brand-primary/20">
                        <SelectValue placeholder="Select your preference" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="serious-relationship">Serious Relationship</SelectItem>
                      <SelectItem value="casual-dating">Casual Dating</SelectItem>
                      <SelectItem value="friendship">Friendship</SelectItem>
                      <SelectItem value="marriage">Marriage</SelectItem>
                      <SelectItem value="networking">Professional Networking</SelectItem>
                      <SelectItem value="exploring">Still Exploring</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary/90 hover:to-brand-secondary/90 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Joining Waitlist...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Join the Waitlist
                  <Sparkles className="w-5 h-5" />
                </div>
              )}
            </Button>

            <div className="text-center">
              <p className="text-sm text-slate-500">
                By joining, you agree to receive updates about DesiBandhan's launch.
                <br />
                We respect your privacy and won't spam you.
              </p>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default WaitlistForm;
