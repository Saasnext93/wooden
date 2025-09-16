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
        <section id="about" className="bg-background py-24 md:py-32 scroll-mt-20 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <ScrollAnimationWrapper>
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">The Soul of Wood, The Heart of a Home</h2>
                            <p className="text-lg text-muted-foreground mb-4">
                                At Pinnacle Modular Furniture, we believe furniture is more than just an object. It's a part of your story. For over three decades, our family has been dedicated to sourcing the finest sustainable hardwoods and transforming them into functional works of art.
                            </p>
                            <p className="text-muted-foreground mb-6">
                                Every curve, joint, and finish is a testament to our passion for quality and a deep respect for the natural material. We invite you to bring this legacy of craftsmanship into your home.
                            </p>
                             <Button asChild>
                                <Link href="/#manufacturing">Our Process</Link>
                            </Button>
                        </div>
                    </ScrollAnimationWrapper>
                     <ScrollAnimationWrapper delay={200} className="flex justify-center items-center h-full">
                        <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px]">
                             <div className="absolute inset-0 bg-accent rotate-12 rounded-3xl"></div>
                             {aboutImage && (
                                <Image 
                                    src={aboutImage.imageUrl}
                                    alt={aboutImage.description}
                                    data-ai-hint={aboutImage.imageHint}
                                    fill
                                    className="rounded-3xl shadow-2xl object-cover"
                                />
                            )}
                        </div>
                    </ScrollAnimationWrapper>
                </div>
            </div>
        </section>
    );
}