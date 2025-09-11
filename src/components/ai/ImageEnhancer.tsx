'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Upload, Sparkles, Loader2, Download, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { enhanceImageResolution } from '@/ai/flows/enhance-image-resolution';

export default function ImageEnhancer() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [enhancedImage, setEnhancedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 4 * 1024 * 1024) { // 4MB limit
        toast({
          title: "File too large",
          description: "Please upload an image smaller than 4MB.",
          variant: "destructive",
        });
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        setOriginalImage(e.target?.result as string);
        setEnhancedImage(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEnhance = async () => {
    if (!originalImage) return;

    setIsLoading(true);
    try {
      const result = await enhanceImageResolution({ lowResImage: originalImage });
      if (result.highResImage) {
        setEnhancedImage(result.highResImage);
        toast({
          title: "Success!",
          description: "Your image has been enhanced.",
        });
      } else {
        throw new Error("AI did not return an enhanced image.");
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Enhancement Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const resetImages = () => {
    setOriginalImage(null);
    setEnhancedImage(null);
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {!originalImage && (
        <Card className="flex justify-center items-center p-8 border-2 border-dashed">
          <CardContent className="text-center">
            <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">Upload an Image</h3>
            <p className="text-muted-foreground mb-4">Drag and drop or click to upload (max 4MB)</p>
            <Button asChild>
                <label htmlFor="file-upload">
                    Browse Files
                    <input id="file-upload" type="file" className="sr-only" accept="image/*" onChange={handleFileChange} />
                </label>
            </Button>
          </CardContent>
        </Card>
      )}

      {originalImage && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
                <h3 className="text-center font-semibold text-lg">Original Image</h3>
                <Card className="overflow-hidden">
                    <Image src={originalImage} alt="Original" width={500} height={500} className="w-full h-auto object-contain" />
                </Card>
            </div>
            <div className="space-y-2">
                <h3 className="text-center font-semibold text-lg">Enhanced Image</h3>
                <Card className="overflow-hidden aspect-square flex items-center justify-center bg-muted/50">
                    {isLoading && <Loader2 className="h-10 w-10 text-primary animate-spin" />}
                    {!isLoading && enhancedImage && <Image src={enhancedImage} alt="Enhanced" width={500} height={500} className="w-full h-auto object-contain" />}
                    {!isLoading && !enhancedImage && <Sparkles className="h-10 w-10 text-muted-foreground" />}
                </Card>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={resetImages} variant="outline" className="w-full sm:w-auto">
              <X className="mr-2 h-4 w-4" /> Upload New Image
            </Button>
            <Button onClick={handleEnhance} disabled={isLoading || enhancedImage !== null} className="w-full sm:w-auto">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enhancing...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" /> Enhance Image
                </>
              )}
            </Button>
            {enhancedImage && (
              <Button asChild className="w-full sm:w-auto">
                <a href={enhancedImage} download="enhanced-image.png">
                  <Download className="mr-2 h-4 w-4" /> Download
                </a>
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
