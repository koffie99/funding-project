"use client";
import Image from "next/image";
import { createThirdwebClient, getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";
import { useReadContract } from "thirdweb/react";
import { client } from "./client";

// create the client with your clientId, or secretKey if in a server environment
// export const client = createThirdwebClient({
//   clientId: "8X-6PeMsjeD5jRwEXt454B_J3F_2N1JIzZ6xQb2MW_kTahsNKzU0sZ4wFG-Cx31tAXYWfvJAkXdrl1NrKUahgw"
// });

export default function Campaigns() {
  // connect to your contract
  const contract = getContract({
    client,
    chain: defineChain(11155111),
    address: "0x2115D2E54cC2b4D7B2A7DEc0B45694d11b59Fe38",
  });

  // get all campaigns
  const { data, isLoading } = useReadContract({
    contract,
    method:
      "function getAllCampaigns() view returns ((address creator, string title, string description, string photoUrl, uint256 goal, uint256 deadline, uint256 fundsRaised, bool completed, bool deleted)[])",
    params: [],
  });

  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data?.map((campaign, index) => (
          <div
            key={index}
            className="bg-white text-black p-4 rounded shadow mb-4 max-w-md mx-auto"
          >
            <Image 
              width={300}
              height={300}
              src={campaign.photoUrl}
              alt={campaign.photoUrl}
            />
            <h2 className="text-lg">{campaign.title}</h2>
            <p>{campaign.description}</p>
          </div>
        ))
      )}
    </main>
  );
}
