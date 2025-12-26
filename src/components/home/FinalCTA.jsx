export default function FinalCTA() {
  return (
    <section className="rounded-3xl overflow-hidden relative bg-secondary">
      <div className="absolute inset-0 bg-secondary"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-primary"></div>

      {/* Wave */}
      <div className="absolute top-1/2 left-0 right-0 -mt-10 md:-mt-20">
        <svg viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#064e49"
            d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L0,320Z"
          />
        </svg>
      </div>

      <div className="relative z-10 px-4 py-8 md:px-8 md:py-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
          We always provide
          <br />
          you the best in town
        </h2>

        <p className="text-primary/80 max-w-2xl mx-auto mb-10 md:mb-16 text-sm md:text-base">
          Since 2007 we have been delivering excellence in product development,
          support & updates for frictionless shopping experiences.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {[
            "card_giftcard",
            "wallet_giftcard",
            "phonelink_ring",
            "storefront",
          ].map((icon, i) => (
            <div key={i} className="text-center group">
              <div className="mx-auto mb-4 h-16 w-16 md:h-24 md:w-24 bg-white/10 rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition">
                <span className="material-icons-round text-3xl md:text-4xl text-secondary">
                  {icon}
                </span>
              </div>
              <h3 className="text-base md:text-xl font-bold text-white">
                Gromuse Service
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
