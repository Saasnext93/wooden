'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import type { NavigationLink } from '@/lib/types';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useState } from 'react';

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


export default function SecondaryNav() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const categories = searchParams.getAll('categories');
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <div className="hidden md:flex justify-center items-center py-2 bg-background border-b z-40 relative">
      <NavigationMenu>
        <NavigationMenuList>
          {secondaryNavigationLinks.map(link => {
            const categoryImageId = link.items?.[0]?.imageId;
            let categoryImageUrl = '/wooden.jpg'; // Default image

            if (link.title === 'Upholstered Furniture') {
              categoryImageUrl = '/sofa.jpg';
            } else if (link.title === 'Case Goods') {
              categoryImageUrl = '/modern-parallel-kitchen-design-with-open-shelves-and-backsplash-tiles.jpg';
            } else if (link.title.includes('Cabinets')) {
              categoryImageUrl = '/white-modern-2-door-swing-wardrobe-design-with-integrated-study-table.jpg';
            }


            // A menu is active if the current path starts with its href
            // or if one of its category filters is active
            const isActive = pathname.startsWith(link.href ?? '#') || (link.href?.includes('?categories=') && (link.href.split('?categories=')[1].split('&').some(cat => categories.includes(cat))));


            return (
              <NavigationMenuItem key={link.title}>
                <NavigationMenuTrigger
                  className={cn(
                    'text-base font-headline tracking-wider uppercase',
                     isActive
                      ? 'text-primary font-bold'
                      : 'text-muted-foreground'
                  )}
                >
                   <Link href={link.href ?? '#'}>{link.title}</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent onMouseLeave={() => setActiveImage(null)}>
                  <div className="flex">
                    <ul className="grid grid-cols-2 gap-x-4 p-6 w-[500px]">
                      {link.items?.map(item => (
                        <ListItem
                          key={item.title}
                          href={item.href}
                          title={item.title}
                          onMouseEnter={() => setActiveImage(item.imageUrl ?? null)}
                        />
                      ))}
                    </ul>
                     {categoryImageId && (
                        <div className="p-4 w-[300px] bg-muted/50 flex flex-col justify-between">
                            <div>
                                <div className="relative h-40 w-full mb-4 rounded-md overflow-hidden">
                                    <Image
                                    src={activeImage || categoryImageUrl}
                                    alt={link.title}
                                    data-ai-hint="furniture category"
                                    fill
                                    className="object-cover"
                                    />
                                </div>
                                <h3 className="font-headline text-lg font-semibold">{link.title}</h3>
                                <p className="text-sm text-muted-foreground mt-2 mb-4">{link.description}</p>
                            </div>
                            <Link href={link.href ?? '#'} className="text-sm font-bold text-primary hover:underline self-start">
                                Shop All {link.title} &rarr;
                            </Link>
                        </div>
                    )}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = ({ href, title, onMouseEnter }: { href: string; title: string; onMouseEnter: () => void }) => {
  return (
    <li onMouseEnter={onMouseEnter}>
      <Link
        href={href}
        className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
      >
        <div className="text-sm font-medium leading-none">{title}</div>
      </Link>
    </li>
  );
};
