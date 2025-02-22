import React, { useState } from "react";

const InputBox = ({ onSendMessage }) => {
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    onSendMessage(input); // Add user message to chat

    const response = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await response.json();
    onSendMessage({ role: "assistant", content: data.reply });
    setInput("");
  };

  return (
    <div className="input-box">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        placeholder="Ask something..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default InputBox;
