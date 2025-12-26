export default function HomeProductDetail() {
  return (
    <section className="mt-12 md:mt-24">
      <div className="bg-surface-light dark:bg-surface-dark rounded-3xl shadow-soft p-5 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* LEFT : IMAGE GALLERY */}
          <div className="flex flex-col gap-4 lg:gap-6">
            <div className="relative bg-background-light dark:bg-background-dark rounded-2xl p-4 md:p-8 flex items-center justify-center min-h-[300px] md:min-h-[400px] group">
              <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-primary text-white rounded-full h-16 w-16 md:h-24 md:w-24 flex flex-col items-center justify-center text-center shadow-lg z-10">
                <span className="text-lg md:text-2xl font-bold leading-none">
                  70%
                </span>
                <span className="text-[10px] md:text-xs uppercase font-medium mt-1">
                  Discount
                </span>
              </div>

              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5lAtpJmeT6eg7CekXHlUtrXY1qBT_JODozGfWFBPMlpgxg_ORg2JnujA3inWffb1p2MEInL4vSxrTAwQquWR7wjw3Y4-5OpZW-DaL8XAxePrjcJB58Ec2xE6ovbe8EshP365exbhoMuVyzVxLsHrfweYsdxgoeMKsa_jp-GXBCp4iVU9YkhoWjrukXRInLR6jVIiSEmHwh4IoAcqf2eW8l_XejdTfn6yD9B8nqoK316q7n0Rm6_EhSDJyP7rzpPw3ObrIkB5prm8"
                className="max-h-[250px] md:max-h-[350px] object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-xl"
                alt=""
              />
            </div>

            <div className="grid grid-cols-4 gap-2 md:gap-4">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <button
                    key={i}
                    className="bg-background-light dark:bg-background-dark rounded-xl p-2 border-2 border-transparent hover:border-primary transition h-16 md:h-24 flex items-center justify-center"
                  >
                    <img
                     src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5lAtpJmeT6eg7CekXHlUtrXY1qBT_JODozGfWFBPMlpgxg_ORg2JnujA3inWffb1p2MEInL4vSxrTAwQquWR7wjw3Y4-5OpZW-DaL8XAxePrjcJB58Ec2xE6ovbe8EshP365exbhoMuVyzVxLsHrfweYsdxgoeMKsa_jp-GXBCp4iVU9YkhoWjrukXRInLR6jVIiSEmHwh4IoAcqf2eW8l_XejdTfn6yD9B8nqoK316q7n0Rm6_EhSDJyP7rzpPw3ObrIkB5prm8"
                      className="max-h-full object-contain opacity-80 hover:opacity-100"
                      alt=""
                    />
                  </button>
                ))}
            </div>
          </div>

          {/* RIGHT : PRODUCT INFO */}
          <div className="flex flex-col h-full">
            {/* TIMER */}
            <div className="flex items-center gap-2 text-danger font-bold text-base md:text-lg mb-2">
              <span className="material-icons-round text-lg md:text-xl">
                schedule
              </span>
              270 : 13 : 10 : 32
            </div>

            <div className="text-sm text-muted-light mb-1">Bevmo grocery</div>

            <h1 className="text-2xl md:text-4xl font-bold text-primary mb-3">
              Bobs red mill whole wheat
            </h1>

            {/* RATING */}
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <div className="flex text-yellow-400">
                <span className="material-icons-round text-sm md:text-base">
                  star
                </span>
                <span className="material-icons-round text-sm md:text-base">
                  star
                </span>
                <span className="material-icons-round text-sm md:text-base">
                  star
                </span>
                <span className="material-icons-round text-sm md:text-base">
                  star
                </span>
                <span className="material-icons-round text-sm md:text-base">
                  star_half
                </span>
              </div>
              <span className="font-bold text-sm md:text-base">4.5 Rating</span>
              <span className="text-xs md:text-sm underline">(15 reviews)</span>
            </div>

            {/* PRICE */}
            <div className="flex items-baseline gap-2 md:gap-3 mb-6 md:mb-8">
              <span className="text-3xl md:text-5xl font-bold text-primary">
                429
              </span>
              <span className="text-xl md:text-2xl font-bold text-primary align-top">
                .12$
              </span>
              <span className="text-base md:text-lg text-muted-light line-through decoration-red-500 decoration-2">
                550.00$
              </span>
            </div>

            {/* ACTIONS */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6">
              <button className="flex-1 bg-gray-100 hover:bg-gray-200 py-3 md:py-4 rounded-xl font-bold flex items-center justify-center gap-2">
                <span className="material-icons-round">shopping_cart</span>
                Add to bucket
              </button>

              <button className="flex-1 bg-accent hover:bg-accent-dark py-3 md:py-4 rounded-xl font-bold shadow-lg">
                Buy with tamara
              </button>
            </div>

            {/* WISHLIST / COMPARE */}
            <div className="flex gap-4 md:gap-6 mb-6 md:mb-8 text-xs md:text-sm font-semibold">
              <button className="flex items-center gap-1 md:gap-2">
                <span className="material-icons-round text-sm md:text-base">
                  favorite_border
                </span>
                ADD TO WISHLIST
              </button>
              <button className="flex items-center gap-1 md:gap-2">
                <span className="material-icons-round text-sm md:text-base">
                  compare_arrows
                </span>
                Compare with other vendor
              </button>
            </div>

            <div className="h-px bg-border-light w-full mb-6"></div>

            {/* META */}
            <div className="space-y-2 md:space-y-3 text-xs md:text-sm text-muted-light">
              <div>
                <strong>SKU:</strong> MB3442
              </div>
              <div>
                <strong>Categories:</strong> Fruits, Hoodies, Juice, Snacks,
                Tshirts
              </div>
            </div>

            <p className="mt-4 md:mt-6 text-muted-light text-xs md:text-sm leading-relaxed">
              Coconut Oil is a great-tasting, nutritious alternative to use when
              cooking or baking. Naturally rich in medium chain triglycerides
              (MCTs).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
