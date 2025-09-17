'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/common/Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import React, { useState, useEffect, Suspense } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import type { NavigationLink } from '@/lib/types';
import AnimatedHamburgerIcon from './AnimatedHamburgerIcon';
import SecondaryNav from './SecondaryNav';
import MobileSecondaryNav from './MobileSecondaryNav';

const mainNavigationLinks: NavigationLink[] = [
  {
    title: 'Legacy',
    href: '#',
  },
  {
    title: 'Products',
    href: '/products',
  },
  {
    title: 'Contact',
    href: '/#contact',
  },
];


export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on pathname change
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <header className={cn("w-full border-b bg-background transition-all duration-300 z-50", isScrolled ? 'py-2' : 'py-4')}>
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center">
            <Logo isScrolled={isScrolled} />
          </div>

          {/* Desktop Navigation & Quote Button */}
          <div className="hidden md:flex items-center space-x-6">
              <nav className="flex items-center">
                <NavigationMenu>
                  <NavigationMenuList>
                    {mainNavigationLinks.map((link) => (
                      <NavigationMenuItem key={link.title}>
                          <Link href={link.href ?? "/"} legacyBehavior passHref>
                            <NavigationMenuLink asChild className={cn('text-lg font-medium transition-colors px-4 py-2 rounded-full text-muted-foreground hover:text-primary hover:bg-accent', pathname === link.href ? 'text-primary bg-accent font-semibold' : '')}>
                              <a>{link.title}</a>
                            </NavigationMenuLink>
                          </Link>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </nav>
              <div className="ml-4">
                  <Button asChild size="sm">
                      <Link href="/#contact">Get Quote</Link>
                  </Button>
              </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary hover:bg-transparent focus-visible:bg-transparent">
                  <AnimatedHamburgerIcon isOpen={isMobileMenuOpen} />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="h-full w-full bg-background/95 backdrop-blur-lg p-0 flex flex-col z-50">
                  <SheetHeader className="flex flex-row justify-between items-center p-4 border-b">
                      <Logo />
                      <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                      <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} className="text-primary hover:bg-transparent focus-visible:bg-transparent">
                          <AnimatedHamburgerIcon isOpen={true} />
                          <span className="sr-only">Close Menu</span>
                      </Button>
                  </SheetHeader>
                <div className="flex-grow flex flex-col justify-center p-6 text-center overflow-y-auto">
                    <div className="w-full max-w-sm mx-auto">
                        <nav className="flex flex-col space-y-6">
                            {mainNavigationLinks.map((link, index) => (
                                <Link
                                key={link.title}
                                href={link.href ?? "/"}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                    'text-3xl font-headline transition-all duration-500 ease-out opacity-0 translate-y-4',
                                    isMobileMenuOpen && 'opacity-100 translate-y-0',
                                    pathname === link.href ? 'text-primary' : 'text-foreground hover:text-primary'
                                )}
                                style={{ transitionDelay: `${150 * (index + 1)}ms`}}
                                >
                                {link.title}
                                </Link>
                            ))}
                        </nav>
                        <div className="my-8 border-t"></div>
                        <Suspense fallback={<div>Loading categories...</div>}>
                            <MobileSecondaryNav />
                        </Suspense>
                        <div className="mt-12 w-full">
                            <Button asChild className='w-full' size="lg">
                                <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>Get Quote</Link>
                            </Button>
                        </div>
                    </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
       <Suspense fallback={<div className="h-12 border-b"></div>}>
        <SecondaryNav />
      </Suspense>
    </>
  );
}
