import Image from 'next/image';
import Link from 'next/link';

const heroPanels = [
  {
    title: 'Stationary Sofas',
    href: '/products',
    imageUrl: '/sofa2.jpg',
    imageHint: 'industrial saw wood',
  },
  {
    title: 'Home Theatre',
    imageUrl: '/wooden1.jpg',
    href: '/products',
    imageHint: 'CNC machine cutting',
  },
  {
    title: 'Recliners',
    imageUrl: '/wooden2.jpg',
    href: '/products',
    imageHint: 'worker polishing wood',
  },
  {
    title: 'Mattress',
    imageUrl: '/sofa.jpg',
    href: '/products',
    imageHint: 'saw blade cutting',
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
