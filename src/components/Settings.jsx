// components/Settings.js
import React from 'react';
import Link from 'next/link';
import SettingsPage from '@/pages/Settings';
import Image from 'next/image';
import Dashboard from './Dashboard';
import Profile from './Profile';
import settingProfile from './utils/settingProfile';
import SettingProfile from './SettingProfile';
import { FaHome, FaBookmark, FaComments,FaCommentAlt, FaUserFriends, FaBell, FaPen, FaTrash, FaCog, FaSignOutAlt } from 'react-icons/fa';





const Settings = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className=" bg-white p-4 shadow-lg">
        <div className="flex flex-col items-center mb-6">
        <div className =" flex items-center  flex-col gap-5 ">
      {
        settingProfile.map(settingProfile => (
          <div key={settingProfile.id}>
            <SettingProfile name={settingProfile.name} number={settingProfile.number} photo={settingProfile.photo}/>
          </div>
        ))
      }
      </div>
          
        </div>
        <nav className="flex-1 p-4 space-y-7">
        <Link href="/dashboard" className="flex items-center space-x-3">
        <FaHome className=""/>
        <span className="text-sm">Home</span>
        </Link>
        
        <Link href="" className="flex items-center space-x-3">
              <FaBookmark />
              <span className="text-sm">Saved</span>
        </Link>
        
        <Link href="/Chat" className="flex items-center space-x-3">
              <FaComments />
              <span className="text-sm">Chat</span>
        </Link>

        <Link href="/notifications" className="flex items-center space-x-3">
                <FaBell />
                <span>
                  Notifiactions
                </span>
        </Link>

        <Link href="/Settings" className="flex items-center space-x-3">
              <FaCog />
              <span>
                Setting
              </span>
        </Link>
        
        <Link href="/logout"className="flex items-center space-x-3">
              <FaSignOutAlt />
              <span>
                Log Out 
              </span>
        </Link>
      </nav>
     
        <br />

        <div className="flex">
          <Link href="/settings" passHref>
          <button type="submit" className="bg-[#3CB371] text-white p-2 rounded flex ">Become a Fundraiser</button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-8">
        <div className="max-w-3xl mx-auto bshadow-md">
          <h2 className="text-2xl font-bold mb-6">Edit Profile </h2>
          <div className =" flex   flex-col gap-5 ">
      {
        settingProfile.map(settingProfile => (
          <div key={settingProfile.id}>
            <SettingProfile name={settingProfile.name} number={settingProfile.number} photo={settingProfile.photo}/>
          </div>
        ))
      }
      </div>
          <br />
          <form className="space-y-4">
            <div className="flex flex-col">
              <label className="text-gray-700" htmlFor="username">Username</label>
              <input type="text" id="username" name="username" className="p-2 border border-gray-300 rounded" placeholder="@username123" />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700" htmlFor="email">Email</label>
              <input type="email" id="email" name="email" className="p-2 border border-gray-300 rounded" placeholder="ema@gmail.com" />
            </div>
            <h1 className="font-bold">
              URLs
            </h1>
            <div className="flex flex-col">
              
              <input type="url" id="url" name="url" className="p-2 border border-gray-300 rounded" placeholder="website.net" />
            </div>
            <div className="flex flex-col">
              
              <input type="url2" id="url2" name="url2" className="p-2 border border-gray-300 rounded" placeholder="website.place" />
            </div>

            <div className="flex flex-col">
              
              <input type="url3" id="url3" name="url3" className="p-2 border border-gray-300 rounded" placeholder="website.town" />
            </div>
            <div>

              <h3 className=" text-gray-300 ">
                Add another
              </h3>
            </div>

            <h3 className="font-bold">
              Bio
            </h3>

            <div>
            <input type="bio"  name="bio" className=" border border-gray-300 p-20  " placeholder="I am a designer based in philadephia , 
            making great software at Figma" />

            </div>
             
        <br />  
            <button type="submit" className="bg-black text-white p-2 rounded">Save Changes</button>
          </form>
        
        </div>
        <div className="flex m-10">
        <img src="/images/Footers.png" alt="" />
        </div>
        
      </div>
    </div>
  );
};

export default Settings;
