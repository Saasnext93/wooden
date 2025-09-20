
'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { NavigationLink } from '@/lib/types';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

const secondaryNavigationLinks: NavigationLink[] = [
  {
    title: 'Modular Kitchens',
    href: '/products?categories=Modular%20Kitchen%20Design',
    description: 'Beautiful kitchens for modern living.',
    items: [
      { title: 'L-Shaped Kitchen', href: '/products/prod_1', imageId: 'kitchen-lshape', imageUrl: '/l-shaped-contemporary-kitchen-design-with-full-height-cabinets-and-granite-countertop.jpg' },
      { title: 'U-Shaped Kitchen', href: '/products/prod_6', imageId: 'kitchen-ushape', imageUrl: '/u-shaped-contemporary-kitchen-design-with-led-lights-and-quartz-countertops.jpg' },
      { title: 'Parallel Kitchen', href: '/products/prod_5', imageId: 'kitchen-parallel', imageUrl: '/modern-parallel-kitchen-design-with-open-shelves-and-backsplash-tiles.jpg' },
    ],
  },
  {
    title: 'Wardrobes',
    href: '/products?categories=Wardrobe%20Design',
    description: 'Stylish and functional wardrobe solutions.',
    items: [
      { title: 'Swing Wardrobe', href: '/products/prod_8', imageId: 'wardrobe-swing', imageUrl: '/white-modern-2-door-swing-wardrobe-design-with-integrated-study-table.jpg' },
      { title: 'Modern Wardrobe', href: '/products/prod_2', imageId: 'wardrobe-modern', imageUrl: '/modern-3-door-swing-wardrobe-design-with-integrated-study-table.jpg' },
    ],
  },
  {
    title: 'Bedroom',
    href: '/products?categories=Master%20bedroom%20design',
    description: 'Create your perfect sanctuary.',
    items: [
      { title: 'Master Bedroom', href: '/products/prod_3', imageId: 'bedroom-master', imageUrl: '/contemporary-boys-room-design-with-glossy-beige-wardrobe.jpg' },
      { title: 'Kids Bedroom', href: '/products/prod_4', imageId: 'bedroom-kids', imageUrl: '/art-deco-kids-bedroom-design-with-arc-pink-panels-and-white-frame.jpg' },
      { title: 'Bunk Beds', href: '/products/prod_7', imageId: 'bedroom-bunk', imageUrl: '/modern-bedroom-design-with-a-double-bed-and-an-ottoman-bench.jpg' },
    ],
  },
];


export default function MobileSecondaryNav() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const categories = searchParams.getAll('categories');

  return (
    <Accordion type="multiple" className="w-full text-left">
      {secondaryNavigationLinks.map(link => {
         const isActive = pathname.startsWith(link.href ?? '#') || (link.href?.includes('?categories=') && (link.href.split('?categories=')[1].split('%20').join(' ').split('&').some(cat => categories.includes(cat))));

        return (
          <AccordionItem value={link.title} key={link.title}>
            <AccordionTrigger
              className={cn(
                'text-xl font-headline no-underline hover:no-underline',
                isActive ? 'text-primary' : 'text-foreground'
              )}
            >
              <Link href={link.href ?? '#'} className="hover:text-primary transition-colors">
                {link.title}
              </Link>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-3 pl-4">
                {link.items?.map(item => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-base text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
