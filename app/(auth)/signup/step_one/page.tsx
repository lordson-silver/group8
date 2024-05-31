'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useAuth } from '@/context/AuthProvider';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const FormSchema = z.object({
  firstName: z.string().min(2, {
    message: 'First name must be at least 2 characters.',
  }),
  lastName: z.string().min(2, {
    message: 'Last name must be at least 2 characters',
  }),
  email: z.string().email(),
  password: z.string().min(8, {
    message: 'Password must be  8 characters',
  }),
  status: z.string({
    required_error: 'Please Select a Role.',
  }),
});

const StepOne = () => {
  //@ts-ignore
  const { signup }: { signup: any } = useAuth();
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    (async () => {
      console.log('test');
      try {
        const userData = await signup(data);
        console.log('user:', userData);
        router.push('/signup/step_two');
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
      }
    })();
  }

  return (
    <Form {...form}>
      <div className="flex p-3 flex-col justify-center">
        <FormLabel className="text-3xl">Create an Account</FormLabel>
        <FormDescription className="pb-4">
          Provide your basic information and password to create an account{' '}
        </FormDescription>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <div className="grid gap-2">
                    <FormLabel
                      htmlFor="first-name"
                      className="text-[16px]  font-medium"
                    >
                      First name
                    </FormLabel>
                    <FormMessage />
                    <FormControl>
                      <Input
                        {...field}
                        id="first-name"
                        placeholder="Max"
                        required
                      />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <div className="grid gap-2">
                    <FormLabel
                      htmlFor="last-name"
                      className="text-[16px]  font-medium "
                    >
                      Last name
                    </FormLabel>
                    <FormMessage />
                    <FormControl>
                      <Input
                        {...field}
                        id="last-name"
                        placeholder="Max"
                        required
                      />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="grid gap-2">
                  <FormLabel
                    htmlFor="email"
                    className="text-[16px]  font-medium "
                  >
                    Email
                  </FormLabel>
                  <FormMessage />
                  <FormControl>
                    <Input
                      {...field}
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                    />
                  </FormControl>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="grid gap-2">
                  <FormLabel
                    htmlFor="password"
                    className="text-[16px]  font-medium "
                  >
                    Password
                  </FormLabel>
                  <FormMessage />
                  <FormControl>
                    <Input
                      {...field}
                      id="password"
                      type="password"
                      placeholder="Minimum 8 characters"
                    />
                  </FormControl>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <div className="grid gap-2">
                  <FormLabel
                    htmlFor="status"
                    className="text-[16px]  font-medium "
                  >
                    Are you a Lecturer or Student
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Role" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="lecturer">Lecturer</SelectItem>
                      <SelectItem value="student">Student</SelectItem>
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

export default StepOne;
