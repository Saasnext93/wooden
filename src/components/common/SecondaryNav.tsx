'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { secondaryNavigationLinks } from '@/lib/placeholder-data';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function SecondaryNav() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className={cn("hidden md:flex w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 justify-center transition-all duration-300", isScrolled ? 'py-0' : 'py-2' )}>
      <NavigationMenu>
        <NavigationMenuList>
          {secondaryNavigationLinks.map((link) => {
            const categoryImage = PlaceHolderImages.find(p => p.id === link.items?.[0]?.imageId);

            return (
              <NavigationMenuItem key={link.title}>
                <NavigationMenuTrigger className={cn("text-base font-headline tracking-wider uppercase transition-all duration-300", isScrolled ? 'text-sm' : 'text-base')}>
                  {link.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex">
                    <ul className="grid grid-cols-2 gap-x-4 p-6 w-[500px]">
                      {link.items?.map((item) => (
                        <ListItem
                          key={item.title}
                          href={item.href}
                          title={item.title}
                        />
                      ))}
                    </ul>
                    {categoryImage && (
                      <div className="p-4 w-[300px] bg-muted/50 flex flex-col justify-between">
                        <div>
                          <div className="relative h-40 w-full mb-4 rounded-md overflow-hidden">
                             <Image
                                src={categoryImage.imageUrl}
                                alt={categoryImage.description}
                                data-ai-hint={categoryImage.imageHint}
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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  )
});
ListItem.displayName = "ListItem";
