"use client"
import { useState } from "react";
import Image from "next/image";
import { createThirdwebClient, getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";
import { useReadContract, ConnectButton, useSendTransaction } from "thirdweb/react";
import { ethers } from "ethers";
import { client } from "../client";

export default function Campaigns() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [donationAmount, setDonationAmount] = useState("");

  const contract = getContract({
    client,
    chain: defineChain(11155111),
    address: "0x2115D2E54cC2b4D7B2A7DEc0B45694d11b59Fe38",
  });

  const { data, isLoading } = useReadContract({
    contract,
    method:
      "function getAllCampaigns() view returns ((address creator, string title, string description, string photoUrl, uint256 goal, uint256 deadline, uint256 fundsRaised, bool completed, bool deleted)[])",
    params: [],
  });

  const { mutate: sendTransaction } = useSendTransaction();

  const handleDonate = async (campaign) => {
    setSelectedCampaign(campaign);
    setModalOpen(true);
  };

  const confirmDonation = async () => {
    try {
      const iface = new ethers.utils.Interface([
        "function donate(uint256 _campaignId) payable"
      ]);

      const data = iface.encodeFunctionData("donate", [selectedCampaign.index]);

      const transaction = {
        to: contract.address,
        value: ethers.utils.parseEther(donationAmount),
        data: data,
      };

      sendTransaction({ ...transaction, client });
      setModalOpen(false);
    } catch (error) {
      console.error("Error while donating:", error);
    }
  };

  return (
    <main className="min-h-[100vh] bg-[#092635]">
      {/* Campaigns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
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
            <p className="font-regular text-sm text-[#e2e2e2]">
              {campaign.description}
            </p>
            <p className="mt-4 text-sm p-1">
              {campaign.fundsRaised.toString()} Eth raised so far
            </p>
            <div className="mt-7 flex items-center justify-between">
              <p className="bg-[#45554d] w-fit p-2 px rounded">
                {campaign ? "Goal: Eth" : ""} {campaign.goal.toString()}
              </p>
              <button
                className="text-[#28AE73] p-3 px-5 rounded-full"
                onClick={() => handleDonate({ index, ...campaign })}
              >
                Donate
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <Image
              width={300}
              height={300}
              src={selectedCampaign.photoUrl}
              alt={selectedCampaign.photoUrl}
              className="mb-4 rounded"
            />
            <h2 className="text-lg mb-2 font-bold">{selectedCampaign.title}</h2>
            <input
              type="number"
              placeholder="Enter donation amount"
              className="w-full p-2 mb-4 rounded bg-gray-200"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
            />
            <div className="flex justify-end">
              <button
                className="bg-[#28AE73] text-white p-2 rounded mr-2"
                onClick={confirmDonation}
              >
                Donate
              </button>
              <button
                className="bg-red-500 text-white p-2 rounded"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
