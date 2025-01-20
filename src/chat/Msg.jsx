import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Input from "./Input";
import MessageList from "./Messagelist";

const socket = io("http://localhost:4000");

const Chat = () => {
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("chatHistory", (history) => setMessages(history));
    socket.on("receiveMessage", (message) => setMessages((prev) => [...prev, message]));

    return () => socket.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          Simple Chat App
        </h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="h-64 overflow-y-auto bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
          <MessageList messages={messages} />
        </div>
        <Input socket={socket} username={username} />
      </div>
    </div>
  );
};

export default Chat;
