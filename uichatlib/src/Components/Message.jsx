import { User, Bot } from 'lucide-react';

const Message = ({ message }) => {
    return (
        <div className={`border-b border-gray-800 ${message.role === 'assistant' ? 'bg-gray-800' : ''}`}>
            <div className="max-w-3xl mx-auto px-4 py-6">
                <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-full ${message.role === 'assistant' ? 'bg-green-600' : 'bg-blue-600'}`}>
                        {message.role === 'assistant' ? (
                            <Bot className="w-6 h-6 text-white" />
                        ) : (
                            <User className="w-6 h-6 text-white" />
                        )}
                    </div>
                    <div className="flex-1 text-gray-100">
                        {message.content}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Message;