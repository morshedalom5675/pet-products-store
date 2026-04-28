import Footer from "@/src/components/section/footer/Footer";
import ContactSection from "@/src/components/section/HomeSection/ContactSection";
import Hero from "@/src/components/section/HomeSection/Hero";
import Spotlight from "@/src/components/section/HomeSection/OfferSection";
import ProductProcess from "@/src/components/section/HomeSection/ProductsProcess";
import Navbar from "@/src/components/section/navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Spotlight />
      <ProductProcess />
      <ContactSection />
      <Footer/>
    </div>
  );
}
