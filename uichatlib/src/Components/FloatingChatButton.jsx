import React, { useState } from "react";
import ChatWindow from "./ChatWindow";

const FloatingChatButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="floating-chat">
      {open && <ChatWindow />}
      <button onClick={() => setOpen(!open)}>Chat</button>
    </div>
  );
};

export default FloatingChatButton;
