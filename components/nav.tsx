import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { LogoutIcon } from '@/components/ui/importSVG';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import Image from 'next/image';
import Link from 'next/link';

export function Nav({ className }: { className?: string }) {

  const signedIn = true
  return (
    <div
      className={cn(
        className,
        'w-full pt-5 px-2 md:px-10 m-auto flex justify-between items-center absolute top-0'
      )}
    >
      <Link href="/">
        <Image
          src={'/logo.png'}
          className="-ml-2 md:m-0 object-cover"
          height={80}
          width={80}
          alt="Uniport Logo"
        />
      </Link>
      <div className="flex flex-grow gap-2 md:gap-4 justify-end">
        {signedIn == true ? 
        <div className='border-[#2E2E2E] border rounded-[15px] bg-[#1F1F1F] flex gap-3 items-center p-[10px]'>
            <Avatar>
              <AvatarImage src="./image.png" />
            </Avatar>

          
            <div className="flex flex-col justify-center sm:min-w-32">
              <p className="text-[12px] text-white">Daniel Grayson</p>
              <p className=" text-[10px] text-[#6D6D6D]">daniel@gmail.com</p>
            </div>
          <LogoutIcon />         
        </div>
        : <><Link href="/signin">
          <Button variant="outline" className="text-white" size="sm">
            Sign In
          </Button>
        </Link>
        <Link href="/signup/step_one">
          <Button size="sm">Sign Up</Button>
        </Link></>
        }
      </div>
    </div>
  );
}

export function AuthNav({
  className,
  navText,
  href,
}: {
  className?: string;
  navText: string;
  href: string;
}) {
  return (
    <div
      className={cn(
        className,
        'sm:min-w-[60%] pt-5 px-2 md:px-10 m-auto flex justify-between items-center absolute top-0'
      )}
    >
      <Link href="/">
        <Image
          src={'/logo.png'}
          className="-ml-2 md:m-0 object-cover"
          height={80}
          width={80}
          alt="Uniport Logo"
        />
      </Link>

      <div className="flex"></div>
      <Link href={href}>
        <Button variant="outline" size="sm">
          {navText}
        </Button>
      </Link>
    </div>
  );
}
