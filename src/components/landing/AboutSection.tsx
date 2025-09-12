import Image from "next/image";
import ScrollAnimationWrapper from "../animations/ScrollAnimationWrapper";
import Link from "next/link";
import { Button } from "../ui/button";

export default function AboutSection() {
    const aboutImage = {
        imageUrl: "https://images.unsplash.com/photo-1653971858625-9cb23d0dca80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOHx8JTIwd29vZGVuJTIwZnVybml0dXJlfGVufDB8fHx8MTc1NzY5NjEwMnww&ixlib=rb-4.1.0&q=80&w=1080",
        description: "Image for the about section",
        imageHint: "woodworking tools"
    };

    return (
        <section className="bg-background py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <ScrollAnimationWrapper>
                        {aboutImage && (
                            <Image 
                                src={aboutImage.imageUrl}
                                alt={aboutImage.description}
                                data-ai-hint={aboutImage.imageHint}
                                width={600}
                                height={800}
                                className="rounded-lg shadow-lg object-cover"
                            />
                        )}
                    </ScrollAnimationWrapper>
                    <ScrollAnimationWrapper delay={200}>
                        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">The Soul of Wood, The Heart of a Home</h2>
                        <p className="text-lg text-muted-foreground mb-4">
                            At Artisan Showcase, we believe furniture is more than just an object. It's a part of your story. For over three decades, our family has been dedicated to sourcing the finest sustainable hardwoods and transforming them into functional works of art.
                        </p>
                        <p className="text-muted-foreground mb-6">
                            Every curve, joint, and finish is a testament to our passion for quality and a deep respect for the natural material. We invite you to bring this legacy of craftsmanship into your home.
                        </p>
                        <Button asChild>
                            <Link href="/products">Learn More</Link>
                        </Button>
                    </ScrollAnimationWrapper>
                </div>
            </div>
        </section>
    );
}
