import Image from 'next/image';
import Link from 'next/link';

const heroPanels = [
  {
    title: 'Bridge Saws',
    href: '/products',
    imageUrl: 'https://images.unsplash.com/photo-1504607798333-52a30e543418?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageHint: 'industrial saw wood',
  },
  {
    title: 'CNC Machines',
    imageUrl: 'https://images.unsplash.com/photo-1628126933397-285642a8450a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    href: '/products',
    imageHint: 'CNC machine cutting',
  },
  {
    title: 'Polishing Tools',
    imageUrl: 'https://images.unsplash.com/photo-1607502752523-743431a4eda7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    href: '/products',
    imageHint: 'worker polishing wood',
  },
  {
    title: 'Diamond Blades',
    imageUrl: 'https://images.unsplash.com/photo-1595034604233-0137577c4493?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    href: '/products',
    imageHint: 'saw blade cutting',
  },
];

export default function HeroSection() {
  return (
    <section className="h-[70vh] md:h-[90vh] w-full grid grid-cols-1 md:grid-cols-4">
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
              <h2 className="text-white text-2xl md:text-3xl font-headline font-bold drop-shadow-md text-center transform transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
                {panel.title}
              </h2>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}