'use server';

/**
 * @fileOverview AI flow to enhance the resolution of low-quality images.
 *
 * - enhanceImageResolution - Function to enhance the resolution of an image.
 * - EnhanceImageResolutionInput - Input type for the enhanceImageResolution function.
 * - EnhanceImageResolutionOutput - Output type for the enhanceImageResolution function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceImageResolutionInputSchema = z.object({
  lowResImage: z
    .string()
    .describe(
      "The low resolution image to enhance, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type EnhanceImageResolutionInput = z.infer<
  typeof EnhanceImageResolutionInputSchema
>;

const EnhanceImageResolutionOutputSchema = z.object({
  highResImage: z
    .string()
    .describe(
      'The enhanced high resolution image, as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' 
    ),
});
export type EnhanceImageResolutionOutput = z.infer<
  typeof EnhanceImageResolutionOutputSchema
>;

export async function enhanceImageResolution(
  input: EnhanceImageResolutionInput
): Promise<EnhanceImageResolutionOutput> {
  return enhanceImageResolutionFlow(input);
}

const enhanceImageResolutionFlow = ai.defineFlow(
  {
    name: 'enhanceImageResolutionFlow',
    inputSchema: EnhanceImageResolutionInputSchema,
    outputSchema: EnhanceImageResolutionOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/gemini-2.5-flash-image-preview',
      prompt: [
        {media: {url: input.lowResImage}},
        {
          text: 'enhance the resolution of this image. Focus on making the details sharp and clear.',
        },
      ],
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    return {highResImage: media!.url!};
  }
);
