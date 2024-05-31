'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthProvider';
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
  otp: z.string().min(6, {
    message: 'The OTP must be 6 characters',
  }),
});

const StepTwo = () => {
  //@ts-ignore
  const { verifyOtp, user }: { verifyOtp: any; user: any } = useAuth();
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  function onSubmit(data: z.infer<typeof FormSchema>) {
    (async () => {
      try {
        const verifyData = await verifyOtp({ ...data, email: user.email });
        if (verifyData) {
          router.push('/signup/step_three');
        }
      } catch (error) {
        toast({
          title: 'You submitted the following values:',
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">
                {JSON.stringify(error, null, 2)}
              </code>
            </pre>
          ),
        });
        // Handle error appropriately, e.g., show an error message
      }
    })();
  }
  return (
    <div className="font-jakarta  max-w-md w-full mx-auto flex flex-col justify-center gap-2">
      <div className="description leading-7">
        <h2 className="font-medium text-2xl">Verify Email</h2>
        <p>
          A six digit code has been sent to your email, please enter the code
          below
        </p>
      </div>
      <Form {...form}>
        <div className="flex mt-3 flex-col justify-center">
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[16px]  font-medium ">
                    Verification Code
                  </FormLabel>
                  <FormMessage />
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter 6 digit code"
                      className="py-[20px] px-[16px] outline-none border-[#DCDCDF] focus:border-[#DCDCDF] background-white"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full rounded-[15px] ">
              Continue
            </Button>
          </form>
        </div>
      </Form>
    </div>
  );
};

export default StepTwo;
