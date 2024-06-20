"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import Modal from "react-modal"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const openLoginModal = () => {
    setIsLoginModalOpen(true)
  }

  const closeLoginModal = () => {
    setIsLoginModalOpen(false)
  }

  const openSignupModal = () => {
    setIsSignupModalOpen(true)
  }

  const closeSignupModal = () => {
    setIsSignupModalOpen(false)
  }

  return (
    <nav className="w-full py-4 px-6 md:px-10 text-white relative">
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold">BlockBond</div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="#"
            className="hover:ring-1 hover:ring-white p-2 px-4 rounded-full"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:ring-1 hover:ring-white p-2 px-4 rounded-full"
          >
            About
          </a>
          <a
            href="#features"
            className="hover:ring-1 hover:ring-white p-2 px-4 rounded-full"
          >
            Features
          </a>
          <a
            href="#works"
            className="hover:ring-1 hover:ring-white p-2 px-4 rounded-full"
          >
            How it works
          </a>
          <a
            href="#contributors"
            className="hover:ring-1 hover:ring-white p-2 px-4 rounded-full"
          >
            Contributors
          </a>
        </div>
        <div className="hidden md:flex border-2 border-[#3CB371] rounded-full px-1 items-center gap-2 py-1">
          <button
            onClick={openLoginModal}
            className="text-white py-2 px-3 hover:bg-[#3CB371] rounded-tl-full rounded-bl-full text-sm border-r-[1px] border-white transition-colors duration-300"
          >
            Login
          </button>
          <button
            onClick={openSignupModal}
            className="text-white py-2 px-3 hover:bg-[#3CB371] rounded-tr-full rounded-br-full text-sm transition-colors duration-300"
          >
            Sign Up
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-fit py-20 bg-white bg-opacity-30 backdrop-blur-md p-4 md:hidden flex flex-col items-center space-y-4">
          <button
            onClick={closeMenu}
            className="absolute top-4 right-6 text-white focus:outline-none"
          >
            <FaTimes size={24} />
          </button>
          <a
            href="#"
            className="block hover:ring-1 hover:ring-white p-2 rounded-full"
            onClick={closeMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className="block hover:ring-1 hover:ring-white p-2 rounded-full"
            onClick={closeMenu}
          >
            About
          </a>
          <a
            href="#features"
            className="block hover:ring-1 hover:ring-white p-2 rounded-full"
            onClick={closeMenu}
          >
            Features
          </a>
          <a
            href="#works"
            className="block hover:ring-1 hover:ring-white p-2 rounded-full"
            onClick={closeMenu}
          >
            How it works
          </a>
          <a
            href="#contributors"
            className="block hover:ring-1 hover:ring-white p-2 rounded-full"
            onClick={closeMenu}
          >
            Contributors
          </a>
          <div className="border-2 border-[#3CB371] rounded-full px-1 flex items-center gap-4 py-1">
            <button
              onClick={openLoginModal}
              className="text-white py-2 pr-3 hover:bg-[#3CB371] rounded-tl-full pl-4 rounded-bl-full text-sm border-r-[1px] border-white transition-colors duration-300"
            >
              Login
            </button>
            <button
              onClick={openSignupModal}
              className="text-white py-2 hover:bg-[#3CB371] rounded-tr-full pl-1 pr-3 text-sm transition-colors duration-300"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}

      {/* Login Modal */}
      <Modal
        isOpen={isLoginModalOpen}
        onRequestClose={closeLoginModal}
        className="flex justify-center items-center h-screen w-full bg-black bg-opacity-50 fixed top-0 left-0"
        overlayClassName="flex justify-center items-center h-screen w-full bg-black bg-opacity-50 fixed top-0 left-0"
      >
        <div className="bg-white rounded-lg  relative md:w-[55vw] w-[80vw] h-[60vh]">
          <button
            onClick={closeLoginModal}
            className="absolute top-2 right-2 text-gray-500 hover:text-black focus:outline-none"
          >
            <FaTimes size={24} />
          </button>
          <div className="w-full h-full flex md:flex-row flex-col rounded-2xl">
            <div
              className="md:w-[60%] md:block hidden w-full h-full overflow-hidden"
              style={{
                backgroundImage: `url("/images/loginimg.png")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="md:w-[40%] w-full h-full flex flex-col items-center justify-center">
              <div className="flex flex-col items-center">
                <Image width={80} height={80} src="/images/heroman.png" />
                <p className="text-center text-sm text-[#818181] w-[70%] mt-2 font-regular">
                  Login with your password to get verified!
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-4 w-full px-5">
                <input
                  type="text"
                  placeholder="Password"
                  className="ring-1 ring-[#ccc] rounded-lg p-2 px-3"
                />
                <button className="bg-[#3CB371] text-white p-2 rounded-lg">
                  Verify
                </button>
              </div>
              <div className="mt-4">
                <Image width={100} height={100} src="/images/zkgreen.png" />
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Sign Up Modal */}
      <Modal
        isOpen={isSignupModalOpen}
        onRequestClose={closeSignupModal}
        className="flex justify-center items-center h-screen w-full bg-black bg-opacity-50 fixed top-0 left-0"
        overlayClassName="flex justify-center items-center h-screen w-full bg-black bg-opacity-50 fixed top-0 left-0"
      >
        <div className="bg-white rounded-lg p-6 relative md:w-[55vw] w-[80vw]">
          <button
            onClick={closeSignupModal}
            className="absolute top-2 right-2 text-gray-500 hover:text-black focus:outline-none"
          >
            <FaTimes size={24} />
          </button>
          <div className="w-full h-full flex md:flex-row flex-col rounded-2xl">
            <div className="md:w-[40%] w-full h-full flex flex-col items-center justify-center">
              <p className="text-center">Get started with these 3 easy steps!</p>
              <div className="flex flex-col gap-2 mt-4 w-full">
                <input
                  type="email"
                  placeholder="Email"
                  className="ring-1 ring-[#ccc] rounded-lg p-2 px-3"
                />
                <input
                  type="text"
                  placeholder="Username"
                  className="ring-1 ring-[#ccc] rounded-lg p-2 px-3"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="ring-1 ring-[#ccc] rounded-lg p-2 px-3"
                />
                <button className="bg-[#3CB371] text-white p-2 rounded-lg">
                  Sign In
                </button>
              </div>
              <div className="mt-4">
                <Image width={100} height={100} src="/images/zkgreen.png" />
              </div>
            </div>
            <div
              className="md:w-[60%]  w-full h-full overflow-hidden bg-black"
              style={{
                backgroundImage: `url("/images/loginimg.png")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
      </Modal>
    </nav>
  )
}

export default Nav
