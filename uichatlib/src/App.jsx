import { useState, useRef, useEffect } from 'react';
import { Menu } from 'lucide-react';
import Message from './Components/Message';
import ChatInput from './Components/ChatInput';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [...prev, { role: 'user', content: input }]);

    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I am an AI language model simulation. In a real implementation, this would be connected to an actual AI backend. I aim to be helpful while acknowledging my limitations. How else can I assist you today?"
      }]);
    }, 1000);

    setInput('');
  };

  const handleNewChat = () => {
    setMessages([]);
  };

  return (
    <div className="flex h-screen bg-gray-900">

      <div className="flex-1 flex flex-col relative">

        <div className="flex-1 overflow-y-auto">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center">
              <div className="text-center space-y-4 mb-8">
                <h1 className="text-4xl font-bold text-white">Sarang</h1>
                <p className="text-gray-400">How can I help you today?</p>
              </div>
              <div className="w-full max-w-3xl">
                <ChatInput
                  input={input}
                  setInput={setInput}
                  onSubmit={handleSubmit}
                />
              </div>
            </div>
          ) : (
            <>
              <div className="pb-32">
                {messages.map((message, index) => (
                  <Message key={index} message={message} />
                ))}
                <div ref={messagesEndRef} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent pt-20 pb-8">
                <div className="max-w-3xl mx-auto">
                  <ChatInput
                    input={input}
                    setInput={setInput}
                    onSubmit={handleSubmit}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;