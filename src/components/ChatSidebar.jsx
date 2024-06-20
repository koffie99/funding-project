import React from 'react';
import { FaSearch } from 'react-icons/fa';

const contacts = [
  { name: 'Helena Hills', message: 'Will head to the Help Center...', image: '/images/search.png' },
  { name: 'Carlo Emilio', message: 'Let’s go', image: '/images/loginprofile.png' },
  { name: 'Oscar Davis', message: 'Trueeeeee', image: '/images/camp.png' },
  { name: 'Daniel Jay Park', message: 'lol yeah, are you coming to...', image: '/images/cause.png' },
  { name: 'Mark Rojas', message: 'great catching up over din...', image: '/images/jennifer.png' },
  { name: 'Giannis Constantinou', message: 'yep', image: '/images/josh.png' },
  { name: 'Briana Lewis', message: 'When are you coming back...', image: '/images/frank.png' },
  { name: 'Mom', message: 'Thanks!', image: '/images/eun.png' }
];

const ChatSidebar = () => {
  return (
    
    <div className="bg-white border-r border-gray-300 w-1/4 h-full flex flex-col">
      <div className="p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search chats"
            className="w-full border border-gray-300 p-2 rounded-md pl-10"
          />
          <FaSearch className="absolute top-3 left-3 text-gray-500" />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {contacts.map((contact, index) => (
          <div key={index} className="flex items-center p-4 hover:bg-gray-100 cursor-pointer">
            <img src={contact.image} alt={contact.name} className="w-10 h-10 rounded-full" />
            <div className="ml-4">
              <p className="text-sm font-semibold">{contact.name}</p>
              <p className="text-xs text-gray-500 truncate w-48">{contact.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;
