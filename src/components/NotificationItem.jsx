import React from 'react';

const NotificationItem = ({ date, subject, owner }) => {
  return (
    <div className="flex justify-between items-center py-2 border-b">
      <span className="w-1/5">{date}</span>
      <span className="w-1/3">{subject}</span>
      <span className="w-1/5">{owner}</span>
    </div>
  );
};

export default NotificationItem;
