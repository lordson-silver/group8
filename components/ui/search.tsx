'use client';
 
import React, { useRef } from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";
// import { Search } from "lucide-react"
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { Input } from "./input";
// import { Label } from "./label";
 
export default function Search({ placeholder }: { placeholder: string }) {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace, push } = useRouter();
    const InputRef = useRef<HTMLInputElement>(null);

    function handleSearch(term: string) {
        console.log(`Searching... ${term}`);

        const params = new URLSearchParams(searchParams);
        console.log(term);
        if (term) {
            params.set('query', term);
          } else {
            params.delete('query');
          }
        replace(`${pathname}?${params.toString()}`);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      push('/chat');
    }
 
  return (


    // <form className="ml-auto flex-1 z-50 sm:flex-initial">
    //     <div className="relative">
    //         {/* <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" /> */}
    //         <Input
    //             // type="search"
    //             id="search"
    //             type="text"
    //             ref={InputRef}
    //             // placeholder="Search products..."
    //             className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
    //             placeholder={placeholder}
    //             onChange={(e) => {
    //             handleSearch(e.target.value);
    //             }}
    //             defaultValue={searchParams.get('query')?.toString()}
    //           />
    //           <FaMagnifyingGlass className="absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    //     </div>
          
    // </form>



    <form className="mx-auto flex flex-1 z-50 sm:flex-initial justify-center w-full mt-6"
    onSubmit={handleSubmit}
    >
    <div className="relative">
      {/* <Label htmlFor="search" className="sr-only">
        Search
      </Label> */}

      <Input
        id="search"
        type="text"
        ref={InputRef}
        className="sm:w-[300px] md:w-[350px] lg:w-[400px] mx-auto rounded-lg border border-black-700 py-[13px] px-[20px]"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString() || ''}
      />
      <FaMagnifyingGlass className="absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      {/* <MagnifyingGlassIcon  /> */}
    </div>
    </form>
  );
}