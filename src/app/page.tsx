import AboutSection from "@/components/landing/AboutSection";
import ContactForm from "@/components/landing/ContactForm";
import FeaturedProducts from "@/components/landing/FeaturedProducts";
import FeaturedSlider from "@/components/landing/FeaturedSlider";
import HeroSection from "@/components/landing/HeroSection";
import ManufacturingProcess from "@/components/landing/ManufacturingProcess";
import NewProducts from "@/components/landing/NewProducts";
import OurPhilosophy from "@/components/landing/OurPhilosophy";
import StatsSection from "@/components/landing/StatsSection";
import Testimonials from "@/components/landing/Testimonials";
import TrustBadges from "@/components/landing/TrustBadges";
import WhyChooseUs from "@/components/landing/WhyChooseUs";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StatsSection />
      <FeaturedSlider />
      <OurPhilosophy />
      <FeaturedProducts />
      <NewProducts />
      <AboutSection />
      <ManufacturingProcess />
      <WhyChooseUs />
      <Testimonials />
      <TrustBadges />
      <ContactForm />
    </div>
  );
}
