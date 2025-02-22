import { useState, useRef, useEffect } from 'react';
import { Menu } from 'lucide-react';
import Message from './Components/Message'
import ChatInput from './Components/ChatInput';
import axios from 'axios';

function App() {
  const apiKey = `JFQUx8Fu5wKwYZKG1TulQ6v7VVtbnq2s4hcAZfCE`;
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state
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
    setLoading(true); // Start loading

    const fetchAIResponse = async (retries = 5, delay = 1000) => {
      try {
        const response = await axios.post(
          `https://api.cohere.ai/v1/generate`,
          {
            model: "command",
            prompt: input,
            max_tokens: 150,
            temperature: 0.7
          },
          {
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${apiKey}`,
            },
          }
        );

        console.log("API Response Headers:", response.headers);
        console.log("Rate Limit:", response.headers['x-ratelimit-limit']);
        console.log("Remaining Requests:", response.headers['x-ratelimit-remaining']);
        console.log("Reset Time:", response.headers['x-ratelimit-reset']);

        const reply = response.data.generations[0].text;
        setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
      } catch (error) {
        if (error.response?.status === 429 && retries > 0) {
          const retryAfter = error.response.headers['retry-after']
            ? parseInt(error.response.headers['retry-after'], 10) * 1000
            : delay;

          console.warn(`Rate limit hit. Retrying in ${retryAfter / 1000}s...`);

          setTimeout(() => fetchAIResponse(retries - 1, delay * 2), retryAfter);
        } else {
          console.error('Error:', error);
          setMessages((prev) => [...prev, { role: 'assistant', content: "Error fetching AI response." }]);
        }
      } finally {
        setLoading(false); // Stop loading
      }
    };

    await fetchAIResponse();
    setInput('');
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
                {loading && (
                  <Message message={{ role: 'assistant', content: 'Typing...' }} />
                )}
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