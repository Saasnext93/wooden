import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  isScrolled?: boolean;
};

export default function Logo({ isScrolled = false }: LogoProps) {
  return (
    <Link href="/" className="flex flex-col text-primary leading-none transition-all duration-300">
      <span className={cn(
        "font-headline font-bold tracking-tight transition-all duration-300",
        isScrolled ? 'text-2xl' : 'text-3xl'
      )}>
        Wooden
      </span>
      <span className={cn(
        "font-sans tracking-widest text-muted-foreground transition-all duration-300",
        isScrolled ? 'text-[0.5rem] mt-0.5' : 'text-xs mt-1'
      )}>
        MANUFACTURE
      </span>
    </Link>
  );
}
