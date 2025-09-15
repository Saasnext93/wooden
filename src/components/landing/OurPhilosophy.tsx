import { Leaf, Brush, ShieldCheck } from "lucide-react";
import ScrollAnimationWrapper from "../animations/ScrollAnimationWrapper";
import Link from "next/link";
import { Button } from "../ui/button";

const philosophyPillars = [
    {
        icon: <Leaf className="w-10 h-10 text-primary mb-4" />,
        title: "Sustainability",
        description: "We are committed to our planet. Our materials are responsibly sourced, ensuring that your furniture is not only beautiful but also environmentally conscious.",
    },
    {
        icon: <Brush className="w-10 h-10 text-primary mb-4" />,
        title: "Artistry",
        description: "Each piece is a celebration of the artisan's touch. We honor traditional techniques while embracing modern design to create timeless furniture.",
    },
    {
        icon: <ShieldCheck className="w-10 h-10 text-primary mb-4" />,
        title: "Quality",
        description: "We believe in furniture that lasts. From the choice of wood to the final finish, every detail is a promise of enduring quality and durability.",
    },
]

export default function OurPhilosophy() {
  return (
    <section className="bg-accent py-20 md:py-32">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
              Our Philosophy
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe that the best furniture is built on a foundation of core values that respect both the planet and the craft.
            </p>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-3 gap-12 text-center">
            {philosophyPillars.map((pillar, index) => (
                <ScrollAnimationWrapper key={pillar.title} delay={index * 150}>
                    <div className="flex flex-col items-center">
                        {pillar.icon}
                        <h3 className="text-2xl font-headline font-semibold text-primary mb-3">{pillar.title}</h3>
                        <p className="text-muted-foreground">{pillar.description}</p>
                    </div>
                </ScrollAnimationWrapper>
            ))}
        </div>
        
        <ScrollAnimationWrapper className="text-center mt-16" delay={450}>
            <Button variant="outline" asChild>
              <Link href="/#manufacturing">Discover Our Process</Link>
            </Button>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
