// components/AIChatTab.js
import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function AIChatTab() {
  // Customize container dimensions here
  const containerWidth = '80%';  // e.g. '80%' or '600px'
  const containerHeight = '550px'; // e.g. '75%' or '500px'

  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hello! I'm your AI food assistant. Ask me anything about food, recipes, trends, or restaurant operations!"
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });
      const data = await res.json();
      const response = data.response || 'No response';
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Error sending message.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex justify-center items-center h-full p-4">
      {/* Centered customizable container */}
      <div
        style={{ width: containerWidth, height: containerHeight }}
        className="bg-white rounded-lg shadow-lg flex flex-col"
      >
        {/* Messages area */}
        <div className="flex-1 overflow-auto p-4 space-y-2 bg-gray-100">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={
                `flex mt-2 ${msg.role === 'assistant' ? 'justify-start' : 'justify-end'}`
              }
            >
              <div
                className={
                  `${
                    msg.role === 'assistant' ? 'bg-blue-100' : 'bg-orange-100'
                  } p-3 rounded-md max-w-[70%] whitespace-pre-wrap`
                }
              >
                {/* Name label on top of message */}
                <strong className="capitalize text-xs font-semibold block mb-1">
                  {msg.role.charAt(0).toUpperCase() + msg.role.slice(1)}
                </strong>
                {/* Render markdown content */}
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {msg.content}
                </ReactMarkdown>
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
          {loading && <div className="text-gray-500 italic">Typing...</div>}
        </div>
        {/* Input bar */}
        <div className="border-t p-4 bg-white">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything about food..."
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
