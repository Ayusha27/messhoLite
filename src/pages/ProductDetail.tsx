import { useParams, Link } from "react-router-dom";
import { products } from "@/data/mockData";
import { useCart } from "@/context/CartContext";
import { Star, Truck, ArrowLeft, ShoppingCart } from "lucide-react";
import Header from "@/components/Header";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4">
          <ArrowLeft className="h-4 w-4" /> Back to products
        </Link>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl overflow-hidden border border-border">
            <img
              src={product.image}
              alt={product.name}
              className="w-full aspect-square object-cover"
              width={600}
              height={600}
            />
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Supplier: {product.supplier}</p>
              <h1 className="text-2xl font-bold text-foreground">{product.name}</h1>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5 bg-success text-success-foreground text-sm font-semibold px-2 py-1 rounded">
                <span>{product.rating}</span>
                <Star className="h-4 w-4 fill-current" />
              </div>
              <span className="text-sm text-muted-foreground">{product.reviews} reviews</span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-extrabold text-foreground">₹{product.price}</span>
              <span className="text-lg text-muted-foreground line-through">₹{product.originalPrice}</span>
              <span className="text-lg font-bold text-discount">{product.discount}% off</span>
            </div>
            {product.freeDelivery && (
              <div className="flex items-center gap-2 text-sm text-success">
                <Truck className="h-4 w-4" />
                <span className="font-medium">Free Delivery</span>
              </div>
            )}
            <div className="bg-secondary rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-2">Product Details</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Category: {product.category}</li>
                <li>Supplier: {product.supplier}</li>
                <li>Quality assured product</li>
                <li>Easy returns within 7 days</li>
              </ul>
            </div>
            <div className="flex gap-3 pt-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity"
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </button>
              <Link
                to="/cart"
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-accent text-accent-foreground font-bold text-lg hover:opacity-90 transition-opacity"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
