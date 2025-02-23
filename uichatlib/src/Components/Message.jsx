import { User, Bot } from 'lucide-react';
import './Message.css';

const Message = ({ message }) => {
  return (
    <div className={`message-container ${message.role === 'assistant' ? 'message-start' : 'message-end'}`}>
      {message.role === 'assistant' && (
        <div className="message-icon bot-icon">
          <Bot className="w-5 h-5 text-white" />
        </div>
      )}
      <div className={`message-bubble ${message.role === 'assistant' ? 'bot-bubble' : 'user-bubble'}`}>
        {message.content}
      </div>
      {message.role === 'user' && (
        <div className="message-icon user-icon">
          <User className="w-5 h-5 text-white" />
        </div>
      )}
    </div>
  );
};

export default Message;
