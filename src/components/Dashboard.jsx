import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import CampaignCard from './CampaignCard';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow flex flex-col">
        <Header />
        <div className="flex-grow p-8 bg-gray-100 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Featured campaigns</h2>
            <h3 className="text-sm font-regular mb-6">See the campaigns you follow</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CampaignCard title="Save a Father, save Tim" raised="80,000.00" goal="100,000.00" timeLeft="2 Months Left" />
              <CampaignCard title="Save a Father, save Tim" raised="80,000.00" goal="100,000.00" timeLeft="2 Months Left" />
              <CampaignCard title="Save a Father, save Tim" raised="80,000.00" goal="100,000.00" timeLeft="2 Months Left" />
            </div>
            <h2 className="text-2xl font-bold mt-12 mb-6">Completed campaigns</h2>
            <h3 className="text-sm font-regular mb-6">See the campaigns you follow</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CampaignCard title="Save a Father, save Tim" raised="80,000.00" goal="100,000.00" timeLeft="2 Months Left" />
              <CampaignCard title="Save a Father, save Tim" raised="80,000.00" goal="100,000.00" timeLeft="2 Months Left" />
              <CampaignCard title="Save a Father, save Tim" raised="80,000.00" goal="100,000.00" timeLeft="2 Months Left" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
