import { Star } from 'lucide-react';
import Image from 'next/image';

import { testimonials } from '@/lib/placeholder-data';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import ScrollAnimationWrapper from '../animations/ScrollAnimationWrapper';

export default function Testimonials() {
  const testimonialsWithImages = testimonials.map(testimonial => {
    return {
      ...testimonial,
      avatarUrl: `https://picsum.photos/seed/${testimonial.id}/100/100`,
      avatarHint: 'customer portrait'
    }
  });

  return (
    <section className="bg-accent py-16 md:py-24">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-2">Words from Our Clients</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            We are proud to have earned the trust of clients who appreciate quality and design.
          </p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={200}>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonialsWithImages.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2">
                  <div className="p-4">
                    <Card className="h-full flex flex-col bg-background shadow-lg">
                      <CardContent className="p-6 flex-grow flex flex-col items-center text-center">
                        <Image
                          src={testimonial.avatarUrl}
                          alt={`Avatar of ${testimonial.customerName}`}
                          data-ai-hint={testimonial.avatarHint}
                          width={80}
                          height={80}
                          className="rounded-full mb-4 border-4 border-primary/20 shadow-md"
                        />
                        <p className="text-lg text-foreground/90 italic mb-4 flex-grow">&ldquo;{testimonial.quote}&rdquo;</p>
                        <div className="flex items-center gap-0.5 text-yellow-500 mb-4">
                          {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                        </div>
                        <div className="font-headline font-bold text-lg text-primary">{testimonial.customerName}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.customerTitle}</div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
