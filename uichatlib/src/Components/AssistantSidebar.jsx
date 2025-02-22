import React from "react";

const AssistantSidebar = () => {
  const suggestions = ["What is AI?", "Tell me a joke", "Summarize this text"];

  return (
    <div className="assistant-sidebar">
      <h3>Suggestions</h3>
      {suggestions.map((text, index) => (
        <button key={index} className="suggestion-btn">{text}</button>
      ))}
    </div>
  );
};

export default AssistantSidebar;
