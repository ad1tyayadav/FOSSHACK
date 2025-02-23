import { useState, useRef, useEffect } from 'react';
import ChatInput from './ChatInput';
import Message from './Message';
import axios from 'axios';

const ChatWindow = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { role: 'user', content: input }]);
    setLoading(true);

    try {
      const response = await axios.post(
        'https://api.cohere.ai/v1/generate',
        {
          model: "command",
          prompt: input,
          max_tokens: 150,
          temperature: 0.7
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": Bearer `JFQUx8Fu5wKwYZKG1TulQ6v7VVtbnq2s4hcAZfCE;`,
          },
        }
      );

      const reply = response.data.generations[0].text;
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: 'assistant', content: "Error fetching AI response." }]);
    } finally {
      setLoading(false);
    }

    setInput('');
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
        {loading && <Message message={{ role: 'assistant', content: 'Typing...' }} />}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-3 bg-gray-700">
        <ChatInput input={input} setInput={setInput} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default ChatWindow;
