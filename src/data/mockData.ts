export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  supplier: string;
  freeDelivery: boolean;
}

export interface Category {
  id: number;
  name: string;
  icon: string;
}

export const categories: Category[] = [
  { id: 1, name: "Women", icon: "👗" },
  { id: 2, name: "Men", icon: "👔" },
  { id: 3, name: "Kids", icon: "🧒" },
  { id: 4, name: "Home", icon: "🏠" },
  { id: 5, name: "Beauty", icon: "💄" },
  { id: 6, name: "Electronics", icon: "📱" },
  { id: 7, name: "Kitchen", icon: "🍳" },
  { id: 8, name: "Shoes", icon: "👟" },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Floral Print Anarkali Kurta",
    price: 399,
    originalPrice: 1299,
    discount: 69,
    rating: 4.2,
    reviews: 1250,
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=500&fit=crop",
    category: "Women",
    supplier: "Meena Fashion",
    freeDelivery: true,
  },
  {
    id: 2,
    name: "Cotton Casual Shirt for Men",
    price: 349,
    originalPrice: 999,
    discount: 65,
    rating: 4.0,
    reviews: 890,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=500&fit=crop",
    category: "Men",
    supplier: "Style Hub",
    freeDelivery: true,
  },
  {
    id: 3,
    name: "Kids Cartoon Print T-Shirt",
    price: 199,
    originalPrice: 599,
    discount: 67,
    rating: 4.5,
    reviews: 2100,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=500&fit=crop",
    category: "Kids",
    supplier: "Little Stars",
    freeDelivery: false,
  },
  {
    id: 4,
    name: "Decorative Cushion Cover Set",
    price: 299,
    originalPrice: 899,
    discount: 67,
    rating: 4.3,
    reviews: 560,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=500&fit=crop",
    category: "Home",
    supplier: "Homely Decor",
    freeDelivery: true,
  },
  {
    id: 5,
    name: "Matte Lipstick Combo Pack",
    price: 249,
    originalPrice: 799,
    discount: 69,
    rating: 4.1,
    reviews: 3400,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=500&fit=crop",
    category: "Beauty",
    supplier: "Glow Beauty",
    freeDelivery: false,
  },
  {
    id: 6,
    name: "Wireless Bluetooth Earbuds",
    price: 499,
    originalPrice: 1999,
    discount: 75,
    rating: 3.9,
    reviews: 4500,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=400&h=500&fit=crop",
    category: "Electronics",
    supplier: "TechZone",
    freeDelivery: true,
  },
  {
    id: 7,
    name: "Non-Stick Cookware Set",
    price: 599,
    originalPrice: 1899,
    discount: 68,
    rating: 4.4,
    reviews: 780,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=500&fit=crop",
    category: "Kitchen",
    supplier: "CookMaster",
    freeDelivery: true,
  },
  {
    id: 8,
    name: "Running Sports Shoes",
    price: 449,
    originalPrice: 1499,
    discount: 70,
    rating: 4.2,
    reviews: 1670,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop",
    category: "Shoes",
    supplier: "SoleFit",
    freeDelivery: true,
  },
  {
    id: 9,
    name: "Embroidered Silk Saree",
    price: 699,
    originalPrice: 2499,
    discount: 72,
    rating: 4.6,
    reviews: 920,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=500&fit=crop",
    category: "Women",
    supplier: "Silk Route",
    freeDelivery: true,
  },
  {
    id: 10,
    name: "Slim Fit Denim Jeans",
    price: 549,
    originalPrice: 1599,
    discount: 66,
    rating: 4.0,
    reviews: 1340,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop",
    category: "Men",
    supplier: "Denim World",
    freeDelivery: false,
  },
  {
    id: 11,
    name: "Smart Watch Fitness Band",
    price: 799,
    originalPrice: 2999,
    discount: 73,
    rating: 3.8,
    reviews: 5600,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=500&fit=crop",
    category: "Electronics",
    supplier: "GadgetPro",
    freeDelivery: true,
  },
  {
    id: 12,
    name: "Printed Cotton Bedsheet",
    price: 349,
    originalPrice: 999,
    discount: 65,
    rating: 4.3,
    reviews: 2200,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=500&fit=crop",
    category: "Home",
    supplier: "DreamSleep",
    freeDelivery: true,
  },
];
