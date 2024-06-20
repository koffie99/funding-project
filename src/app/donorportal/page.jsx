  "use client";
  import { useState } from "react";
  import Image from "next/image";
  import Link from "next/link";
  import {
    createThirdwebClient,
    getContract,
    prepareContractCall,
  } from "thirdweb";
  import { defineChain } from "thirdweb/chains";
  import {
    useReadContract,
    ConnectButton,
    useSendTransaction,
  } from "thirdweb/react";
  import { ethers } from "ethers";
  import { client } from "../client";
  import { IoSearch } from "react-icons/io5";

  export default function Campaigns() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCampaign, setSelectedCampaign] = useState(null);
    const [donationAmount, setDonationAmount] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [isRaiseFundsModalOpen, setRaiseFundsModalOpen] = useState(false);
    const [newCampaign, setNewCampaign] = useState({
      title: "",
      description: "",
      photoUrl: "",
      goal: "",
      durationInDays: "",
    });

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

    // get campaign count
    const { data: cCount, cloading } = useReadContract({
      contract,
      method: "function campaignCount() view returns (uint256)",
      params: [],
    });

    const { mutate: sendTransaction } = useSendTransaction();

    const handleDonate = async (campaign) => {
      setSelectedCampaign(campaign);
      setModalOpen(true);
    };

    const confirmDonation = async () => {
      try {
        const transaction = prepareContractCall({
          contract,
          method: "donate",
          params: [selectedCampaign.index],
          value: ethers.utils.parseEther(donationAmount),
        });
        sendTransaction(transaction);
        setModalOpen(false);
      } catch (error) {
        console.error("Error while donating:", error);
      }
    };

    const handleRaiseFunds = () => {
      setRaiseFundsModalOpen(true);
    };

    const handleCreateCampaign = async () => {
      try {
        const transaction = prepareContractCall({
          contract,
          method: "createCampaign",
          params: [
            newCampaign.title,
            newCampaign.description,
            newCampaign.photoUrl,
            ethers.utils.parseEther(newCampaign.goal),
            newCampaign.durationInDays,
          ],
        });
        sendTransaction(transaction);
        setRaiseFundsModalOpen(false);
      } catch (error) {
        console.error("Error while creating campaign:", error);
      }
    };

    const filteredCampaigns = data?.filter((campaign) =>
      campaign.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <main className="min-h-[100vh] bg-[#092635]">
        {/* nav */}
        <div className="bg-[#0e2029] h-[12vh] w-full flex items-center justify-between gap-2 px-16">
          <Link href="/" className="flex items-center gap-3">
            <Image width={40} height={40} src="/images/logo.png" alt="logo" />
            <p className="text-white">
              <span className="font-bold">Block</span>Bond
            </p>
          </Link>
          <div className="p-4 flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 ring-[1px] ring-[#ccc] p-2 rounded-full px-3">
                <IoSearch className="text-white text-lg" />
                <input
                  className="bg-transparent text-white outline-none"
                  type="text"
                  placeholder="Search BlockBond..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <button
              className="bg-[#1EBF79] text-white p-2 rounded-full px-4"
              onClick={handleRaiseFunds}
            >
              + Raise Funds
            </button>
            <ConnectButton client={client} />
          </div>
        </div>

        {/* content */}
        <div className="p-8">
          <p className="text-white ml-4">
            All Campaigns ({cloading ? "0" : cCount?.toString()})
          </p>

          {isLoading ? (
            <div className="text-white text-center flex items-center justify-center p-20">
              <Image width={30} height={30} src="/loading.gif" alt="loading" />
              <p>Loading campaigns...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredCampaigns?.map((campaign, index) => (
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
                    {BigInt(campaign.fundsRaised).toString()} Eth raised so far
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
          )}
        </div>

        {/* Donation Modal */}
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
                  className="bg-[#28AE73] text-white p-2 rounded mr-2 border-none"
                  onClick={confirmDonation}
                >
                  Donate
                </button>
                <button
                  className=" text-[#818181] p-2"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Raise Funds Modal */}
        {isRaiseFundsModalOpen && (
          <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-lg mb-2 font-bold">Create New Campaign</h2>
              <input
                type="text"
                placeholder="Title"
                className="w-full p-2 mb-4 rounded bg-gray-200"
                value={newCampaign.title}
                onChange={(e) =>
                  setNewCampaign({ ...newCampaign, title: e.target.value })
                }
              />
              <textarea
                placeholder="Description"
                className="w-full p-2 mb-4 rounded bg-gray-200"
                value={newCampaign.description}
                onChange={(e) =>
                  setNewCampaign({ ...newCampaign, description: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Photo URL"
                className="w-full p-2 mb-4 rounded bg-gray-200"
                value={newCampaign.photoUrl}
                onChange={(e) =>
                  setNewCampaign({ ...newCampaign, photoUrl: e.target.value })
                }
              />
              <input
                type="number"
                placeholder="Goal (in ETH)"
                className="w-full p-2 mb-4 rounded bg-gray-200"
                value={newCampaign.goal}
                onChange={(e) =>
                  setNewCampaign({ ...newCampaign, goal: e.target.value })
                }
              />
              <input
                type="number"
                placeholder="Duration (in days)"
                className="w-full p-2 mb-4 rounded bg-gray-200"
                value={newCampaign.durationInDays}
                onChange={(e) =>
                  setNewCampaign({
                    ...newCampaign,
                    durationInDays: e.target.value,
                  })
                }
              />
              <div className="flex justify-end">
                <button
                  className="bg-[#28AE73] text-white p-2 rounded mr-2 border-none"
                  onClick={handleCreateCampaign}
                >
                  Create
                </button>
                <button
                  className=" text-[#818181] p-2"
                  onClick={() => setRaiseFundsModalOpen(false)}
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
