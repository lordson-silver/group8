'use client';
import React, { useState } from 'react';
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { Message } from '@/types';
// import { messages } from '@/data';

const ChatArea: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'Prof. George Owunari', message: 'You are now chatting...', timestamp: '11:40', src: './image4.jpg' },
    { sender: 'Daniel Grayson', message: 'Really need to give some kudos...', timestamp: '11:55', src: './image.png' },
    { sender: 'Prof. George Owunari', message: 'No! It was my pleasure!', timestamp: '11:56', src: './image4.jpg' },
    { sender: 'Daniel Grayson', message: 'Meeting notes...', timestamp: '12:58', src: './image.png' },
  ]);

  const handleSendMessage = (newMessage: Message) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <div className="flex flex-col h-full">
      <ChatHeader />
      <div className="flex flex-col flex-grow p-4 justify-end overflow-y-auto bg-gray-100">
        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            src={msg.src}
            sender={msg.sender}
            message={msg.message}
            timestamp={msg.timestamp}
          />
        ))}
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatArea;
