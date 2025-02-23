import { useState, useRef, useEffect } from 'react';
import Message from './Message';
import ChatInput from './ChatInput';
import axios from 'axios';
import './Chatbot.css';

function Chatbot({ apiKey, aiName, Title }) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
      let response;
      let reply = "No response from AI.";

      if (!apiKey || !aiName) {
        reply = "Integration not found.";
      } else if (aiName.toLowerCase() === 'cohere') {
        response = await axios.post(
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
              "Authorization": `Bearer ${apiKey}`,
            },
          }
        );
        reply = response.data.generations?.[0]?.text || reply;

      } else if (aiName.toLowerCase() === 'gemini') {
        response = await axios.post(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
          {
            contents: [{ parts: [{ text: input }] }]
          },
          {
            headers: { "Content-Type": "application/json" }
          }
        );
        reply = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || reply;

      } else {
        reply = "Unsupported AI service.";
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);

    } catch (error) {
      console.error(`${aiName} API Error:`, error);
      setMessages((prev) => [...prev, { role: 'assistant', content: "Error fetching AI response." }]);
    } finally {
      setLoading(false);
      setInput('');
    }
  };

  return (
    <div className="chatbot-container">
      {/* Floating Button to Toggle Chatbot */}
      <button
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        💬
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>{Title}</h3>
            <button className="chatbot-close" onClick={() => setIsOpen(false)}>✖</button>
          </div>

          <div className="chatbot-messages">
            {messages.length === 0 ? (
              <div className="chatbot-welcome">
                <h1>{}</h1>
              </div>
            ) : (
              <>
                {messages.map((message, index) => (
                  <Message key={index} message={message} />
                ))}
                {loading && <Message message={{ role: 'assistant', content: 'Typing...' }} />}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          <div className="chatbot-input">
            <ChatInput input={input} setInput={setInput} onSubmit={handleSubmit} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
