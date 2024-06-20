import React from 'react';
import Link from 'next/link';
import Chat from '@/pages/Chat';
import EditCampaign from '@/pages/EditCampaign';
import Notifications from '@/pages/Notifiactions';
import { FaHome, FaBookmark, FaComments,FaCommentAlt, FaUserFriends, FaBell, FaPen, FaTrash, FaCog, FaSignOutAlt } from 'react-icons/fa';



const Sidebar = () => {
  return (
    <div className="bg-[#061023F7] text-white  flex flex-col m-10 border p-2 rounded">
      <div className="p-2">
      </div>
      <nav className="flex-1 p-4 space-y-7">
        <Link href="/dashboard" className="flex items-center space-x-3">
        <FaHome className="text-green-500"/>
        </Link>
        
        <Link href="" className="flex items-center space-y-5">
              <FaBookmark />
        </Link>

        <Link href="/Chat" className="flex items-center space-y-5">
              <FaComments />
        </Link>

        <Link href="" className="flex items-center space-x-5">
              <FaUserFriends />
        </Link>

        <Link href="/notifications" className="flex items-center space-x-5">
                <FaBell />
        </Link>


        <Link href="/EditCampaign" className="flex items-center space-x-5">
                <FaPen />
        </Link>

        <Link href="/delete" className="flex items-center space-x-5">
                <FaTrash/>
        </Link>

        <Link href="/Settings" className="flex items-center space-x-6">
              <FaCog />
        </Link>
        
        <Link href="/logout"className="flex items-center space-x-10">
              <FaSignOutAlt />
        </Link>
      </nav>
     
    </div>
  );
};

export default Sidebar;

