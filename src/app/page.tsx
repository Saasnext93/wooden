import AboutSection from "@/components/landing/AboutSection";
import ContactForm from "@/components/landing/ContactForm";
import FeaturedProducts from "@/components/landing/FeaturedProducts";
import HeroSection from "@/components/landing/HeroSection";
import ImageBannerGrid from "@/components/landing/ImageBannerGrid";
import ManufacturingProcess from "@/components/landing/ManufacturingProcess";
import NewProducts from "@/components/landing/NewProducts";
import OurPhilosophy from "@/components/landing/OurPhilosophy";
import Testimonials from "@/components/landing/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <NewProducts />
      <OurPhilosophy />
      <ImageBannerGrid />
      <FeaturedProducts />
      <AboutSection />
      <ManufacturingProcess />
      <Testimonials />
      <ContactForm />
    </div>
  );
}
