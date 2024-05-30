import React from 'react';
import ProfileCard from './ProfileCard';
import { Avatar, AvatarImage } from './ui/avatar';

const ChatHeader = () => (
  <div className="bg-white p-4 border border-b border-gray-300 flex justify-between items-center">
    <div className="flex gap-1 items-center">
        <Avatar>
            <AvatarImage src="./image2.png" />
        </Avatar>
        <div className='flex flex-col leading-none'>
        <h2 className="text-xl font-bold">Dr. B. B. Baridam</h2>
        <p className="text-gray-500">bardiam@gmail.com</p>
        </div>
    </div>
    <ProfileCard />
  </div>
);

export default ChatHeader;
