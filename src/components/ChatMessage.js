import React from "react";

import "./ChatMessage.css";

const ChatMessage = (props) => {
  console.log("chat-message", props);
  if (props.messageType === "sent") {
    return <SentMessage message={props.message} />;
  } else {
    return <ReceivedMessage message={props.message} />;
  }
};

const SentMessage = (props) => {
  return (
    <div>
      <div className="chat-message">
        <img className="avatar" src={props.message.user.avatar} />
        <div className="text-message">
          <span>{props.message.user.username}</span>
          <span className="text">{props.message.body}</span>
        </div>
      </div>
    </div>
  );
};

const ReceivedMessage = (props) => {
  return (
    <div>
      <div className="receivedText-message">
        <span className="receivedText">{props.message.body}</span>
      </div>
    </div>
  );
};
export default ChatMessage;
