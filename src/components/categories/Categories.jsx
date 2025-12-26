import React from "react";
import CategoryCard from "./CategoryCard";

const CATEGORIES = [
  { title: "Vegetable", subtitle: "Local market", emoji: "🥦" },
  { title: "Snacks & Breads", subtitle: "In store delivery", emoji: "🍞" },
  { title: "Fruits", subtitle: "Chemical free", emoji: "🍊" },
  { title: "Chicken legs", subtitle: "Frozen Meal", emoji: "🍗" },
  { title: "Milk & Dairy", subtitle: "Processed food", emoji: "🥛" },
];

export default function Categories() {
  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {CATEGORIES.map((cat, index) => (
          <CategoryCard
            key={index}
            title={cat.title}
            subtitle={cat.subtitle}
            emoji={cat.emoji}
          />
        ))}

        {/* See All Card */}
        <div className="bg-secondary/40 hover:bg-secondary/50 transition-colors rounded-xl p-5 shadow-sm flex flex-col justify-center items-center h-36 cursor-pointer border border-secondary/20 group">
          <div className="bg-white/80 p-3 rounded-full mb-2 group-hover:scale-110 transition-transform">
            <span className="material-icons-round text-2xl text-primary">
              arrow_forward
            </span>
          </div>
          <span className="font-bold text-primary">See all</span>
        </div>
      </div>
    </section>
  );
}
