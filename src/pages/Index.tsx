import { useState } from "react";
import { products } from "@/data/mockData";
import Header from "@/components/Header";
import CategoryBar from "@/components/CategoryBar";
import ProductCard from "@/components/ProductCard";
import heroBanner from "@/assets/hero-banner.jpg";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Banner */}
      <div className="w-full">
        <img
          src={heroBanner}
          alt="Mega Sale - Up to 80% off"
          className="w-full h-40 md:h-56 object-cover"
          width={1920}
          height={640}
        />
      </div>

      <CategoryBar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Products */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-foreground">
            {selectedCategory ? selectedCategory : "Products for You"}
          </h2>
          <span className="text-sm text-muted-foreground">
            {filteredProducts.length} products
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
