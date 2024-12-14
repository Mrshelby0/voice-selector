import React, { useState, useEffect } from 'react';

const AgentDetails = ({ selectedOption }) => {
  const [name, setName] = useState(localStorage.getItem('name') || '');
  const [prompt, setPrompt] = useState(localStorage.getItem('prompt') || '');
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  useEffect(() => {
    localStorage.setItem('name', name);
    localStorage.setItem('prompt', prompt);
  }, [name, prompt]);

  const sendMessage = () => {
    setMessages([...messages, { text: messageInput, sender: 'user' }]);
    setMessageInput('');
  };

  return (
    <div className="flex-1">
      <div className="bg-purple-600 text-white py-4 px-6 text-xl font-bold">
        Agent Name
      </div>
      <div className="p-6">
        <div className="mb-4">
          <label className="block text-black text-2xl font-bold mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter agent name"
            className="w-full p-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block text-black text-2xl font-bold mb-2">Prompt</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt here"
            rows="6"
            className="w-full p-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
        </div>

        {/* Test Chat Section */}
        <div className="mt-6">
          <h2 className="text-xl font-bold text-purple-600">Test Chat</h2>
          <div className="chat-box p-4 border rounded-lg">
            {messages.map((msg, index) => (
              <div key={index} className={msg.sender === 'user' ? 'text-right' : ''}>
                <p className={msg.sender === 'user' ? 'text-blue-500' : 'text-gray-500'}>
                  {msg.text}
                </p>
              </div>
            ))}
          </div>
          <div className="chat-input mt-4">
            <input
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder="Type your message"
              className="p-2 border rounded-md w-full"
            />
            <button
              onClick={sendMessage}
              className="mt-2 p-2 bg-blue-500 text-white rounded-md"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDetails;
