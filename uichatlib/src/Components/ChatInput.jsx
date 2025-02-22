import { Send } from 'lucide-react';

const ChatInput = ({ input, setInput, onSubmit, className = '' }) => {
    return (
        <div className={`mx-auto px-4 ${className}`}>
            <form onSubmit={onSubmit} className="relative">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Send a message..."
                    className="w-full bg-gray-700 text-white rounded-lg pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xl"
                />
                <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!input.trim()}
                >
                    <Send className="w-5 h-5" />
                </button>
            </form>
            <p className="text-xs text-center text-gray-500 mt-2">
                Sarang can make mistakes. Consider checking important information.
            </p>
        </div>
    );
}

export default ChatInput;