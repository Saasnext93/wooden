import AboutSection from "@/components/landing/AboutSection";
import ContactForm from "@/components/landing/ContactForm";
import FeaturedProducts from "@/components/landing/FeaturedProducts";
import HeroSection from "@/components/landing/HeroSection";
import NewProducts from "@/components/landing/NewProducts";
import Testimonials from "@/components/landing/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <NewProducts />
      <FeaturedProducts />
      <AboutSection />
      <Testimonials />
      <ContactForm />
    </div>
  );
}
