
import Image from 'next/image';
import Link from 'next/link';

const heroPanels = [
  {
    title: 'Modular Kitchens',
    href: '/products?categories=Modular%20Kitchen%20Design',
    imageUrl: '/l-shaped-contemporary-kitchen-design-with-full-height-cabinets-and-granite-countertop.jpg',
    imageHint: 'modular kitchen',
  },
  {
    title: 'Wardrobes',
    href: '/products?categories=Wardrobe%20Design',
    imageUrl: '/white-modern-2-door-swing-wardrobe-design-with-integrated-study-table.jpg',
    imageHint: 'modern wardrobe',
  },
  {
    title: 'Living Rooms',
    href: '/products',
    imageUrl: '/sofa.jpg',
    imageHint: 'living room sofa',
  },
  {
    title: 'Bedrooms',
    href: '/products?categories=Master%20bedroom%20design',
    imageUrl: '/modern-bedroom-design-with-a-queen-bed-and-a-dark-green-tufted-headboard.jpg',
    imageHint: 'modern bedroom',
  },
];

export default function HeroSection() {
  return (
    <section className="h-[70vh] md:h-[90vh] w-full grid grid-cols-2 md:grid-cols-4">
      {heroPanels.map((panel) => (
        <Link href={panel.href} key={panel.title}>
          <div className="relative h-full w-full group overflow-hidden">
            <Image
              src={panel.imageUrl}
              alt={panel.title}
              data-ai-hint={panel.imageHint}
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 flex h-full items-end justify-center p-8">
              <h2 className="text-white text-xl md:text-3xl font-headline font-bold drop-shadow-md text-center transform transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
                {panel.title}
              </h2>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
