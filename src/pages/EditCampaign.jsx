import React from 'react';
import CampaignDescription from '../components/CampaignDescription';
import CampaignImageUpload from '../components/CampaignImageUpload';
import CampaignSettings from '../components/CampaignSettings';
import Header from '@/components/Header';

const EditCampaign = () => {
  return (
    <div>
        <Header/>
         <div className="container mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1">
 
        <CampaignDescription />

      </div>
      <div>
      <CampaignImageUpload />
      </div>
      <div>
        <CampaignSettings />
      </div>
    </div>


    </div>
     );
};

export default EditCampaign;
