import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex flex-col text-primary leading-none">
      <span className="text-3xl font-headline font-bold tracking-tight">
        Wooden
      </span>
      <span className="text-xs font-sans tracking-widest text-muted-foreground mt-1">
        MANUFACTURE
      </span>
    </Link>
  );
}
