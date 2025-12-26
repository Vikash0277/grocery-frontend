import React from "react";
import ProductCard from "./ProductCard";

const PRODUCTS = [
  {
    name: "Beetroot",
    unit: "Local shop",
    price: "17.29",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLy-uCN9WCD47M6jH8HqJ7qXgTqK5tQ8E1X5qD8rG9Z3lF0kI2J7mN4oP6Q2R9S5T8U1V4W3X7Y6Z0aB9C8dE-fH1gI2JkL3mO4n5pQ6rS7tU8V9W0xY1zA2bC3dE4fG5hI6jK7lM8nO9pQ0rS1tU2V3W4X5Y6Z7",
  },
  {
    name: "Italian Avocado",
    unit: "Local shop",
    price: "12.29",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLy-uCN9WCD47M6jH8HqJ7qXgTqK5tQ8E1X5qD8rG9Z3lF0kI2J7mN4oP6Q2R9S5T8U1V4W3X7Y6Z0aB9C8dE-fH1gI2JkL3mO4n5pQ6rS7tU8V9W0xY1zA2bC3dE4fG5hI6jK7lM8nO9pQ0rS1tU2V3W4X5Y6Z7",
  },
  // Using placeholders for now, in real app would use distinct images.
  // Modifying one to be visibly different for testing.
  {
    name: "Szam amm",
    unit: "Process food",
    price: "14.29",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLy-uCN9WCD47M6jH8HqJ7qXgTqK5tQ8E1X5qD8rG9Z3lF0kI2J7mN4oP6Q2R9S5T8U1V4W3X7Y6Z0aB9C8dE-fH1gI2JkL3mO4n5pQ6rS7tU8V9W0xY1zA2bC3dE4fG5hI6jK7lM8nO9pQ0rS1tU2V3W4X5Y6Z7",
  },
  {
    name: "Beef Mixed",
    unit: "Cut Bone",
    price: "16.29",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLy-uCN9WCD47M6jH8HqJ7qXgTqK5tQ8E1X5qD8rG9Z3lF0kI2J7mN4oP6Q2R9S5T8U1V4W3X7Y6Z0aB9C8dE-fH1gI2JkL3mO4n5pQ6rS7tU8V9W0xY1zA2bC3dE4fG5hI6jK7lM8nO9pQ0rS1tU2V3W4X5Y6Z7",
  },
  {
    name: "Cold drinks",
    unit: "Sprite",
    price: "18.29",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLy-uCN9WCD47M6jH8HqJ7qXgTqK5tQ8E1X5qD8rG9Z3lF0kI2J7mN4oP6Q2R9S5T8U1V4W3X7Y6Z0aB9C8dE-fH1gI2JkL3mO4n5pQ6rS7tU8V9W0xY1zA2bC3dE4fG5hI6jK7lM8nO9pQ0rS1tU2V3W4X5Y6Z7",
  },
];

// Note: I am reusing the same image URL for placeholders as I don't have separate valid URLs for the items.
// I will try to use conditional rendering or different placeholders if I had them.
// For now, I will use a generic placeholder service for variety if I can, or just keep them same.
// Actually, let's use a placeholder service for variety in the artifact.

const PRODUCTS_MOCK = [
  {
    name: "Beetroot",
    unit: "Local shop",
    price: "17.29",
    image:
      "https://images.unsplash.com/photo-1593161358943-3482708b79b9?w=300&q=80",
  }, // Beetroot
  {
    name: "Italian Avocado",
    unit: "Local shop",
    price: "12.29",
    image:
      "https://images.unsplash.com/photo-1523049673856-425f31d89f77?w=300&q=80",
  }, // Avocado
  {
    name: "Szam amm",
    unit: "Process food",
    price: "14.29",
    image:
      "https://images.unsplash.com/photo-1541592397-6a6839bb0024?w=300&q=80",
  }, // Chips/Snack
  {
    name: "Beef Mixed",
    unit: "Cut Bone",
    price: "16.29",
    image:
      "https://images.unsplash.com/photo-1594833202974-245ed694553b?w=300&q=80",
  }, // Meat
  {
    name: "Cold drinks",
    unit: "Sprite",
    price: "18.29",
    image:
      "https://images.unsplash.com/photo-1625772299867-d3527b13ae0f?w=300&q=80",
  }, // Drink
];

export default function ProductsSection() {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-primary">You might need</h2>
        <button className="text-red-500 font-medium hover:text-red-600 flex items-center gap-1 text-sm">
          See more
          <span className="material-icons-round text-base">arrow_forward</span>
        </button>
      </div>

      <div className="flex overflow-x-auto pb-4 gap-4 snap-x hide-scrollbar sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:gap-6 sm:pb-0">
        {PRODUCTS_MOCK.map((product, index) => (
          <div
            key={index}
            className="relative min-w-[160px] md:min-w-[200px] snap-start"
          >
            {index === 2 && (
              <span className="absolute top-0 right-4 z-10 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-b-lg shadow-sm">
                SALE
              </span>
            )}
            <ProductCard
              name={product.name}
              unit={product.unit}
              price={product.price}
              image={product.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
