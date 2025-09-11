'use client';

import { type ReactNode, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

type ScrollAnimationWrapperProps = {
  children: ReactNode;
  className?: string;
  delay?: number; // in ms
};

export default function ScrollAnimationWrapper({
  children,
  className,
  delay = 0,
}: ScrollAnimationWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible');
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0 transform translate-y-8 transition-all ease-out duration-1000',
        '[&.is-visible]:opacity-100 [&.is-visible]:translate-y-0',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
