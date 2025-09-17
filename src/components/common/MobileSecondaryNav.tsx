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
    title: 'Upholstered Furniture',
    href: '/products?categories=Sofas&categories=Chairs',
    description: 'Comfortable and stylish seating solutions.',
    items: [
      { title: 'Stationary Sofas', href: '/products?categories=Sofas', imageId: 'category-sofas', imageUrl: '/sofa.jpg' },
      { title: 'Motion Sofas', href: '/products?categories=Sofas', imageId: 'category-sofas', imageUrl: '/contemporary-boys-room-design-with-glossy-beige-wardrobe.jpg' },
      { title: 'Home Theatre', href: '/products?categories=Sofas', imageId: 'category-sofas', imageUrl: '/l-shaped-contemporary-kitchen-design-with-full-height-cabinets-and-granite-countertop.jpg' },
      { title: 'Armchairs', href: '/products?categories=Chairs', imageId: 'category-chairs', imageUrl: '/art-deco-kids-bedroom-design-with-arc-pink-panels-and-white-frame.jpg' },
      { title: 'Day Bed', href: '/products?categories=Sofas', imageId: 'product1', imageUrl: '/modern-bedroom-design-with-a-double-bed-and-an-ottoman-bench.jpg' },
      { title: 'Sofa Cum Bed', href: '/products?categories=Sofas', imageId: 'product3', imageUrl: '/u-shaped-contemporary-kitchen-design-with-led-lights-and-quartz-countertops.jpg' },
      { title: 'Recliners', href: '/products?categories=Chairs', imageId: 'product5', imageUrl: '/white-modern-2-door-swing-wardrobe-design-with-integrated-study-table.jpg' },
      { title: 'Beds', href: '/products?categories=Sofas', imageId: 'product1', imageUrl: '/sofa.jpg' },
      { title: 'Mattress', href: '/products?categories=Sofas', imageId: 'product1', imageUrl: '/sofa.jpg' },
      { title: 'Pillows', href: '/products?categories=Sofas', imageId: 'product1', imageUrl: '/sofa.jpg' },
      { title: 'Puffee', href: '/products?categories=Sofas', imageId: 'product7', imageUrl: '/sofa.jpg' },
    ],
  },
    {
    title: 'Case Goods',
    href: '/products?categories=Tables',
    description: 'Explore our collection of case goods.',
    items: [
      { title: 'Coffee Tables', href: '/products?categories=Tables', imageId: 'category-tables', imageUrl: '/modern-parallel-kitchen-design-with-open-shelves-and-backsplash-tiles.jpg' },
      { title: 'Side Tables', href: '/products?categories=Tables', imageId: 'category-tables', imageUrl: '/modern-parallel-kitchen-design-with-open-shelves-and-backsplash-tiles.jpg' },
      { title: 'Consoles', href: '/products?categories=Tables', imageId: 'category-tables', imageUrl: '/modern-parallel-kitchen-design-with-open-shelves-and-backsplash-tiles.jpg' },
    ],
  },
  {
    title: 'Fixed Cabinets',
    href: '/products?categories=Storage',
    description: 'Explore our collection of fixed cabinets.',
    items: [
      { title: 'Entertainment Units', href: '/products?categories=Storage', imageId: 'category-storage', imageUrl: '/white-modern-2-door-swing-wardrobe-design-with-integrated-study-table.jpg' },
      { title: 'Sideboards', href: '/products?categories=Storage', imageId: 'category-storage', imageUrl: '/white-modern-2-door-swing-wardrobe-design-with-integrated-study-table.jpg' },
      { title: 'Bookshelves', href: '/products?categories=Storage', imageId: 'category-storage', imageUrl: '/white-modern-2-door-swing-wardrobe-design-with-integrated-study-table.jpg' },
    ],
  },
  {
    title: 'Loose Cabinets',
    href: '/products?categories=Storage',
    description: 'Explore our collection of loose cabinets.',
    items: [
      { title: 'Night Stands', href: '/products?categories=Storage', imageId: 'category-storage', imageUrl: '/white-modern-2-door-swing-wardrobe-design-with-integrated-study-table.jpg' },
      { title: 'Chest of Drawers', href: '/products?categories=Storage', imageId: 'category-storage', imageUrl: '/white-modern-2-door-swing-wardrobe-design-with-integrated-study-table.jpg' },
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
         const isActive = pathname.startsWith(link.href ?? '#') || (link.href?.includes('?categories=') && (link.href.split('?categories=')[1].split('&').some(cat => categories.includes(cat))));

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
