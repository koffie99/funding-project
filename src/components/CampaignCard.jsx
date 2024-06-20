import React from 'react';
import {  FaClock, } from 'react-icons/fa';
const CampaignCard = ({ title, raised, goal, timeLeft }) => {
  return (
    <div className="bg-[#0D172A] rounded-lg shadow-md p-4">
      <img src="/images/camp.png" alt={title} className="w-full h-40 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-500">Help Tim Undergo Heart Surgery - Every Beat Counts!</p>
        <div className="flex items-center justify-between mt-4">
          <div>
          <p className="text-sm text-gray-500"> ${goal}</p>
            <p className="text-sm text-gray-500 ">Raised of ${raised}</p>

          </div>
          <div>
          <FaClock className="text-white flex items-center "/>
          <p className="text-sm text-white">{timeLeft} </p>
          </div>
          
        </div>
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-gray-500">by 0xA30F5F909430387760C2B1</p>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
