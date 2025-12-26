import WeeklyTabs from "./WeeklyTabs";
import WeeklyProducts from "./WeeklyProducts";

export default function WeeklyBestSelling() {
  return (
    <section>
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
          Weekly best selling items
        </h2>
        <a className="text-red-500 font-semibold flex items-center gap-1">
          See more <span className="material-icons-round text-sm">arrow_forward</span>
        </a>
      </div>

      <WeeklyTabs />
      <WeeklyProducts />
    </section>
  );
}
