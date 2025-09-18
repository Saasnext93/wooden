
'use server';

import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  mobile: z.string().min(10, { message: "Please enter a valid mobile number." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  city: z.string({ required_error: "Please select a city." }).optional(),
  whatsapp: z.boolean().default(false).optional(),
  productName: z.string().optional(),
});


export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = formSchema.safeParse({
    name: formData.get('name'),
    mobile: formData.get('mobile'),
    email: formData.get('email'),
    city: formData.get('city'),
    whatsapp: formData.get('whatsapp') === 'on',
    productName: formData.get('productName'),
  });

  if (!validatedFields.success) {
    const firstError = Object.values(validatedFields.error.flatten().fieldErrors)[0]?.[0];
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: firstError || 'Error: Please check the form fields.',
      success: false,
    };
  }

  // In a real application, you would send this data to your backend, email service, or database.
  console.log('Form Submitted:');
  console.log(validatedFields.data);
  
  if (validatedFields.data.productName) {
    return {
      message: `Thank you, ${validatedFields.data.name}! Your quote request for ${validatedFields.data.productName} has been sent.`,
      success: true,
      resetKey: Date.now().toString(),
    };
  }


  return {
    message: `Thank you, ${validatedFields.data.name}! Your message has been sent.`,
    success: true,
    resetKey: Date.now().toString(),
  };
}
