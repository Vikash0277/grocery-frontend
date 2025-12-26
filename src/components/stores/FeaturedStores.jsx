import React from "react";

const STORES = [
  {
    name: "Crush grocery",
    time: "Delivery in 12 minute",
    color: "bg-[#FF974D]",
    logo: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=200&q=80",
  }, // Orange
  {
    name: "Delivery market",
    time: "Delivery in 12 minute",
    color: "bg-[#3D82F6]",
    logo: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=200&q=80",
  }, // Blue
  {
    name: "Quality product",
    time: "Delivery in 12 minute",
    color: "bg-[#3AC7AB]",
    logo: "https://images.unsplash.com/photo-1578916171728-66684e1c997a?w=200&q=80",
  }, // Teal
];

function StoreCard({ name, time, color, logo }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group h-full border border-gray-100">
      {/* Top Color Part */}
      <div className={`${color} h-28 relative overflow-hidden`}>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 2px, transparent 2px)",
            backgroundSize: "16px 16px",
          }}
        ></div>
        <div className="absolute -bottom-6 left-5 bg-white p-1 rounded-full z-10 shadow-sm">
          <div className="bg-white rounded-full w-12 h-12 overflow-hidden border border-gray-100 flex items-center justify-center">
            <img src={logo} alt={name} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Bottom White Part */}
      <div className="p-4 pt-8">
        <h3 className="font-bold text-base text-gray-800 line-clamp-1">
          {name}
        </h3>
        <div className="flex items-center gap-1 text-[10px] text-orange-500 mt-1 font-semibold">
          <span className="material-icons-round text-xs">bolt</span>
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedStores() {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-primary">Featured store</h2>
        <button className="text-red-500 font-medium hover:text-red-600 flex items-center gap-1 text-sm">
          Visit all stores
          <span className="material-icons-round text-base">arrow_forward</span>
        </button>
      </div>

      <div className="flex overflow-x-auto pb-4 gap-4 snap-x hide-scrollbar md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:pb-0">
        {STORES.map((store, index) => (
          <div key={index} className="min-w-[280px] snap-start">
            <StoreCard {...store} />
          </div>
        ))}
      </div>
    </section>
  );
}
