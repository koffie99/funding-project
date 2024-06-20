// components/Login.js
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Dashboard from "./Dashboard";
import Settings from '../components/Settings';
import Profile from "./Profile";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Login = () => {

  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="min-h-screen flex items-center justify-center login-bg ">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex w-3/4 ">
        <div className="w-1/2 relative">
          <Image
            src="/images/loginFund.png"
            alt="Login Image"
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
        </div>
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/loginprofile.png"
              alt="Profile Picture"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <h2 className="text-center text-2xl font-semibold mb-4">
            Login with your password to get verified!
          </h2>
          <form className="space-y-4">
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
           
            
            <div className="flex justify-between items-center ">
              <Link href="/forgot-password">
              <span className="text-sm text-green-500 hover:underline">
                  Forgot Password?
                </span>
              </Link>
            </div>
            
            <Link  href="/Dashboard" passHref>
            <button className="w-full bg-green-500 text-white p-3 rounded-lg">
              Verify
            </button>
            </Link>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
