import CategoryCard from "./CategoryCard";

export default function CategoryGrid() {
  const categories = [
    {
      title: "Vegetable",
      subtitle: "Local market",
      image:
        "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=300&q=80",
      icon: "eco",
    },
    {
      title: "Snacks",
      subtitle: "In store",
      image:
        "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=300&q=80",
      icon: "cookie",
    },
    {
      title: "Fruits",
      subtitle: "Fresh daily",
      image:
        "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=300&q=80",
      icon: "bakery_dining",
    },
    {
      title: "Bakery",
      subtitle: "Hot & Fresh",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&q=80",
      icon: "bakery_dining",
    },
    {
      title: "Meat",
      subtitle: "Organic",
      image:
        "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=300&q=80",
      icon: "set_meal",
    },
    {
      title: "Dairy",
      subtitle: "Farm fresh",
      image:
        "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=300&q=80",
      icon: "egg",
    },
  ];

  return (
    <div className="flex overflow-x-auto pb-4 gap-4 snap-x hide-scrollbar md:grid md:grid-cols-3 lg:grid-cols-6 md:pb-0">
      {categories.map((cat, i) => (
        <div key={i} className="min-w-[140px] snap-start">
          <CategoryCard {...cat} />
        </div>
      ))}
    </div>
  );
}
