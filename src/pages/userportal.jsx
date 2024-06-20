import React from "react"
import Image from "next/image"
import Link from "next/link"
import { IoSearch } from "react-icons/io5"
import { MdOutlineFilterList } from "react-icons/md"
import { LuWallet2 } from "react-icons/lu"
import CampaignCard from "@/uilab/CampaignCard"
import campaigns from "@/components/utils/campaigns"
import leaderboard from "@/components/utils/leaderboard"
import LeaderCard from "@/uilab/LeaderCard"
import { RiMedal2Line } from "react-icons/ri"
import shortenText from "@/components/utils/shortenText"
import followed from "@/components/utils/followed"
import Footer from "@/components/Footer"

const UserPortal = () => {
  return (
    <div className="bg-[#f9fafd] min-h-screen">
      {/* Nav */}
      <div className="flex items-center justify-between w-full bg-white h-[10vh] shadow px-5">
        <div className="flex items-center gap-2">
          <Image width={40} height={40} src="/images/avatar.png" />
          <p>Joshua</p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="">Home</Link>
          <Link href="">Following</Link>
          <Link href="">Saved</Link>
        </div>
        <div className="flex items-center gap-2 p-1 px-3 rounded-lg ring-1 ring-[#ccc]">
          <div className="flex items-center gap-1">
            {" "}
            <IoSearch />
            <input
              type="text"
              className="outline-none font-light"
              placeholder="Search BlockBond..."
            />
          </div>
          <button>
            <MdOutlineFilterList />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 ring-[2px] ring-[#3CB371] rounded p-2 px-4">
            <LuWallet2 />
            <p className="text-sm">0.00</p>
          </div>
          <Link  href="/Dashboard" >
          <button className="bg-[#3CB371] text-sm text-white p-2 px-4 rounded font-light">
            Raise Funds
          </button>
          </Link>
         
        </div>
      </div>

      {/* Main Content */}
      <div className="flex p-8 gap-5">
        {/* Followed campaigns */}
        <div className="flex-[0.8]">
          <div>
            <h2 className="font-bold text-2xl">Followed Campaigns</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-4 gap-4">
              {followed.map((followed) => (
                <CampaignCard
                  title={followed.campaign_title}
                  desc={shortenText(followed.campaign_description)}
                  key={followed.id}
                />
              ))}
            </div>
          </div>

          {/* Feathered campaigned */}
          <div className="mt-12">
            <h2 className="font-bold text-2xl">Featured Campaigns</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-4 gap-4">
              {followed.map((followed) => (
                <CampaignCard
                  title={followed.campaign_title}
                  desc={shortenText(followed.campaign_description)}
                  key={followed.id}
                />
              ))}
            </div>
          </div>

          {/* Suggested campaigned */}
          <div className="mt-12">
            <h2 className="font-bold text-2xl">Suggested Campaigns</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-4 gap-4">
              {followed.map((followed) => (
                <CampaignCard
                  title={followed.campaign_title}
                  desc={shortenText(followed.campaign_description)}
                  key={followed.id}
                />
              ))}
            </div>
          </div>

          {/* Available campaigned */}
          <div className="mt-12">
            <h2 className="font-bold text-2xl">Available Campaigns</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-4 gap-4">
              {campaigns.map((followed) => (
                <CampaignCard
                  title={followed.campaign_title}
                  desc={shortenText(followed.campaign_description)}
                  key={followed.id}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex-[0.2] bg-white rounded-lg shadow p-4 h-[80vh]">
          <div className="flex items-center justify-between">
            <h2 className="font-semibild">Leaderboard</h2>
            <RiMedal2Line className="text-lg" />
          </div>
          <div className="border-b-[1px] my-3 border-dashed"></div>
          <div className="grid grid-cols-1 gap-5">
            {leaderboard.map((leader) => (
              <LeaderCard name={leader.name} amount={leader.amount} email={leader.email}/>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default UserPortal
