import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export const Header = () => {
  const [cartCount] = useState(3);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">P</span>
          </div>
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            PhoneVerse
          </span>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search phones, brands, models..."
              className="pl-10 bg-card/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
            Phones
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
            Accessories
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
            Deals
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
            Support
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="w-4 h-4" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <User className="w-4 h-4" />
          </Button>
          
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="w-4 h-4" />
            {cartCount > 0 && (
              <Badge 
                variant="secondary" 
                className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-xs bg-secondary text-secondary-foreground"
              >
                {cartCount}
              </Badge>
            )}
          </Button>
          
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};