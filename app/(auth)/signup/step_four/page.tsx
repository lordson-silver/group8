'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

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

const StepFour = () => {
  const router = useRouter();

  return (
    <div>
      <div className="flex p-3 flex-col justify-center font-jakarta">
        <h2 className="text-3xl  font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-4">
          Sign Up Successful
        </h2>
        <p className="pb-4 text-sm text-muted-foreground mb-4">
          Your account has been successfully been created. Proceed to Sign in
        </p>

        <Button className="w-full">Continue</Button>
      </div>
    </div>
  );
};

export default StepFour;
