import React, { useState } from "react";
import MessageBubble from "./MessageBubble";
import InputBox from "./InputBox";

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    setMessages([...messages, { role: "user", content: message }]);
    // Call API to get AI response (handled in InputBox)
  };

  return (
    <div className="chat-window">
      <div className="messages">
        {messages.map((msg, index) => (
          <MessageBubble key={index} role={msg.role} content={msg.content} />
        ))}
      </div>
      <InputBox onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;
