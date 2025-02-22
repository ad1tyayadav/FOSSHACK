import { Plus } from 'lucide-react';

const Sidebar = ({ isOpen, onNewChat }) => {
  return (
    <div className={`${isOpen ? 'w-64' : 'w-0'} bg-gray-800 transition-all duration-300 overflow-hidden flex flex-col`}>
      <div className="p-4">
        <button
          onClick={onNewChat}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-700 text-white border border-gray-600"
        >
          <Plus className="w-5 h-5" />
          New chat
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-2">
        {/* Chat history would go here */}
      </div>
    </div>
  );
}

export default Sidebar;