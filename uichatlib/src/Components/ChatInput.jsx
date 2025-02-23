import { Send } from 'lucide-react';
import './ChatInput.css';

const ChatInput = ({ input, setInput, onSubmit, className = '', inputClassName = '', buttonClassName = '' }) => {
  return (
    <form onSubmit={onSubmit} className={`chat-input-form ${className}`}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Send a message..."
        className={`chat-input-field ${inputClassName}`}
      />
      <button
        type="submit"
        className={`chat-input-button ${buttonClassName}`}
        disabled={!input.trim()}
      >
        <Send className="w-5 h-5" />
      </button>
    </form>
  );
};

export default ChatInput;
