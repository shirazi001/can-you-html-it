import { Card } from "@/components/ui/card";
import { Smartphone, Shield, Zap, Camera, Cpu, Headphones } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Latest Technology",
    description: "Experience the newest innovations in mobile technology with 5G connectivity and beyond.",
    gradient: "bg-gradient-primary"
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Advanced security features and privacy controls to keep your data safe and protected.",
    gradient: "bg-gradient-secondary"
  },
  {
    icon: Zap,
    title: "Ultra-Fast Performance",
    description: "Blazing-fast processors and optimized software for seamless multitasking experience.",
    gradient: "bg-gradient-accent"
  },
  {
    icon: Camera,
    title: "Pro Photography",
    description: "Professional-grade cameras with AI enhancement for stunning photos and videos.",
    gradient: "bg-gradient-primary"
  },
  {
    icon: Cpu,
    title: "AI-Powered",
    description: "Intelligent features that learn and adapt to your usage patterns for optimal performance.",
    gradient: "bg-gradient-secondary"
  },
  {
    icon: Headphones,
    title: "Premium Audio",
    description: "High-fidelity audio experience with spatial sound and noise cancellation technology.",
    gradient: "bg-gradient-accent"
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              PhoneVerse
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover what makes our smartphones stand out from the competition with 
            innovative features and cutting-edge technology.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden bg-card/30 backdrop-blur-sm border-border/30 hover:border-primary/30 transition-all duration-500 hover:shadow-glass p-8 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <div className={`w-full h-full ${feature.gradient}`} />
                </div>

                {/* Icon */}
                <div className={`relative w-16 h-16 ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};