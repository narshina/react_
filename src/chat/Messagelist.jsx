import React from "react";

const MessageList = ({ messages }) => (
  <div>
    {messages.map((msg, index) => {
      const formattedTime = new Date(msg.timestamp).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      return (
        <div
          key={index}
          className={`p-2 my-2 rounded-lg ${
            msg.sender === "You" ? "bg-blue-100 text-right" : "bg-gray-100"
          }`}
        >
          <span className="block font-medium text-gray-700">{msg.sender}</span>
          <span className="block text-gray-600">{msg.content}</span>
          <span className="block text-xs text-gray-500 mt-1">
            {formattedTime}
          </span>
        </div>
      );
    })}
  </div>
);

export default MessageList;
