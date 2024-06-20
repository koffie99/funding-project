import React from 'react';

const CampaignSettings = () => {
  return (
    <div className="bg-white shadow p-6">
      <h2 className="text-xl font-bold mb-4">Instructions</h2>
      <p className="mb-4">Your campaign description should not be more than 1000 words</p>
      
      <h2 className="text-xl font-bold mb-4">Category</h2>
      <select className="w-full p-2 border rounded mb-4">
        <option>Medical Emergency</option>
        <option>Education</option>
        <option>Community</option>
      </select>

      <h2 className="text-xl font-bold mb-4">Amount Needed</h2>
      <input
        type="text"
        className="w-full p-2 border rounded mb-4"
        defaultValue="$150,000.00"
      />

      <h2 className="text-xl font-bold mb-4">Span</h2>
      <div className="flex items-center mb-4">
        <input type="range" min="1" max="12" className="mr-2" defaultValue="3" />
        <span>3 months</span>
      </div>

      <button className="bg-green-500 text-white py-2 px-4 rounded w-full">Save settings</button>
    </div>
  );
};

export default CampaignSettings;
