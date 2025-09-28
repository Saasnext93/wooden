import AboutSection from "@/components/landing/AboutSection";
import BrandPartners from "@/components/landing/BrandPartners";
import ContactForm from "@/components/landing/ContactForm";
import FeaturedSlider from "@/components/landing/FeaturedSlider";
import HeroSection from "@/components/landing/HeroSection";
import ProductShowcase from "@/components/landing/ProductShowcase";
import ManufacturingProcess from "@/components/landing/ManufacturingProcess";
import NewProducts from "@/components/landing/NewProducts";
import OurPhilosophy from "@/components/landing/OurPhilosophy";
import StatsSection from "@/components/landing/StatsSection";
import Testimonials from "@/components/landing/Testimonials";
import TrustBadges from "@/components/landing/TrustBadges";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import KitchenShowcase from "@/components/landing/KitchenShowcase";
import FurnitureShowcase from "@/components/landing/FurnitureShowcase";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StatsSection />
      <FeaturedSlider />
      <ProductShowcase />
      <KitchenShowcase />
      <FurnitureShowcase />
      <OurPhilosophy />
      <NewProducts />
      <AboutSection />
      <ManufacturingProcess />
      <WhyChooseUs />
      <Testimonials />
      <TrustBadges />
      <BrandPartners />
      <ContactForm />
    </div>
  );
}
