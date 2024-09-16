import { useState } from 'react';
import { ChatContainer, MessageWindow, InputField, MessageBubble } from './Chat.styled';

const Chat = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    setMessages([...messages, input]);
    setInput('');
  };

  return (
    <ChatContainer>
      <MessageWindow>
        {messages.map((message, index) => (
          <MessageBubble key={index}>{message}</MessageBubble>
        ))}
      </MessageWindow>
      <InputField>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite sua mensagem..."
        />
        <button onClick={sendMessage}>Enviar</button>
      </InputField>
    </ChatContainer>
  );
};

export default Chat;
