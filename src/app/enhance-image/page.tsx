import ImageEnhancer from "@/components/ai/ImageEnhancer";

export default function EnhanceImagePage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-2">AI Image Enhancer</h1>
        <p className="text-lg text-muted-foreground">
          Upload a low-quality furniture image and let our AI bring it to life with enhanced resolution and clarity.
        </p>
      </div>
      <ImageEnhancer />
    </div>
  );
}
