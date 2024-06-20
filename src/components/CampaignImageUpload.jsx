import React from 'react';

const CampaignImageUpload = () => {
  return (
    <div className="bg-white shadow p-6 mb-6">
      <h2 className="text-xl font-bold mb-4">Picture</h2>
      <img src="/images/editphoto.png" alt="Campaign" className="w-full h-64 object-cover rounded mb-4" />
      <div className="flex space-x-4">
        <button className="bg-green-500 text-white py-2 px-4 rounded">Change Photo</button>
        <button className=" text-black py-2 px-4 rounded">Delete Photo</button>
      </div>
    </div>
  );
};

export default CampaignImageUpload;
