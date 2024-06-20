import React from 'react';
import Link from 'next/link';
import { FaSearch,FaPlus, FaWallet } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-white p-4 shadow-md">
      <div className="flex items-center space-x-4">
      <img src="/images/loginprofile.png" alt="Profile" className="w-10 h-10 rounded-full" />
          <div>
            <p className="text-sm">Dove Vicky</p>
            <p className="text-xs text-gray-400">@0xAD3F50904303887760C2B1</p>
          </div> 
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 p-2 rounded-md w-64"
        />
        <FaSearch className="text-gray-500" />
      </div>
      <div className="flex items-center space-x-4 ">
        <div className="flex items-center space-x-2 border border-green-500 p-2 rounded-md w-64">
          <FaWallet className="" />
          <span className="font-bold">1000.0567</span>
        </div>
        <Link href="/EditCampaign" >
        <button className="bg-green-500 text-white p-2 rounded-md flex w-60">
            Create Campaign
            <FaPlus className=""/>
        </button>
       
        </Link>
        
      </div>
    </div>
  );
};

export default Header;
