"use client";
import Image from "next/image";
import { createThirdwebClient, getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";
import { useReadContract } from "thirdweb/react";
import { client } from "../client";

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
    <main className="min-h-[100vh] bg-[#092635]">
      {/* nav */}
      <div className="bg-[#0e2029] h-[10vh] w-full flex items-center justify-between gap-2 px-16">
        <div className="flex items-center gap-3">
          <Image width={40} height={40} src="/images/logo.png" alt="logo" />
          <p className="text-white">
            <span className="font-bold">Block</span>Bond
          </p>
        </div>
        <div>
          <button className="bg-[#21B87B] text-white rounded-full p-2 px-7">
            Connect Wallet
          </button>
        </div>
      </div>

      {/* content */}
      <div className="p-8">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data?.map((campaign, index) => (
              <div
                key={index}
                className="bg-[#142a35] text-white p-4 rounded shadow mb-4"
              >
                <Image
                  width={300}
                  height={300}
                  src={campaign.photoUrl}
                  alt={campaign.photoUrl}
                  className="mb-4 rounded"
                />
                <h2 className="text-lg mb-2 font-bold">{campaign.title}</h2>
                <p className="font-regular text-sm text-[#e2e2e2]">{campaign.description}</p>
                <div className="mt-7">
                  <p>{campaign ? 'Eth' : ''} {campaign.goal}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
