import React from 'react';
import { FaPhone, FaVideo } from 'react-icons/fa';
import Message from './utils/Message';

const messages = [
  { text: 'Oh?', isSent: false },
  { text: 'Cool', isSent: false },
  { text: 'How does it work?', isSent: false },
  { text: 'This is the main chat template', isSent: true },
  { text: 'Simple', isSent: true },
  { text: 'You just edit any text to type in the conversation you want to show, and delete any bubbles you don’t want to use', isSent: true },
  { text: 'Boom', isSent: true },
  { text: 'Hmmm', isSent: false },
  { text: 'I think I get it', isSent: false },
  { text: 'Will head to the Help Center if I have more questions tho', isSent: false }
];

const ChatWindow = () => {
  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="flex items-center justify-between bg-white p-4 border-b border-gray-300">
        <div className="flex items-center">
          <img src="/images/helena.png" alt="Helena Hills" className="w-10 h-10 rounded-full" />
          <div className="ml-4">
            <p className="text-sm font-semibold">Helena Hills</p>
            <p className="text-xs text-gray-500">Active 20m ago</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FaPhone className="text-gray-500 cursor-pointer" />
          <FaVideo className="text-gray-500 cursor-pointer" />
        </div>
      </div>
      <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
        {messages.map((message, index) => (
          <Message key={index} text={message.text} isSent={message.isSent} />
        ))}
      </div>
      <div className="p-4 bg-white border-t border-gray-300 flex items-center">
        <input
          type="text"
          placeholder="Enter your message"
          className="flex-1 border border-gray-300 p-2 rounded-md"
        />
        <div className="flex items-center space-x-2 ml-2">
          <button className="text-gray-500">
            <i className="fas fa-microphone"></i>
          </button>
          <button className="text-gray-500">
            <i className="fas fa-smile"></i>
          </button>
          <button className="text-gray-500">
            <i className="fas fa-paperclip"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
