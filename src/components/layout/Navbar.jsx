import React from "react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 shadow-md bg-primary text-white py-3 px-4 md:px-8 border-b border-primary/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Menu & Logo */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <span className="material-icons-round text-2xl">menu</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="material-icons-round text-secondary text-2xl">
              shopping_basket
            </span>
            <span className="text-xl font-bold tracking-tight">Gromuse</span>
          </div>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-1 max-w-2xl hidden md:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for Grocery, Stores, Vegetable or Meat"
              className="w-full bg-white text-gray-800 py-2.5 pl-5 pr-12 rounded-full text-sm outline-none focus:ring-2 focus:ring-secondary/50"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 material-icons-round text-gray-400">
              search
            </span>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-1 text-xs font-medium text-secondary">
            <span className="material-icons-round text-sm">bolt</span>
            <span>
              Order now and get it within{" "}
              <span className="text-secondary-hover font-bold">15 mint!</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative p-2 bg-white rounded-full text-primary hover:bg-gray-100 transition">
              <span className="material-icons-round text-xl">
                shopping_cart
              </span>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full border border-primary">
                2
              </span>
            </button>
            <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition">
              <span className="material-icons-round text-xl text-white">
                person
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
