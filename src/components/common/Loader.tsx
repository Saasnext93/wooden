'use client';

import { useState, useEffect } from 'react';
import { Sofa, Armchair, Bed, Lamp, Table2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const icons = [
  Sofa,
  Armchair,
  Bed,
  Lamp,
  Table2,
];

export default function Loader() {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // This effect handles the icon rotation
    const iconInterval = setInterval(() => {
      setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 2000); // Change icon every 2 seconds

    // This effect handles the loader fade-out
    const fadeOutTimer = setTimeout(() => {
      setShow(false);
    }, 4000); // Start fade-out after 4 seconds

    return () => {
      clearInterval(iconInterval);
      clearTimeout(fadeOutTimer);
    };
  }, []);

  const CurrentIcon = icons[currentIconIndex];

  return (
    <div className={cn(
      "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500",
      !show && "loader-fade-out pointer-events-none"
    )}>
      <div className="relative w-24 h-24">
        {icons.map((Icon, index) => (
          <Icon
            key={index}
            className={cn(
              "absolute inset-0 w-full h-full text-primary transition-opacity duration-1000",
              index === currentIconIndex ? "opacity-100 loader-icon" : "opacity-0"
            )}
            strokeWidth={1.5}
          />
        ))}
      </div>
      <p className="mt-4 text-lg font-headline text-primary animate-pulse">
        Crafting your experience...
      </p>
    </div>
  );
}
