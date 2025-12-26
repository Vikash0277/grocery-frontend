export default function CategoryCard({ title, subtitle, image, icon }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-36 min-w-[150px] cursor-pointer border border-gray-100 relative overflow-hidden group">
      {/* Background Image opacity */}
      <div className="absolute right-0 bottom-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover rounded-tl-3xl"
        />
      </div>

      <div className="relative z-10">
        <h3 className="font-bold text-gray-800 text-lg leading-tight">
          {title}
        </h3>
        <p className="text-xs text-gray-400 mt-1 font-medium">{subtitle}</p>
      </div>

      <div className="self-end relative z-10 bg-primary/10 p-2 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
        <span className="material-icons-round text-2xl">{icon}</span>
      </div>
    </div>
  );
}
