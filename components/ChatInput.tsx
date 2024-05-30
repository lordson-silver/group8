import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const ChatInput = () => (
  <div className="bg-white p-4 border-t border-gray-300 flex">
    <Input
      type="text"
      className="flex-grow p-2 border border-gray-300 rounded mr-2"
      placeholder="Enter text here"
    />
    <Button variant='default'>Send</Button>
  </div>
);

export default ChatInput;
