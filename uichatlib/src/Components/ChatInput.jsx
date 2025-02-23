import { Send } from 'lucide-react';

const ChatInput = ({ input, setInput, onSubmit, className = '', inputClassName = '', buttonClassName = '' }) => {
  return (
    <form onSubmit={onSubmit} className={`relative ${className}`}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Send a message..."
        className={`w-full bg-gray-600 text-white rounded-full px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md ${inputClassName}`}
      />
      <button
        type="submit"
        className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-300 hover:text-white disabled:opacity-50 ${buttonClassName}`}
        disabled={!input.trim()}
      >
        <Send className="w-5 h-5" />
      </button>
    </form>
  );
};

export default ChatInput;
