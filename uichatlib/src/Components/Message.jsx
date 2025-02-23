import { User, Bot } from 'lucide-react';

const Message = ({ message }) => {
  return (
    <div className={`flex items-start gap-3 ${message.role === 'assistant' ? 'justify-start' : 'justify-end'}`}>
      {message.role === 'assistant' && (
        <div className="p-2 rounded-full bg-green-600">
          <Bot className="w-5 h-5 text-white" />
        </div>
      )}
      <div
        className={`p-3 rounded-lg max-w-xs text-white ${message.role === 'assistant' ? 'bg-gray-700' : 'bg-blue-600'}`}
      >
        {message.content}
      </div>
      {message.role === 'user' && (
        <div className="p-2 rounded-full bg-blue-600">
          <User className="w-5 h-5 text-white" />
        </div>
      )}
    </div>
  );
};

export default Message;
