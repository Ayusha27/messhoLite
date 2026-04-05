import { categories } from "@/data/mockData";

interface CategoryBarProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const CategoryBar = ({ selectedCategory, onSelectCategory }: CategoryBarProps) => {
  return (
    <div className="bg-card py-4 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          <button
            onClick={() => onSelectCategory(null)}
            className={`flex flex-col items-center gap-1 min-w-[64px] transition-all ${
              selectedCategory === null ? "opacity-100 scale-105" : "opacity-70 hover:opacity-100"
            }`}
          >
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl ${
                selectedCategory === null
                  ? "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2"
                  : "bg-muted"
              }`}
            >
              🔥
            </div>
            <span className="text-xs font-medium text-foreground">All</span>
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.name)}
              className={`flex flex-col items-center gap-1 min-w-[64px] transition-all ${
                selectedCategory === cat.name
                  ? "opacity-100 scale-105"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl ${
                  selectedCategory === cat.name
                    ? "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2"
                    : "bg-muted"
                }`}
              >
                {cat.icon}
              </div>
              <span className="text-xs font-medium text-foreground">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;
