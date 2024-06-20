import React from "react"
import Image from "next/image"
import Link from "next/link"
import { IoSearch } from "react-icons/io5"
import { MdOutlineFilterList } from "react-icons/md"
import { LuWallet2 } from "react-icons/lu"

const DonorNav = () => {
  return (
    <div>
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
          <Link href='/fundraiserregister' className="bg-[#3CB371] text-sm text-white p-2 px-4 rounded font-light">
            Raise Funds
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DonorNav