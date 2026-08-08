import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { BestSellers, Breakfast, Coffee, FinalCta, FreshIngredients, Gallery, Hero, Location, MenuCategories, OpenKitchen, Reviews, Syrniki } from "@/components/sections/HomeSections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FreshIngredients />
        <OpenKitchen />
        <BestSellers />
        <Breakfast />
        <MenuCategories />
        <Coffee />
        <Syrniki />
        <Reviews />
        <Gallery />
        <Location />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
