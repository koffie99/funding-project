"use client";
import React, { useEffect } from "react";
import Splash from "./screens/Splash";
import About from "./screens/About";
import Features from "./screens/Features";
// import Works from "./screens/Works";
import Contributors from "./screens/Contributors"
import Footer from "./screens/Footer"

const Home = () => {
  // useEffect(() => {
  //   location.href='/donorportal'
  // },[])

  return (
    <div>
      <Splash />
      <About />
      <Features />
      {/* <Works
        images={["/images/kite.png", "/images/kite.png", "/images/kite.png"]}
      /> */}
      <Contributors />
      <Footer />
    </div>
  );
};

export default Home;
