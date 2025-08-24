import { ProductCard } from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import phone1 from "@/assets/phone-1.jpg";
import phone2 from "@/assets/phone-2.jpg";
import phone3 from "@/assets/phone-3.jpg";

const featuredProducts = [
  {
    id: "1",
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    price: 1199,
    originalPrice: 1299,
    image: phone1,
    rating: 4.9,
    reviews: 2847,
    specs: ["256GB", "Pro Camera", "Titanium"],
    isNew: true,
    isFeatured: true
  },
  {
    id: "2",
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    price: 1099,
    originalPrice: 1199,
    image: phone2,
    rating: 4.8,
    reviews: 1923,
    specs: ["512GB", "S Pen", "AI Features"],
    isFeatured: true
  },
  {
    id: "3",
    name: "Pixel 8 Pro",
    brand: "Google",
    price: 899,
    originalPrice: 999,
    image: phone3,
    rating: 4.7,
    reviews: 1456,
    specs: ["256GB", "AI Camera", "Pure Android"],
    isNew: true
  }
];

export const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-card/30 backdrop-blur-sm border border-border/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Trending Now</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Featured
            </span>{" "}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Smartphones
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked selection of the most advanced smartphones with cutting-edge technology
            and revolutionary features.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            className="group border-primary/30 bg-card/20 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg"
          >
            View All Products
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};