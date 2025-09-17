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
      { title: 'Stationary Sofas', href: '/products?categories=Sofas', imageId: 'category-sofas' },
      { title: 'Motion Sofas', href: '/products?categories=Sofas', imageId: 'category-sofas' },
      { title: 'Home Theatre', href: '/products?categories=Sofas', imageId: 'category-sofas' },
      { title: 'Armchairs', href: '/products?categories=Chairs', imageId: 'category-chairs' },
      { title: 'Day Bed', href: '/products?categories=Sofas', imageId: 'product1' },
      { title: 'Sofa Cum Bed', href: '/products?categories=Sofas', imageId: 'product3' },
      { title: 'Recliners', href: '/products?categories=Chairs', imageId: 'product5' },
      { title: 'Beds', href: '/products?categories=Sofas', imageId: 'product1' },
      { title: 'Mattress', href: '/products?categories=Sofas', imageId: 'product1' },
      { title: 'Pillows', href: '/products?categories=Sofas', imageId: 'product1' },
      { title: 'Puffee', href: '/products?categories=Sofas', imageId: 'product7' },
    ],
  },
    {
    title: 'Case Goods',
    href: '/products?categories=Tables',
    description: 'Explore our collection of case goods.',
    items: [
      { title: 'Coffee Tables', href: '/products?categories=Tables', imageId: 'category-tables' },
      { title: 'Side Tables', href: '/products?categories=Tables', imageId: 'category-tables' },
      { title: 'Consoles', href: '/products?categories=Tables', imageId: 'category-tables' },
    ],
  },
  {
    title: 'Fixed Cabinets',
    href: '/products?categories=Storage',
    description: 'Explore our collection of fixed cabinets.',
    items: [
      { title: 'Entertainment Units', href: '/products?categories=Storage', imageId: 'category-storage' },
      { title: 'Sideboards', href: '/products?categories=Storage', imageId: 'category-storage' },
      { title: 'Bookshelves', href: '/products?categories=Storage', imageId: 'category-storage' },
    ],
  },
  {
    title: 'Loose Cabinets',
    href: '/products?categories=Storage',
    description: 'Explore our collection of loose cabinets.',
    items: [
      { title: 'Night Stands', href: '/products?categories=Storage', imageId: 'category-storage' },
      { title: 'Chest of Drawers', href: '/products?categories=Storage', imageId: 'category-storage' },
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
