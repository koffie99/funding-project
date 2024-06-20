import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen w-full flex md:flex-row items-center justify-center about-bg flex-col" id="about">
      <div className="flex md:flex-row flex-col items-center gap-6 justify-center">
        <Image width={600} height={600} src="/images/kite1.png" alt="Kite Image" className="md:h-auto md:w-auto h-[300px] w-[300px]"/>
        <div className="flex flex-col items-center gap-2 max-w-md text-center">
          <h2 className="font-bold text-4xl">About BlockBond</h2>
          <p className="w-full">
            BlockBond is a crowdfunding platform that empowers individuals to
            raise funds for a wide range of causes. With a user-friendly interface
            and robust features, we make it easy to create and share campaigns,
            track progress, and manage donations.
          </p>
          <button className="ring-[1px] ring-[#3CB371] py-2 font-regular rounded-full w-fit px-6">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
