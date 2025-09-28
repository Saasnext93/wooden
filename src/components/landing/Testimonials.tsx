
'use client';

import { Star, StarHalf } from 'lucide-react';
import Image from 'next/image';
import { useMemo, useState } from 'react';

import type { Testimonial } from '@/lib/types';
import {
  Card,
  CardContent
} from '@/components/ui/card';
import ScrollAnimationWrapper from '../animations/ScrollAnimationWrapper';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Separator } from '../ui/separator';

const allTestimonials: Testimonial[] = [
  {
    id: 'test_1',
    quote: "The quality of our new dining table is simply outstanding. You can feel the craftsmanship. It's the centerpiece of our home now.",
    customerName: 'Priya Sharma',
    customerTitle: 'Homeowner, Mumbai',
    imageId: 'avatar1',
  },
  {
    id: 'test_2',
    quote: "Wooden Manufacture transformed our living space. The sofa is not only beautiful but incredibly comfortable. The whole process was seamless.",
    customerName: 'Mahesh Kumar',
    customerTitle: 'Interior Designer, Delhi',
    imageId: 'avatar2',
  },
  {
    id: 'test_3',
    quote: "I was looking for a unique bookshelf and found the perfect one here. It's a true work of art. I get compliments on it all the time!",
    customerName: 'Anika Reddy',
    customerTitle: 'Architect, Bangalore',
    imageId: 'avatar3',
  },
   {
    id: 'test_4',
    quote: "From the wood grain on my armchair to the soft-close drawers on my sideboard, every detail is perfect. Highly recommended.",
    customerName: 'Rohan Mehta',
    customerTitle: 'Art Director, Pune',
    imageId: 'avatar4',
  },
];


function GoogleIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="20" viewBox="0 0 18 18" aria-hidden="true">
            <path fill="#4285F4" d="M17.64 9.2c0-.63-.06-1.25-.16-1.84H9.18v3.48h4.75c-.2 1.12-.83 2.08-1.78 2.72v2.26h2.9c1.7-1.57 2.68-3.88 2.68-6.62z"></path>
            <path fill="#34A853" d="M9.18 18c2.43 0 4.47-.8 5.96-2.18l-2.9-2.26c-.8.54-1.84.86-2.97.86-2.25 0-4.15-1.52-4.83-3.56H1.4v2.33C2.88 16.03 5.8 18 9.18 18z"></path>
            <path fill="#FBBC05" d="M4.35 10.8c-.17-.52-.17-1.08 0-1.6V6.88H1.4a8.9 8.9 0 000 8.24L4.35 10.8z"></path>
            <path fill="#EA4335" d="M9.18 3.54c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.65.6 11.61 0 9.18 0 5.8 0 2.88 1.97 1.4 4.64l2.95 2.33c.68-2.04 2.58-3.43 4.83-3.43z"></path>
        </svg>
    )
}

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-0.5 text-yellow-500">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="w-5 h-5 fill-current" />
      ))}
      {halfStar && <StarHalf key="half" className="w-5 h-5 fill-current" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="w-5 h-5 text-gray-300 fill-current" />
      ))}
    </div>
  );
}


export default function Testimonials() {
  const testimonialsWithImages = allTestimonials.map(testimonial => {
    return {
      ...testimonial,
      avatarUrl: `/AVATAR/${testimonial.imageId}.jpg`,
      avatarHint: 'customer portrait'
    }
  });
  
  const cities = useMemo(() => ['All', ...Array.from(new Set(allTestimonials.map(t => t.customerTitle.split(', ')[1])))], []);
  const [activeCity, setActiveCity] = useState('All');

  const filteredTestimonials = useMemo(() => {
    if (activeCity === 'All') {
      return testimonialsWithImages;
    }
    return testimonialsWithImages.filter(t => t.customerTitle.includes(activeCity));
  }, [activeCity, testimonialsWithImages]);


  return (
    <section className="bg-accent/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-2">
            Our Clients Simply <span className="text-destructive">Love</span> Our Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
           Because building great customer relationships is the best business strategy.
          </p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={200}>
            <Card className="p-6 md:p-8 bg-background shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Column: Google Reviews Summary */}
                    <div className="md:col-span-1 md:border-r md:pr-8 flex flex-col items-center text-center">
                       <div className="flex items-center gap-2">
                            <GoogleIcon />
                            <span className="text-2xl font-semibold text-muted-foreground">Reviews</span>
                       </div>
                        <div className="my-6">
                            <p className="text-7xl font-bold text-foreground">4.5</p>
                            <div className="flex justify-center my-2">
                                <StarRating rating={4.5} />
                            </div>
                            <p className="text-muted-foreground">Based on 1296 Reviews</p>
                        </div>
                    </div>

                    {/* Right Column: Individual Reviews */}
                    <div className="md:col-span-2">
                        <Tabs value={activeCity} onValueChange={setActiveCity}>
                            <TabsList className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 mb-4">
                                {cities.map(city => (
                                    <TabsTrigger key={city} value={city}>{city}</TabsTrigger>
                                ))}
                            </TabsList>
                            <TabsContent value={activeCity}>
                                <div className="space-y-6">
                                {filteredTestimonials.map((testimonial, index) => (
                                    <div key={testimonial.id}>
                                        <div className="flex items-start gap-4">
                                            <Image
                                                src={testimonial.avatarUrl}
                                                alt={`Avatar of ${testimonial.customerName}`}
                                                data-ai-hint={testimonial.avatarHint}
                                                width={40}
                                                height={40}
                                                className="rounded-full mt-1 border-2 border-primary/20"
                                            />
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <p className="font-bold text-foreground">{testimonial.customerName}</p>
                                                         <div className="flex items-center gap-2">
                                                            <StarRating rating={5} />
                                                            <span className="text-xs text-muted-foreground">2 weeks ago</span>
                                                         </div>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-foreground/80 mt-2">{testimonial.quote}</p>
                                            </div>
                                        </div>
                                         {index < filteredTestimonials.length - 1 && <Separator className="mt-6" />}
                                    </div>
                                ))}
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </Card>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
