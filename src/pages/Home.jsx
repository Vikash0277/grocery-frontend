import HeroSection from "../components/hero/HeroSection";
import CategoryGrid from "../components/categories/CategoryGrid";
import HomeProductDetails from "../components/home/HomeProductDetails";
import DiscountGrid from "../components/home/Save";
import WeeklyBestSelling from "../components/home/WeeklyBestSelling";
import PromoBanner from "../components/home/PromoBanner";
import MostSelling from "../components/home/MostSelling";
import JustForYou from "../components/home/JustForYou";
import FinalCTA from "../components/home/FinalCTA";
import Footer from "../components/home/Footer";
import YouMightNeed from "../components/home/YouMightNeed";

export default function Home() {
  return (
    <>
      <main className="container mx-auto px-4 py-6 space-y-12">
        <HeroSection />
        <CategoryGrid />
        <YouMightNeed />
        <HomeProductDetails />
        <DiscountGrid />
        <WeeklyBestSelling />
        <PromoBanner />
        <MostSelling />
        <JustForYou />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
