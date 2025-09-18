import { Leaf, Brush, ShieldCheck } from "lucide-react";
import ScrollAnimationWrapper from "../animations/ScrollAnimationWrapper";
import Link from "next/link";
import { Button } from "../ui/button";

const philosophyPillars = [
    {
        icon: <Leaf className="w-10 h-10 text-primary" />,
        title: "Sustainability",
        description: "Our materials are responsibly sourced, ensuring your furniture is both beautiful and environmentally conscious.",
    },
    {
        icon: <Brush className="w-10 h-10 text-primary" />,
        title: "Artistry",
        description: "We honor modern design to create timeless, artisanal modular furniture.",
    },
    {
        icon: <ShieldCheck className="w-10 h-10 text-primary" />,
        title: "Quality",
        description: "From the choice of materials to the final finish, every detail is a promise of enduring quality and durability.",
    },
]

export default function OurPhilosophy() {
  return (
    <section className="bg-accent/50 py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollAnimationWrapper>
                <div className="text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-6">
                    Built on a Foundation of Values
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                    We believe that the best furniture respects both the planet and the craft. Our philosophy is woven into every modular kitchen, wardrobe and bed we create, ensuring a legacy of sustainability, artistry, and quality.
                    </p>
                    <Button variant="outline" asChild>
                        <Link href="/#manufacturing">Discover Our Process</Link>
                    </Button>
                </div>
            </ScrollAnimationWrapper>

            <div className="space-y-10">
                {philosophyPillars.map((pillar, index) => (
                    <ScrollAnimationWrapper key={pillar.title} delay={index * 150}>
                        <div className="flex items-start gap-6">
                            <div className="flex-shrink-0 bg-background p-4 rounded-full shadow-md">
                                {pillar.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-headline font-semibold text-primary mb-2">{pillar.title}</h3>
                                <p className="text-muted-foreground">{pillar.description}</p>
                            </div>
                        </div>
                    </ScrollAnimationWrapper>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
