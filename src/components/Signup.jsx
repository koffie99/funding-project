// components/Signup.js
import React from "react";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="min-h-screen flex items-center justify-center login-bg">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex w-3/4">
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-center text-2xl font-semibold mb-4">
            Get started with these <br /> 3 easy steps!
          </h2>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="edemharris347@gmail.com"
                className="w-full p-3 border rounded-lg focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="username" className="text-sm font-medium">
                Username (Optional)
              </label>
              <input
                id="username"
                type="text"
                placeholder="jenylelalaaa"
                className="w-full p-3 border rounded-lg focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={passwordVisible ? "text" : "password"}
                  placeholder="***********"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:border-green-500"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-3 text-gray-500"
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <button className="w-full bg-green-500 text-white p-3 rounded-lg">
              Get Signed In!
            </button>
          </form>
          <div className="text-center text-sm text-gray-500 mt-4">
          <Image
          width={300}
          height={300}
          src="/images/zkpass.png"
          className="h-[5vh] object-contain"
        />
          </div>
        </div>
        <div className="w-1/2 relative">
          <Image
            src="/images/loginFund.png"
            alt="Signup Image"
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
