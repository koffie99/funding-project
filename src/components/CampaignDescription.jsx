import React from 'react';

const CampaignDescription = () => {
  return (
    <div className="bg-white shadow p-6 mb-6">
      <h2 className="text-xl font-bold mb-4">Campaign Description</h2>
      <textarea
        className="w-full h-80 p-6 border rounded"
        placeholder="Write your campaign story here..."
        defaultValue={`Our Story
Tim, a vibrant 25-year-old and our beloved son, is facing a critical battle for his life. He has been diagnosed with a severe case of Hypertrophic Cardiomyopathy (HCM), a condition that thickens the heart muscle and makes it difficult for the heart to pump blood efficiently.
This surgery, called a Septal Myectomy, is the only chance Tim has for a full recovery and a return to his normal life as a talented musician. Unfortunately, the cost of the surgery is a staggering $150,000 – a burden our family simply cannot bear alone.

Why We Need Your Help
Time is of the essence for Tim's surgery. Doctors recommend the procedure within the next 3 months to avoid potential complications. The sooner we can raise the necessary funds, the sooner he can receive the treatment he needs and get back to playing his beloved guitar. We are reaching out to the kindness of strangers, friends, and family to help us bridge this financial gap.`}
      />
      <button className="bg-green-500 text-white py-2 px-4 mt-4 rounded">Save Changes</button>
    </div>
  );
};

export default CampaignDescription;
