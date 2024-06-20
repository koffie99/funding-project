"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Works = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 1000) // 250ms or a quarter of a second
    return () => clearInterval(interval)
  }, [images.length])

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 250,
    beforeChange: (current, next) => setCurrentSlide(next),
    arrows: false,
  }

  return (
    <div
      className="min-h-screen w-full pt-12 flex-col items-center justify-center py px-10 pb-[10rem] work-bg"
      id="works"
    >
      <h3 className="font-regular text-sm text-[#6C6C6CF7] flex justify-center">
        Step by Step
      </h3>
      <h1 className="font-bold text-2xl mb-5 text-black flex justify-center">
        How It Works
      </h1>

      <div className="h-full">
        <Slider {...settings} className="flex gap-4">
          <div className="bg-black ml-3 h-[80vh] w-[80%] rounded-lg relative">
            <div className="absolute bottom-12 left-12">
              <p className="text-white mb-4">Step 1</p>
              <h3 className="text-white mb02">Login or Signup on the platform</h3>
              <p className="text-[#818181] w-[65%]">
                Step 1 of 5 Login or Signup to Platform Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
                hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
                ligula consectetur, ultrices mauris. Maecenas vitae mattis
                tellus. Nullam quis imperdiet augue.{" "}
              </p>
            </div>
          </div>
          <div className="bg-black ml-3 h-[80vh] w-[80%] rounded-lg relative">
            <div className="absolute bottom-12 left-12">
              <p className="text-white mb-4">Step 2</p>
              <h3 className="text-white mb02">Login or Signup on the platform</h3>
              <p className="text-[#818181] w-[65%]">
                Step 1 of 5 Login or Signup to Platform Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
                hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
                ligula consectetur, ultrices mauris. Maecenas vitae mattis
                tellus. Nullam quis imperdiet augue.{" "}
              </p>
            </div>
          </div>
          <div className="bg-black ml-3 h-[80vh] w-[80%] rounded-lg relative">
            <div className="absolute bottom-12 left-12">
              <p className="text-white mb-4">Step 3</p>
              <h3 className="text-white mb02">Login or Signup on the platform</h3>
              <p className="text-[#818181] w-[65%]">
                Step 1 of 5 Login or Signup to Platform Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
                hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
                ligula consectetur, ultrices mauris. Maecenas vitae mattis
                tellus. Nullam quis imperdiet augue.{" "}
              </p>
            </div>
          </div>
          <div className="bg-black ml-3 h-[80vh] w-[80%] rounded-lg relative">
            <div className="absolute bottom-12 left-12">
              <p className="text-white mb-4">Step 4</p>
              <h3 className="text-white mb02">Login or Signup on the platform</h3>
              <p className="text-[#818181] w-[65%]">
                Step 1 of 5 Login or Signup to Platform Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
                hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
                ligula consectetur, ultrices mauris. Maecenas vitae mattis
                tellus. Nullam quis imperdiet augue.{" "}
              </p>
            </div>
          </div>
          <div className="bg-black ml-3 h-[80vh] w-[80%] rounded-lg relative">
            <div className="absolute bottom-12 left-12">
              <p className="text-white mb-4">Step 5</p>
              <h3 className="text-white mb02">Login or Signup on the platform</h3>
              <p className="text-[#818181] md:w-[65%]">
                Step 1 of 5 Login or Signup to Platform Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
                hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
                ligula consectetur, ultrices mauris. Maecenas vitae mattis
                tellus. Nullam quis imperdiet augue.{" "}
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Works
