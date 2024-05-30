'use client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Upload from '@/components/ui/upload';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { toast } from '@/components/ui/use-toast';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';

const FormSchema = z.object({
  image: z.any(),
  career: z.string(),
  course: z.string({
    required_error: 'Please select a course of study.',
  }),
});

const StepThree = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    console.log('move');
    router.push('/signup/step_four');
  }

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };
  return (
    <Form {...form}>
      <div className="flex p-3 flex-col justify-center font-jakarta">
        <FormLabel className="text-3xl">Academic Information</FormLabel>
        <FormDescription className="pb-4">
          Sign up to get access to your purchased courses and a whole lot more!
        </FormDescription>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
          <div className="bg-[#EFEFEF] flex justify-between py-[17px] px-[15px] rounded-xl items-center ">
            <div>
              <FormLabel className="text-[16px]  font-medium  leading-5">
                Profile Picture
              </FormLabel>
              <FormDescription className="">
                Please upload a profile picture for identification
              </FormDescription>
            </div>
            <Button className="gap-1 it" onClick={handleButtonClick}>
              Upload <Upload />
            </Button>
            <Input
              id="picture"
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
            />
          </div>
          {/* <div>
              <FormLabel htmlFor="picture" className="text-[16px]  font-medium  leading-5">
                Profile Picture
              </FormLabel>
              <FormDescription className="">
                Please upload a profile picture for identification
              </FormDescription>
            <Input id="picture" type="file" />
            </div> */}
          <FormField
            control={form.control}
            name="career"
            render={({ field }) => (
              <FormItem>
                <div className="grid gap-2">
                  <FormLabel
                    htmlFor="career"
                    className="text-[16px]  font-medium "
                  >
                    Career Interests
                  </FormLabel>
                  <FormMessage />
                  <FormControl>
                    <Textarea
                      {...field}
                      id="career"
                      placeholder="Tell us about your career"
                      required
                      className="resize-none rounded-[10px] py-4 px-5 min-h-24"
                    />
                  </FormControl>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="course"
            render={({ field }) => (
              <FormItem>
                <div className="grid gap-2">
                  <FormLabel
                    htmlFor="course"
                    className="text-[16px]  font-medium "
                  >
                    Course Of Study
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a course of study" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="font-jakarta">
                      <SelectItem value="Computer Science">
                        Computer Science
                      </SelectItem>
                      <SelectItem value="Information Technology">
                        Information Technology
                      </SelectItem>
                      <SelectItem value="Cyber Security">
                        Cyber Security
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Continue
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <Link href="/signin" className="underline">
            Sign in
          </Link>
        </div>
      </div>
    </Form>
  );
};

export default StepThree;
