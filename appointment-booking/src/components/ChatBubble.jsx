import React from "react";

const ChatBubble = ({ message, sender = "user" }) => {
  const isUser = sender === "user";

  return (
    <div
      className={`max-w-xs p-3 rounded-xl mb-2 ${
        isUser
          ? "bg-blue-600 text-white self-end ml-auto"
          : "bg-gray-200 text-gray-700 self-start mr-auto"
      }`}
      style={{ width: "fit-content" }}
    >
      {message}
    </div>
  );
};

export default ChatBubble;
