import React, {useState, ChangeEvent, FC} from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ChatInputProps, Message } from '@/types';

const ChatInput: FC<ChatInputProps> = ({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendClick = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        sender: 'Daniel Grayson',
        message: inputValue,
        timestamp: new Date().toLocaleTimeString(),
        src: './image.png', // Adjust the src as needed
      };
      onSendMessage(newMessage);
      setInputValue('');
    }
  };

  return (
    <div className="bg-white p-4 border-t border-gray-300 flex">
      <Input
        type="text"
        className="flex-grow p-2 border border-gray-300 rounded mr-2"
        placeholder="Enter text here"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button variant='default' onClick={handleSendClick}>
        Send
      </Button>
    </div>
  );
};

export default ChatInput;
