import { Building2, Home, Users, BookCopy } from "lucide-react";
import ScrollAnimationWrapper from "../animations/ScrollAnimationWrapper";

const stats = [
    {
        icon: <Home className="w-8 h-8 text-primary" />,
        value: "5000+",
        label: "Interior Projects"
    },
    {
        icon: <Users className="w-8 h-8 text-primary" />,
        value: "200+",
        label: "Design Experts"
    },
    {
        icon: <Building2 className="w-8 h-8 text-primary" />,
        value: "10 Cities",
        label: "2 Countries"
    },
    {
        icon: <BookCopy className="w-8 h-8 text-primary" />,
        value: "2 lac+",
        label: "Design Options"
    }
];

export default function StatsSection() {
    return (
        <section className="bg-background py-12 md:py-16">
            <div className="container mx-auto px-4">
                <ScrollAnimationWrapper>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex items-center justify-center space-x-4 relative">
                                <div className="flex-shrink-0">
                                    {stat.icon}
                                </div>
                                <div>
                                    <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                                </div>
                                {index < stats.length - 1 && (
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px bg-border hidden sm:block" />
                                )}
                            </div>
                        ))}
                    </div>
                </ScrollAnimationWrapper>
            </div>
        </section>
    );
}
