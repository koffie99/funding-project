import React from 'react';

const Message = ({ text, isSent }) => {
  return (
    <div className={`flex ${isSent ? 'justify-end' : ''} mb-2`}>
      <div className={`max-w-xs px-4 py-2 rounded-lg ${isSent ? 'bg-green-500 text-white' : 'bg-gray-200 text-black'}`}>
        {text}
      </div>
    </div>
  );
};

export default Message;
