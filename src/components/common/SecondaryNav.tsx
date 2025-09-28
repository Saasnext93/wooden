
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
    title: 'Modular Kitchens',
    href: '/products?categories=Modular%20Kitchen%20Design',
    description: 'Beautiful kitchens for modern living.',
    items: [
      { title: 'L-Shaped Kitchen', href: '/products/prod_1', imageId: 'kitchen-lshape', imageUrl: '/l-shaped-contemporary-kitchen-design-with-full-height-cabinets-and-granite-countertop.jpg' },
      { title: 'U-Shaped Kitchen', href: '/products/prod_6', imageId: 'kitchen-ushape', imageUrl: '/u-shaped-contemporary-kitchen-design-with-led-lights-and-quartz-countertops.jpg' },
      { title: 'Parallel Kitchen', href: '/products/prod_5', imageId: 'kitchen-parallel', imageUrl: '/modern-parallel-kitchen-design-with-open-shelves-and-backsplash-tiles.jpg' },
      { title: 'Straight Kitchen', href: '/products/prod_9', imageId: 'kitchen-straight', imageUrl: '/straight-kitchen-design.jpg' },
      { title: 'Island Kitchen', href: '/products/prod_10', imageId: 'kitchen-island', imageUrl: '/island-kitchen-design.jpg' },
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
  {
    title: 'Modular Furniture',
    href: '/products?categories=Modular%20Furniture',
    description: 'Functional and stylish furniture.',
    items: [
        { title: 'Sofas', href: '/products/prod_11', imageId: 'sofa-modern', imageUrl: '/sofa.jpg' },
        { title: 'TV Units', href: '/products/prod_12', imageId: 'tv-unit', imageUrl: '/tv-unit.jpg' },
        { title: 'Crockery Units', href: '/products', imageId: 'crockery-unit', imageUrl: '/crockery-unit.jpg' },
    ]
  }
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
            let categoryImageUrl = '/wooden.jpg'; // Default image

            if (link.title === 'Modular Kitchens') {
              categoryImageUrl = '/l-shaped-contemporary-kitchen-design-with-full-height-cabinets-and-granite-countertop.jpg';
            } else if (link.title === 'Wardrobes') {
              categoryImageUrl = '/white-modern-2-door-swing-wardrobe-design-with-integrated-study-table.jpg';
            } else if (link.title === 'Bedroom') {
              categoryImageUrl = '/contemporary-boys-room-design-with-glossy-beige-wardrobe.jpg';
            } else if (link.title === 'Modular Furniture') {
                categoryImageUrl = '/sofa.jpg';
            }


            // A menu is active if the current path starts with its href
            // or if one of its category filters is active
            const isActive = pathname.startsWith(link.href ?? '#') || (link.href?.includes('?categories=') && (link.href.split('?categories=')[1].split('%20').join(' ').split('&').some(cat => categories.includes(cat))));


            return (
              <NavigationMenuItem key={link.title}>
                <NavigationMenuTrigger
                  className={cn(
                    'text-base font-headline tracking-wider uppercase font-bold',
                     isActive
                      ? 'text-primary'
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
                     {link.items && (
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
