
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 100px
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // If not scrolled, we hide it by translating Y up (-100%)
  // If scrolled, it slides down (translate Y 0)
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isScrolled ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-primary shadow-lg flex items-center justify-between gap-4 py-2 px-4 md:px-8">
        
        {/* Left */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <button className="text-white p-1 hover:bg-white/10 rounded-full">
            <span className="material-icons-round text-3xl">menu</span>
          </button>

          <div className="flex items-center gap-2 text-white font-bold text-xl">
            <span className="material-icons-round text-secondary">shopping_basket</span>
            <span>Gromuse</span>
          </div>
        </div>

        {/* Search - Show on tablet/desktop */}
        <div className="hidden md:block flex-1 w-full max-w-2xl">
          <div className="relative">
            <input
              className="w-full bg-white rounded-full py-2 pl-5 pr-12 text-sm focus:outline-none"
              placeholder="Search..."
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2">
              <span className="material-icons-round text-gray-500">search</span>
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <button className="relative bg-white text-primary p-2 rounded-full">
            <span className="material-icons-round">shopping_cart</span>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] h-5 w-5 flex items-center justify-center rounded-full">
              2
            </span>
          </button>

          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiQGPpqAubDQmmxtSLDy9jOE-7ceEgqpMKH7hP7FgFJmTZF70cYah5BN_2PfXPDe4bJxosi1X0ZZ22WAwKZHzPL2UWKTSkiu9-qjNXlwF-as6PaTRmmu6uTEhtnFCD0qdjGB-Hi52J0NdnK-vWcMJsWTHrQcUghhedYuzIUrVO-X3Mum7MRgcWi_zWzBuqSc2BHQgQZjQgzyTymd8WCoPinBZrgeqCUlTx4z5MYO2JiCJ1Gf4hq9RWB6z24BVCK1VAVPvaufG3ygk"
            className="h-9 w-9 rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}

