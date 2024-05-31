// types.ts
export interface Message {
    sender: string;
    message: string;
    timestamp: string;
    src: string;
  }
  
  export interface ChatInputProps {
    onSendMessage: (message: Message) => void;
  }
  
  export interface ChatMessageProps {
    src: string;
    sender: string;
    message: string;
    timestamp: string;
  }
  