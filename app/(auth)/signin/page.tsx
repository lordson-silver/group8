'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';

import Link from 'next/link';

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: 'password must be a minimum of 8 characters',
  }),
});

const SignIn = () => {
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
  }
  return (
    <div className="font-jakarta  max-w-md w-full mx-auto flex flex-col justify-center gap-2">
      <div className="description leading-7">
        <h2 className="font-semibold text-2xl">Sign In</h2>
        <p>Sign in to get access to your purchased course</p>
      </div>
      <Form {...form}>
        <div className="flex mt-3 flex-col justify-center">
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[16px]  font-semibold ">
                    Email
                  </FormLabel>
                  <FormMessage />
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Email address"
                      className="py-[20px] px-[16px] outline-none border-[#DCDCDF] focus:border-[#DCDCDF] background-white"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[16px]  font-semibold ">
                    Password
                  </FormLabel>
                  <FormMessage />
                  <FormControl>
                    <Input {...field} placeholder="password" type="password" />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full rounded-[15px] ">
              Log In
            </Button>
          </form>
        </div>
      </Form>
    </div>
  );
};

export default SignIn;
