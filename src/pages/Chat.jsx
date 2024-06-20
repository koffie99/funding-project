import React from 'react';
import ChatSidebar from '../components/ChatSidebar';
import ChatWindow from '../components/ChatWindow';

const Chat = () => {
  return (
    <div className="flex h-screen">
      <ChatSidebar />
      <ChatWindow />
    </div>
  );
};

export default Chat;
