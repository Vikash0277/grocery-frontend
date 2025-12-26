export default function WeeklyTabs() {
  return (
    <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-4 mb-6">
      {["Frozen food","Vegetables","Snacks","Chicken","Meat & Ball","Dairy & Milk","Chocolate","Fruits"]
        .map((item) => (
          <button
            key={item}
            className={`px-5 py-2 rounded-full whitespace-nowrap shadow-sm ${
              item === "Vegetables"
                ? "bg-primary text-white shadow-md"
                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100"
            }`}
          >
            {item}
          </button>
        ))}
    </div>
  );
}
