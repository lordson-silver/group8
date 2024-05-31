import React from 'react';
import { Avatar, AvatarImage } from './ui/avatar';

const TabBarItem = ({ src, active }: { src: string; active?: boolean; }) => (
  <div className={`${active ? 'border-2 border-white border-solid rounded-xl ' : ''}flex items-center mb-4 cursor-pointer`}>
    <Avatar>
      <AvatarImage src={src} />
    </Avatar>
  </div>
);

const TabBar = () => (
  <div className="bg-black text-white border-gray-100/15 border-r w-max h-screen p-1 pt-4 flex flex-col">
    <div className="flex-grow">
      <TabBarItem src="./image2.png" active />
      <TabBarItem src="./image1.png" />
      <TabBarItem src="./image3.png" />
    </div>
  </div>
);

export default TabBar;
