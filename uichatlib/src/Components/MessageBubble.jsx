import React from "react";

const MessageBubble = ({ role, content }) => {
  return (
    <div className={`message-bubble ${role === "user" ? "user-message" : "ai-message"}`}>
      {content}
    </div>
  );
};

export default MessageBubble;
