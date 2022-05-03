import React, { useState } from 'react'

import "./ChatRoom.css";
import useChat from "../../useChat";

const ChatRoom = (props) => {
  // Gets roomId from URL
  const { roomId } = props.match.params; 
  // This creates a websocket and manages messaging
  const { messages, sendMessage } = useChat(roomId);
  // Message to be sent
  const [newMessage, setNewMessage] = useState("");

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  }

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
  }

  return (
    <div className="chat-room-container">
      <h1 className="room-name">Room: {roomId}</h1>
      <div className="messages-container">
        <ol className="messages-list">
          {messages.map((message, i) => (
            <li
              key={i}
              className={`message-item ${
                message.ownedByCurrentUser ? "my-message" : "received-message"
              }`}
            >
              {message.body}
            </li>
          ))}
        </ol>
      </div>
      <textarea
        value={newMessage}
        onChange={handleNewMessageChange}
        placeholder="Write message..."
        className="new-message-input-field"
      />
      <button onClick={handleSendMessage} className="send-message-button">
        Send
      </button>
    </div>
  )
}

export default ChatRoom