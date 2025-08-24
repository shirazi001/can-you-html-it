import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-phones.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Futuristic phones"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/20" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-float opacity-60" />
      <div className="absolute top-32 right-20 w-3 h-3 bg-secondary rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-accent rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center space-x-2 bg-card/20 backdrop-blur-sm border border-border/20 rounded-full px-4 py-2 mb-6 animate-slide-up">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">New Generation Smartphones</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Beyond
          </span>{" "}
          <span className="bg-gradient-secondary bg-clip-text text-transparent">
            Imagination
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
          Discover the most advanced smartphones with cutting-edge technology, 
          AI-powered features, and designs that redefine what's possible.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group px-8 py-6 text-lg"
          >
            Explore Collection
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/30 bg-card/20 backdrop-blur-sm hover:bg-card/40 px-8 py-6 text-lg"
          >
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">500K+</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-secondary bg-clip-text text-transparent">50+</div>
            <div className="text-sm text-muted-foreground">Phone Models</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent">24/7</div>
            <div className="text-sm text-muted-foreground">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};