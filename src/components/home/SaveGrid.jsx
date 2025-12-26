export function BestSellingCard({ bg, bottomBg, title, value, icon, image }) {
  return (
    <div
      className={`rounded-3xl overflow-hidden ${bg} border border-gray-200 relative flex flex-col h-full group`}
    >
      {/* Top Content */}
      <div className="p-4 md:p-6 pb-0 flex-1 relative z-10">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-base md:text-lg font-bold">{title}</p>
            <p className="text-3xl md:text-4xl font-extrabold my-1 text-primary">
              {value}
            </p>
            <p className="text-[10px] md:text-xs text-gray-600 mt-2 leading-relaxed max-w-[150px]">
              Enjoy Discount all types of Grocery & frozen item
            </p>
          </div>

          <span className="material-icons-round text-2xl md:text-3xl opacity-70">
            {icon}
          </span>
        </div>
      </div>

      {/* Curved Bottom */}
      <div
        className="mt-4 h-40 md:h-48 w-full rounded-t-[50%] scale-x-150 relative top-4"
        style={{ backgroundColor: bottomBg }}
      />

      {/* Product Image */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center z-20 transition-transform duration-300 group-hover:-translate-y-2">
        <img
          src={image}
          alt=""
          className="h-32 md:h-40 w-auto object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  );
}
