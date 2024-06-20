import Image from "next/image"
import React from "react"
import { FaArrowRightLong } from "react-icons/fa6"
import Nav from "./Nav"
import Link from 'next/link';
import Login from "@/components/Login"

const Splash = () => {
  return (
    <div className="min-h-[100vh] flex items-center md:justify-between justify-between flex-col py-8 splash-bg">
      <Nav />
      <div className="flex flex-col items-center justify-center gap-9">
        <Image
          width={600}
          height={600}
          src="/images/zkpass.png"
          className="md:h-[5vh] h-[3vh] object-contain"
        />
        <h2 className="md:text-5xl text-3xl font-medium text-white md:leading-[60px] leading-[40px] md:w-[80%] w-full text-center">
          Empower change with{" "}
          <span className="text-[#3CB371] font-bold">BlockBond</span> <br className="md:block hidden"/> the
          revolutionary crowdfunding platform that amplifies your impact!
        </h2>
        
        
        
        <Link href="/donorportal" className="text-white ring-[1px] mt-12 ring-white py-3 rounded-full px-8 flex items-center gap-2 ">
          <p className="font-regular">Get Started</p>
          
          <FaArrowRightLong />
          </Link>
        
       
      </div>
      <div></div>
    </div>
  )
}

export default Splash
