'use client';
import React, { useState } from 'react';
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { messages } from '@/data';

const ChatArea = () => {
  const [message] = useState(messages);

  return (
    <div className="flex flex-col h-full">
      <ChatHeader />
      <div className="flex flex-col flex-grow p-4 justify-end overflow-y-auto bg-gray-100">
        {message.map((msg, index) => (
          <ChatMessage
            key={index}
            src={msg.src}
            sender={msg.sender}
            message={msg.message}
            timestamp={msg.timestamp}
          />
        ))}
      </div>
      <ChatInput />
    </div>
  );
};

export default ChatArea;
