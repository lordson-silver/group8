import { Button } from './ui/button'
import {cn} from '@/lib/utils';
import Image from 'next/image';
const Nav = ({
        className
       }: {
           className?:string;
   })  => {
  return (
    <div className={cn(className, "flex justify-between items-center absolute top-0 m-auto px-10 pt-5 w-full")}>
            {/* <h1 className='text-white text-xl flex-grow-0'>Logo</h1> */}
            <Image src={'/logo.png'} height={80} width={80} alt='Uniport Logo'/>
            <div className="flex flex-grow gap-4 justify-end">
                <Button variant="outline" className='text-white' size="sm">Sign In</Button>
                <Button size="sm">Sign Out</Button>
            </div>
        </div>
  )
}

export default Nav