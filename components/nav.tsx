import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { LogoutIcon } from '@/components/ui/importSVG';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth, AuthContext } from '@/context/AuthProvider';
import Image from 'next/image';
import Link from 'next/link';
import ProfileCard from './ProfileCard';
import { useContext } from 'react';

export function Nav({ className }: { className?: string }) {
  const signedIn: boolean = true;
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
        {signedIn === (true as boolean) ? (
          <ProfileCard />
        ) : (
          <>
            <Link href="/signin">
              <Button variant="outline" className="text-white" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/signup/step_one">
              <Button size="sm">Sign Up</Button>
            </Link>
          </>
        )}
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
