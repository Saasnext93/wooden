import Image from 'next/image';
import Link from 'next/link';
import ScrollAnimationWrapper from '../animations/ScrollAnimationWrapper';
import { ArrowRight } from 'lucide-react';

const bannerData = [
  {
    id: 'banner_1',
    title: 'Living Room Comfort',
    imageUrl: 'https://picsum.photos/seed/banner1/400/600',
    imageHint: 'modern living room',
    href: '/products?categories=Sofas',
  },
  {
    id: 'banner_2',
    title: 'Dining in Style',
    imageUrl: 'https://picsum.photos/seed/banner2/400/600',
    imageHint: 'dining table set',
    href: '/products?categories=Tables',
  },
  {
    id: 'banner_3',
    title: 'Productive Spaces',
    imageUrl: 'https://picsum.photos/seed/banner3/400/600',
    imageHint: 'home office desk',
    href: '/products?categories=Chairs',
  },
  {
    id: 'banner_4',
    title: 'Smart Storage',
    imageUrl: 'https://picsum.photos/seed/banner4/400/600',
    imageHint: 'modern bookshelf',
    href: '/products?categories=Storage',
  },
];

export default function ImageBannerGrid() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper className="mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Explore Our Collections</h2>
          <p className="text-lg text-muted-foreground">Find inspiration for every corner of your home.</p>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bannerData.map((banner, index) => (
            <ScrollAnimationWrapper key={banner.id} delay={index * 150}>
              <Link href={banner.href} className="group block relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={banner.imageUrl}
                  alt={banner.title}
                  data-ai-hint={banner.imageHint}
                  fill
                  className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-headline font-bold mb-2">{banner.title}</h3>
                  <div className="flex items-center text-sm font-semibold opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span>Shop Now</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Link>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
