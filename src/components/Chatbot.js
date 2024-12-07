import React, { useState } from "react";
import { HfInference } from "@huggingface/inference";
import { FaCopy } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const client = new HfInference("your_actual_api_key"); // Replace with a valid API key

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const getResponse = async (userInput) => {
    try {
      setIsTyping(true);
      const chatCompletion = await client.chatCompletion({
        model: "Qwen/Qwen2.5-Coder-32B-Instruct", // Ensure the model name is correct
        messages: [{ role: "user", content: userInput }],
        max_tokens: 500,
      });

      const response = chatCompletion?.choices?.[0]?.message?.content;
      if (!response) {
        throw new Error("No valid response from the API");
      }
      return response;
    } catch (error) {
      console.error("Error fetching response:", error.response?.data || error.message || error);
      return "I'm sorry, I couldn't get a response at the moment.";
    } finally {
      setIsTyping(false);
    }
  };

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { user: true, text: input, timestamp: new Date() };
      setMessages([...messages, userMessage]);
      setInput("");

      const botResponse = await getResponse(input);
      const botMessage = {
        user: false,
        text: botResponse,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    }
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div className="container py-5 vh-100 d-flex flex-column justify-content-between bg-light">
      {/* Chat Header */}
      <div className="text-center bg-primary text-white py-3 rounded shadow">
        <h3>Chat Assistant</h3>
        <p className="mb-0">Ask me anything!</p>
      </div>

      {/* Chat Messages */}
      <div className="flex-grow-1 overflow-auto my-4 p-3 bg-white rounded shadow">
        {messages.map((msg, index) => (
          <div key={index} className={`d-flex mb-3 ${msg.user ? "justify-content-end" : "justify-content-start"}`}>
            <div
              className={`p-3 rounded shadow-sm ${msg.user ? "bg-primary text-white" : "bg-secondary text-dark"}`}
            >
              {msg.text}
              {!msg.user && (
                <button
                  onClick={() => handleCopy(msg.text)}
                  className="btn btn-sm btn-link text-white ms-2"
                >
                  <FaCopy />
                </button>
              )}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="d-flex justify-content-start">
            <div className="p-3 rounded bg-secondary text-dark">Typing...</div>
          </div>
        )}
      </div>

      {/* Input Section */}
      <div className="input-group shadow">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="form-control"
        />
        <button onClick={handleSend} className="btn btn-primary">
          Send
        </button>
        <button onClick={handleClearChat} className="btn btn-danger">
          Clear Chat
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
