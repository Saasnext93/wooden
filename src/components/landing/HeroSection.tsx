import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ScrollAnimationWrapper from '../animations/ScrollAnimationWrapper';
import TypewriterEffect from '../animations/TypewriterEffect';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const heroImage = {
      imageUrl: "/hero.jpg",
      description: "Hero image for the landing page",
      imageHint: "modern living room"
  };

  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center p-4">
        <ScrollAnimationWrapper>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold mb-4 drop-shadow-md min-h-[100px] md:min-h-[160px] lg:min-h-[180px]">
            <TypewriterEffect text="Timeless Design, Modern Craft" />
          </h1>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper delay={200}>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow-sm">
            Experience the harmony of traditional woodworking and contemporary aesthetics with our exclusive furniture collections.
          </p>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper delay={400}>
          <Button asChild size="lg" className="font-bold">
            <Link href="/products">
              Explore Our Collection <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
