'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useActionState, useEffect, useRef } from 'react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { submitContactForm } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import ScrollAnimationWrapper from '../animations/ScrollAnimationWrapper';
import { Checkbox } from '../ui/checkbox';
import { Loader2, Zap } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  mobile: z.string().min(10, { message: 'Please enter a valid mobile number.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  city: z.string({ required_error: "Please select a city." }),
  whatsapp: z.boolean().default(false).optional(),
});

type FormSchema = z.infer<typeof formSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const [state, formAction] = useActionState(submitContactForm, { message: '', success: false });
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      mobile: '',
      email: '',
      whatsapp: true,
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: 'Success!',
          description: state.message,
        });
        form.reset();
      } else {
        toast({
          title: 'Error',
          description: state.message,
          variant: 'destructive',
        });
      }
    }
  }, [state, toast, form]);
  
  const { isSubmitting } = form.formState;

  return (
    <section id="contact" className="py-16 md:py-24 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8 items-center bg-card rounded-xl shadow-lg overflow-hidden">
          {/* Left Column: Map */}
          <div className="md:col-span-3 p-8">
            <Image
              src="/in.png"
              alt="Map of India with service locations"
              data-ai-hint="India map"
              width={1260}
              height={750}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Right Column: Form */}
          <div className="md:col-span-2 bg-primary p-8 h-full flex flex-col justify-center">
            <ScrollAnimationWrapper delay={200} className="w-full">
               <div className="text-center mb-6">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary-foreground mb-2">Get a free consultation</h2>
                    <p className="text-lg text-muted-foreground text-primary-foreground/80">
                        with our top interior designers
                    </p>
                </div>
              <Form {...form}>
                <form ref={formRef} action={formAction} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary-foreground">Name*</FormLabel>
                        <FormControl>
                          <Input {...field} className="bg-background" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex gap-2">
                     <div className="w-1/4">
                        <Select defaultValue="+91">
                          <SelectTrigger className="bg-background">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="+91">+91</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    <div className="w-3/4">
                      <FormField
                          control={form.control}
                          name="mobile"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-primary-foreground sr-only">Mobile*</FormLabel>
                              <FormControl>
                                <Input placeholder="Mobile*" {...field} className="bg-background" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                    </div>
                  </div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary-foreground">Email*</FormLabel>
                        <FormControl>
                          <Input {...field} className="bg-background" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary-foreground">Choose City*</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-background">
                              <SelectValue placeholder="Select a city" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="mumbai">Mumbai</SelectItem>
                            <SelectItem value="delhi">Delhi</SelectItem>
                            <SelectItem value="bangalore">Bangalore</SelectItem>
                            <SelectItem value="hyderabad">Hyderabad</SelectItem>
                            <SelectItem value="pune">Pune</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="whatsapp"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 text-primary-foreground">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="border-primary-foreground data-[state=checked]:bg-primary-foreground data-[state=checked]:text-primary"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            You can reach me on <Zap className="inline-block h-4 w-4 text-green-300 fill-current" /> WhatsApp
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex justify-center">
                    <Button type="submit" className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90" disabled={isSubmitting}>
                      {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Connect With Our Team
                    </Button>
                  </div>
                   <p className="text-xs text-primary-foreground/80 text-center">
                    By submitting this form, you agree to the privacy policy and terms of use.
                  </p>
                </form>
              </Form>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
