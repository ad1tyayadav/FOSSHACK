# FOSSHACK: aibotchat for Next.js/React

> **aibotchat** is an open-source UI library that makes it effortless to integrate AI-powered chat interfaces into your modern web applications.

[Homepage](https://www.aichatbot.vercel.com)

---

## 🚀 Overview

aibotchat provides a sleek, customizable chat component that integrates directly into your webpage. Designed with Next.js/React in mind, it offers seamless AI model integration, streaming capabilities, and support for tool calls—all optimized for today's web.

---

## ✨ Features

- **Pre-Built Chat UI:** Beautiful, customizable components.
- **AI Model Integration:** Works with OpenAI, LangGraph, and custom backends.(Works with openAI, and Gemini, and cohere, at this point)
- **Streaming & Tool Calls:** Enables real-time, AI-driven frontend actions. (Proposed)
- **Next.js Optimized:** Fully compatible with Server Components, API routes, and Edge Functions. (Proposed)
- **Chat History & Analytics:** Easily store, retrieve, and analyze conversations. (Proposed)

---

## 📦 Installation

Install aibotchat via npm or yarn:

# Using npm
```npm install aibotchat```

# Using yarn
```yarn add aibotchat```

⚡ Quick Start

Integrate the AI chat bot button on your website with a single component:

```
import React from 'react';
import { Chatbot } from 'aibotchat';

function App() {
  return (
    <div>
      <h1>My Chat App</h1>
      <Chatbot apiKey="YourApiKey" aiName="cohere" />
    </div>
  );
}

export default App;
```

This component renders a fixed chat button at the bottom-right of your webpage, enabling users to instantly access an AI-powered chat interface.
🔧 Configuration

aibotchat is highly customizable. You can tweak the behavior and appearance using the following props:

    position: Set the button's position (e.g., "bottom-right" or "bottom-left").
    apiEndpoint: Define the API route to handle chat messages.
    theme: Choose the theme ("dark" or "light").
    Additional Props: Customize styling, animations, and more. Check out the API Documentation for further details.

🤖 AI Backend Integration

aibotchat supports multiple AI backends:

    OpenAI: Integrate GPT models for natural language processing.
    LangGraph: Leverage LangGraph for customized AI workflows.
    Custom Backend: Easily connect your own AI services.

Configure your backend by setting the apiEndpoint prop or by using environment variables in your Next.js configuration.
📊 Chat History & Analytics

Gain valuable insights into user interactions with built-in support for chat history and analytics. Store conversations, analyze trends, and continuously improve your AI bot experience.
🤝 Contributing

Contributions are welcome! To get started:

    Fork the repository.
    Create a feature branch (git checkout -b feature/YourFeature).
    Commit your changes (git commit -m 'Add some feature').
    Push to your branch (git push origin feature/YourFeature).
    Open a pull request.

For more details, please see our CONTRIBUTING.md.
📄 License

This project is licensed under the MIT License. See the LICENSE file for details.
