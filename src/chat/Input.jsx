import React, { useState } from "react";

const Input = ({ socket, username }) => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (!username || !message) {
      alert("Both username and message are required!");
      return;
    }

    socket.emit("sendMessage", { username, text: message });
    setMessage("");
  };

  return (
    <div className="flex space-x-2">
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={sendMessage}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Send
      </button>
    </div>
  );
};

export default Input;
