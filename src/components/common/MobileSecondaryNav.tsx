'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { secondaryNavigationLinks } from '@/lib/placeholder-data';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

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
