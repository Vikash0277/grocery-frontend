export default function HeroSection() {
  return (
    <section className="relative bg-primary rounded-3xl overflow-hidden shadow-xl min-h-[360px] flex items-center">
      {/* Background Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between px-5 md:px-16 py-8">
        <div className="md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-6xl font-bold text-white leading-tight">
            We bring the store <br className="hidden md:block" /> to your door
          </h1>
          <p className="text-white/90 text-sm md:text-lg max-w-md mx-auto md:mx-0 font-medium">
            Get organic produce and sustainably sourced groceries delivery at up
            to 4% off grocery.
          </p>
          <button className="bg-secondary hover:bg-secondary-hover text-primary font-bold py-3 md:py-3.5 px-8 md:px-10 rounded-xl shadow-lg transform active:scale-95 transition-all text-sm md:text-base">
            Shop now
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 relative">
          {/* Simple Blob effect behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-white/5 rounded-full blur-3xl"></div>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiJ9FecXXWYWH3tDU3GcW2zJNlhBZDjApfNGHCeE08CtBMwA1qeoKGWaf-PpWLQoJCykooIFGi9dO0Y6VWV5c6EZXulb4p-74kfrTU5l-dvH-FDfEhpFOzXgYLEj8rowgKgxh2UBInHCNcbhDon-_M5Jn1a4wrpMuAoKr-15kuDftJ-UctwLIj7dGeVaBYWL0y69HMk57Ul_FQY-d4qb_wkcs9fI6LFDJ76x8LU5Yq6CSk-ONV3rzbiKgWU5J0U4ou9T44TR2mEQs"
            className="h-48 md:h-80 object-contain relative z-10 drop-shadow-2xl"
            alt="Grocery Bag"
          />
        </div>
      </div>
    </section>
  );
}
