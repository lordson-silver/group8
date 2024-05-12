import { Button } from './ui/button'
import {cn} from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
const Nav = ({
        className
       }: {
           className?:string;
   })  => {
  return (
    <div className={cn(className, "w-full pt-5 px-2 md:px-10 m-auto flex justify-between items-center absolute top-0")}>
      <Link href="/">
        <Image src={'/logo.png'} className='-ml-2 md:m-0 object-cover' height={80} width={80} alt='Uniport Logo'/>
      </Link>
        <div className="flex flex-grow gap-2 md:gap-4 justify-end">
          <Link href="/">
            <Button variant="outline" className='text-white' size="sm">Sign In</Button>
          </Link>
          <Link href="/">
            <Button size="sm">Sign Out</Button>
          </Link>
        </div>
    </div>
  )
}

export default Nav