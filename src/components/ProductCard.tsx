import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, ShoppingCart, Eye } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  specs: string[];
  isNew?: boolean;
  isFeatured?: boolean;
}

export const ProductCard = ({ 
  name, 
  brand, 
  price, 
  originalPrice, 
  image, 
  rating, 
  reviews, 
  specs,
  isNew,
  isFeatured 
}: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Card 
      className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-glass hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col space-y-2">
        {isNew && (
          <Badge className="bg-gradient-primary text-primary-foreground">New</Badge>
        )}
        {isFeatured && (
          <Badge className="bg-gradient-secondary text-secondary-foreground">Featured</Badge>
        )}
        {discount > 0 && (
          <Badge className="bg-gradient-accent text-accent-foreground">-{discount}%</Badge>
        )}
      </div>

      {/* Wishlist Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-3 right-3 z-10 bg-card/80 backdrop-blur-sm hover:bg-card opacity-0 group-hover:opacity-100 transition-all duration-300"
        onClick={() => setIsLiked(!isLiked)}
      >
        <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} />
      </Button>

      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-muted/20 to-muted/40">
        <img
          src={image}
          alt={`${brand} ${name}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay Actions */}
        <div className={`absolute inset-0 bg-background/20 backdrop-blur-[1px] flex items-center justify-center space-x-3 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <Button size="sm" className="bg-primary/90 hover:bg-primary">
            <Eye className="w-4 h-4 mr-2" />
            Quick View
          </Button>
          <Button size="sm" variant="secondary" className="bg-secondary/90 hover:bg-secondary">
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>

        {/* Shimmer Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Brand & Rating */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">{brand}</span>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
            <span className="text-xs text-muted-foreground">({reviews})</span>
          </div>
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
          {name}
        </h3>

        {/* Specs */}
        <div className="flex flex-wrap gap-1">
          {specs.map((spec, index) => (
            <span
              key={index}
              className="text-xs bg-muted/30 text-muted-foreground px-2 py-1 rounded-md"
            >
              {spec}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            ${price.toLocaleString()}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button 
          className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
          size="lg"
        >
          <ShoppingCart className="w-4 h-4 mr-2 group-hover:animate-bounce" />
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};