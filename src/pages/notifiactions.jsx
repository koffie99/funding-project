import React from 'react';
import NotificationItem from '../components/NotificationItem';
import Sidebar from '../components/Sidebar';
import notifications from '@/components/utils/notifications';

const Notifications = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100">
        <div className="bg-white p-6 rounded shadow">
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <span className="text-xl font-bold">Date</span>
            <span className="text-xl font-bold">Subject</span>
            <span className="text-xl font-bold">Owner</span>
          </div>
          {notifications.map((notification, index) => (
            <NotificationItem
              key={index}
              date={notification.date}
              subject={notification.subject}
              owner={notification.owner}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
