'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import Logo from '@/components/common/Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import React, { useState, useEffect } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { mainNavigationLinks, secondaryNavigationLinks } from '@/lib/placeholder-data';

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

  return (
    <header className={cn("w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300", isScrolled ? 'py-2' : 'py-3')}>
      <div className="container mx-auto flex flex-col items-center px-4">
        {/* Logo */}
        <div className={cn("flex items-center transition-all duration-300", isScrolled ? 'p-1' : 'p-4')}>
          <Logo isScrolled={isScrolled} />
        </div>

        {/* Desktop Navigation & Quote Button */}
        <div className={cn("hidden md:flex items-center justify-center transition-all duration-300", isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100')}>
            <nav className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {mainNavigationLinks.map((link) => (
                    <NavigationMenuItem key={link.title}>
                        <Link href={link.href ?? "/"} legacyBehavior passHref>
                          <NavigationMenuLink className={cn('text-lg font-medium transition-colors px-4 py-2 rounded-full text-muted-foreground hover:text-primary hover:bg-accent', pathname === link.href ? 'text-primary bg-accent font-semibold' : '')}>
                            {link.title}
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
        <div className="md:hidden absolute top-3 right-4">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary hover:bg-transparent focus-visible:bg-transparent">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-6">
                <div className="mb-8">
                  <Logo />
                </div>
                <nav className="flex flex-col space-y-4">
                  {mainNavigationLinks.map((link) => (
                      <Link
                        key={link.title}
                        href={link.href ?? "/"}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          'text-lg font-medium transition-colors hover:text-primary',
                          pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                        )}
                      >
                        {link.title}
                      </Link>
                  ))}
                   <div className="pt-4 mt-4 border-t">
                    {secondaryNavigationLinks.map((link) => (
                      <div key={link.title}>
                        <h3 className="font-semibold text-lg mt-4">{link.title}</h3>
                        <div className="flex flex-col space-y-2 mt-2 ml-2">
                        {link.items?.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={cn(
                              'text-muted-foreground transition-colors hover:text-primary',
                              pathname === item.href ? 'text-primary' : ''
                            )}
                          >
                            {item.title}
                          </Link>
                        ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </nav>
                <div className="mt-8">
                    <Button asChild className='w-full'>
                        <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>Get Quote</Link>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
