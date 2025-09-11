import AboutSection from "@/components/landing/AboutSection";
import ContactForm from "@/components/landing/ContactForm";
import FeaturedProducts from "@/components/landing/FeaturedProducts";
import HeroSection from "@/components/landing/HeroSection";
import Testimonials from "@/components/landing/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturedProducts />
      <AboutSection />
      <Testimonials />
      <ContactForm />
    </div>
  );
}
