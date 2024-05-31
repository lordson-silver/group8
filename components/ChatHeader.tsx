import React from 'react';
import ProfileCard from './ProfileCard';
import { Avatar, AvatarImage } from './ui/avatar';

const ChatHeader = () => (
  <div className="bg-white p-4 border border-b border-gray-300 flex justify-between items-center">
    <div className="flex gap-1 items-center">
        <Avatar>
            <AvatarImage src="./image4.jpg" />
        </Avatar>
        <div className='flex flex-col leading-none'>
        <h2 className="text-xl font-bold">Prof. George Owunari</h2>
        <p className="text-gray-500">georgeonwunari@uniport.edu.ng</p>
        </div>
    </div>
    <ProfileCard />
  </div>
);

export default ChatHeader;
