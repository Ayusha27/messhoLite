import { useCart } from "@/context/CartContext";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from "lucide-react";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <ShoppingBag className="h-20 w-20 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">Add items to get started!</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4">
          <ArrowLeft className="h-4 w-4" /> Continue Shopping
        </Link>
        <h1 className="text-2xl font-bold text-foreground mb-6">
          Shopping Cart ({totalItems} items)
        </h1>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-card rounded-xl p-4 border border-border flex gap-4">
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-24 h-28 object-cover rounded-lg"
                    width={96}
                    height={112}
                  />
                </Link>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground line-clamp-1">{item.name}</h3>
                  <p className="text-xs text-muted-foreground">{item.supplier}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-bold text-foreground">₹{item.price}</span>
                    <span className="text-xs text-muted-foreground line-through">₹{item.originalPrice}</span>
                    <span className="text-xs font-semibold text-discount">{item.discount}% off</span>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2 border border-border rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1.5 hover:bg-muted rounded-l-lg transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center font-semibold text-foreground">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1.5 hover:bg-muted rounded-r-lg transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-card rounded-xl p-6 border border-border h-fit sticky top-24">
            <h2 className="text-lg font-bold text-foreground mb-4">Order Summary</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal ({totalItems} items)</span>
                <span className="font-medium text-foreground">₹{totalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Delivery</span>
                <span className="font-medium text-success">FREE</span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between">
                <span className="font-bold text-foreground">Total</span>
                <span className="font-bold text-xl text-foreground">₹{totalPrice}</span>
              </div>
            </div>
            <button className="w-full mt-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity">
              Place Order
            </button>
            <p className="text-xs text-center text-muted-foreground mt-3">
              Safe & secure checkout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
