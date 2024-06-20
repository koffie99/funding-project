// components/Profile.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProfileCard from './ProfileCard';
import DashboardProfile from './Dashboard';

const Profile = () => {
  return (
    < div className="min-h-screen  flex-col">
     
      <div className =" flex items-center  flex-col gap-5 ">
      {
        dashboardProfile.map(dashboardProfile => (
          <div key={dashboardProfile.id}>
            <ProfileCard name={dashboardProfile.name} number={dashboardProfile.number} photo={dashboardProfile.photo}/>
          </div>
        )
    )
      }
      </div>
    </div>
)
}
 
 export default Profile 
 
