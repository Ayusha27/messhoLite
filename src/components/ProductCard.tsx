import { Star, Truck } from "lucide-react";
import { Product } from "@/data/mockData";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <span className="absolute top-2 left-2 bg-discount text-discount-foreground text-xs font-bold px-2 py-1 rounded">
            {product.discount}% OFF
          </span>
        </div>
        <div className="p-3">
          <h3 className="text-sm font-medium text-foreground line-clamp-2 mb-1">
            {product.name}
          </h3>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg font-bold text-foreground">₹{product.price}</span>
            <span className="text-sm text-muted-foreground line-through">
              ₹{product.originalPrice}
            </span>
          </div>
          <div className="flex items-center gap-1 mb-2">
            <div className="flex items-center gap-0.5 bg-success text-success-foreground text-xs font-semibold px-1.5 py-0.5 rounded">
              <span>{product.rating}</span>
              <Star className="h-3 w-3 fill-current" />
            </div>
            <span className="text-xs text-muted-foreground">{product.reviews} reviews</span>
          </div>
          {product.freeDelivery && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
              <Truck className="h-3 w-3" />
              <span>Free Delivery</span>
            </div>
          )}
          <button
            onClick={handleAddToCart}
            className="w-full py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
