import React from 'react';
import { Avatar, AvatarImage } from './ui/avatar';
import Image from 'next/image';
import Link from 'next/link';
import { BookmarkIcon, NoteIcon } from './ui/importSVG';

const SidebarItem = ({ name, src }: { name: string; src: string; }) => (
  <div className="flex items-center gap-2 mb-4 cursor-pointer">
    <Avatar>
      <AvatarImage src={src} />
    </Avatar>
    <span>{name}</span>
  </div>
);

const SideBar = () => (
  <div className="bg-black text-white w-72 h-screen flex flex-col">
    <div className="flex items-center border-gray-100/15 mb-8 border-b py-4 px-1">
    <Link href="/">
        <Image
          src={'/logo.png'}
          className="md:m-0 object-cover"
          height={130}
          width={130}
          alt="Uniport Logo"
        />
      </Link>
      <div>
        <h2 className="text-base">Student Mentorship Matching Platform</h2>
      </div>
    </div>
    <div className="flex-grow p-2">
        <SidebarItem name="Dr. B. B. Baridam" src='./image2.png' />
        <SidebarItem name="Daniel Grayson" src='./image.png' />
        <div className="flex items-center gap-2 mb-4 cursor-pointer">
            <BookmarkIcon className='bg-[#232323]' />
            <span>Bookmark</span>
        </div>
        <div className="flex items-center gap-2 mb-4 cursor-pointer">
            <NoteIcon className='bg-[#232323]' />
            <span>Take Notes</span>
        </div>
      
    </div>
  </div>
);

export default SideBar;
