export default function PromoBanner() {
  return (
    <section className="bg-[#5c1c45] dark:bg-[#4a1637] rounded-3xl p-6 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between">

      {/* Blob */}
      <div className="absolute top-4 left-4 opacity-10">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <path
            d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.9,32.3C59.6,43.1,48.3,51.8,36.5,58.8C24.7,65.8,12.4,71.1,-0.7,72.3C-13.8,73.5,-27.6,70.6,-40.4,64.2C-53.2,57.8,-65,47.9,-73.4,35.5C-81.8,23.1,-86.8,8.2,-83.9,-5.4C-81,-19,-70.2,-31.3,-58.5,-40.8C-46.8,-50.3,-34.2,-57,-21.3,-65.4C-8.4,-73.8,4.8,-83.9,17.7,-83.4C30.6,-82.9,43.2,-71.8,44.7,-76.4Z"
            fill="#ffffff"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* Text */}
      <div className="z-10 text-center md:text-left mb-8 md:mb-0 max-w-xl">
        <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Stay Home and Get All Your Essentials From Our Market!
        </h2>
        <p className="text-white/70 mb-8 text-sm md:text-base">
          Download the app from app store or google play
        </p>

        <div className="flex gap-4 justify-center md:justify-start">
          <button className="bg-black text-white px-4 md:px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-900 transition border border-gray-700">
            <img className="h-6 md:h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzBkc7OfSMKKi9uXivX6R67XI4-ipVddzOBDNO1etv8r5rxFkpQQLDhZEQoEMW31xu2RKUPCIVdiBa0vXVutS8IpVIeGNlicjbS8ujAwq8N50c0M_-9vOTGW8foqt2LEj7CgPumj_wdVjLpBlP57PalGX5SmHH4vlAOf7Afw-aEwnrUpn6_WtqCOro2v7883CYX9xBsLlt1VPwpNnOBlQVSMPMymd66M5dGARvtYLwoeVHT03qVFppP_SqxhsXDms92-BNuntJ2cc" alt="" />
          </button>

          <button className="bg-black text-white px-4 md:px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-900 transition border border-gray-700">
            <img className="h-6 md:h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2I92UY58zXMEdUq6Li3CmgnGuFsPDLkOCkBUI0kqg1foJAH2oHj1rnuu1fMjZISEP37GI5aAglcPIFww6gaa7LO6Lm4d4HzCu7VI01CZZtXTDNrvAuQA7vDbFrPEPizHBqslPUBA0pvU_Kb1JgjX8qqxDoLncdDYACXVWMAtppjrSib2uyrT5HdDj2t7gNyWU0rGofFelqwb-N1PHLUhcOVRWjBcRUq8bdWb8SLuPiC68Zi5_si0XUkWTK3QsJ3-C3SaoHXIIc4g" alt="" />
          </button>
        </div>
      </div>

      {/* Image */}
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhzWYpzKzLc5sbuvXfwHDfdqHCLwHhDv_A8p9tDboFnTCIDmXu1plrNWLUBOca5cFEyZ-H8r7xZtc8kzhamxNgtrpaPOZZ36lalQocb5ed8hgDfPx53Y8KhAWPCqC41FpOzWXIocVdIK3X1YcKfkVtw8WUhIdMhbq3q6a1zdp97q__iA98S7SOUHmoTVAxT3MQqatmH_LiJhHtb7HhONFFN5bQchqHAjx69G6pvcgN5Fha3urpIJXVLtJKHAksD60Hm_w93xPgAr8"
        className="h-56 md:h-96 rounded-2xl shadow-2xl border-4 border-white/20 transform md:rotate-3 hover:rotate-0 transition duration-500"
        alt=""
      />
    </section>
  );
}
