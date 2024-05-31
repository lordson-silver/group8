import React from 'react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { ChatMessageProps } from '@/types';

const ChatMessage: React.FC<ChatMessageProps> = ({ sender, message, timestamp, src }) => (
  <div className="flex gap-2 items-center w-full mb-4">
    <Avatar>
      <AvatarImage src={src} />
    </Avatar>
    <div className='flex w-full flex-col leading-none'>
      <div className="flex items-center mb-1 w-full justify-between">
        <span className="font-bold mr-2">{sender}</span>
        <span className="text-gray-500 text-sm">{timestamp}</span>
      </div>
      <p>{message}</p>
    </div>
  </div>
);

export default ChatMessage;
