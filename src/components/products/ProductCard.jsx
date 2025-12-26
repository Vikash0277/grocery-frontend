export default function ProductCard({ image, name, price, unit }) {
  return (
    <div className="bg-white rounded-2xl p-3 md:p-4 shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 cursor-pointer relative h-full flex flex-col justify-between overflow-hidden">
      {/* Sale badge example - logic could be passed as prop later */}

      <div>
        <div className="h-32 md:h-40 flex items-center justify-center mb-3 relative">
          <img
            src={image}
            className="h-24 md:h-32 object-contain transform group-hover:scale-105 transition-transform duration-500"
            alt={name}
          />
        </div>

        <div className="text-center space-y-1">
          <h3 className="font-bold text-gray-800 text-base md:text-lg line-clamp-1">
            {name}
          </h3>
          <p className="text-[10px] md:text-xs text-gray-400 font-medium line-clamp-1">
            ({unit})
          </p>
          <p className="text-[10px] md:text-xs text-gray-400 font-medium">
            500 gm.
          </p>
        </div>
      </div>

      <div className="mt-2">
        <div className="pt-1 pb-1 text-center">
          <p className="text-xl md:text-2xl font-bold text-primary">
            {price}
            <span className="text-xs md:text-sm align-top">$</span>
          </p>
        </div>

        <button className="w-full mt-2 bg-gray-100 hover:bg-gray-200 text-gray-600 py-2 rounded-xl transition-colors flex items-center justify-center group-hover:bg-primary group-hover:text-white">
          <span className="material-icons-round text-xl md:text-2xl">add</span>
        </button>
      </div>
    </div>
  );
}
