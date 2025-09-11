import ScrollAnimationWrapper from "../animations/ScrollAnimationWrapper";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function OurPhilosophy() {
  const philosophyImage = PlaceHolderImages.find(p => p.id === 'philosophy');
  
  return (
    <section className="relative bg-primary text-primary-foreground py-20 md:py-32">
       {philosophyImage && (
        <Image
          src={philosophyImage.imageUrl}
          alt={philosophyImage.description}
          data-ai-hint={philosophyImage.imageHint}
          fill
          className="object-cover opacity-20"
        />
      )}
      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimationWrapper>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
              Built on a Foundation of Sustainability & Artistry
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">
              We believe that the best furniture is not only beautiful and functional but also kind to our planet. Each piece is a promise of quality, a commitment to sustainable sourcing, and a celebration of the artisan's touch.
            </p>
            <Button variant="secondary" asChild>
              <Link href="/#manufacturing">Our Process</Link>
            </Button>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
