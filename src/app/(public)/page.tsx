import Footer from "@/src/components/section/footer/Footer";
import ContactSection from "@/src/components/section/HomeSection/ContactSection";
import Hero from "@/src/components/section/HomeSection/Hero";
import OfferSection from "@/src/components/section/HomeSection/OfferSection";
import ProductProcess from "@/src/components/section/HomeSection/ProductsProcess";
import TestimonialSection from "@/src/components/section/HomeSection/TestimonialSection";
import TopCategories from "@/src/components/section/HomeSection/TopCategories";
import TrendingProducts from "@/src/components/section/HomeSection/TrendingProducts";
import Navbar from "@/src/components/section/navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TrendingProducts />
      <TopCategories/>
      <OfferSection/>
      <ProductProcess />
      <TestimonialSection/>
      <ContactSection />
      <Footer />
    </div>
  );
}
