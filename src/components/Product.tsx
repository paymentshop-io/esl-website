// components/OurProducts.tsx

import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaMobileAlt } from 'react-icons/fa';
import { PiLockKeyFill } from 'react-icons/pi';

const OurProducts: React.FC = () => {
  return (
    <div className="bg-gray-50 md:h-screen py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title Section */}
      <h1 className="text-center md:text-left text-4xl md:text-5xl lg:text-6xl leading-tight font-normal text-black font-ageo">
        Our
        <br />
        <span className="font-bold">Products</span>
      </h1>
    </div>
  
    <div className="mt-10 max-w-7xl mx-auto grid gap-8 sm:grid-cols-1 lg:grid-cols-1 px-4">
      {/* PayCenter */}
      <div className="flex flex-col md:flex-row justify-between border-b-2 border-gray-400 pb-8">
        <div className="flex items-center space-x-4">
          <FaMapMarkerAlt className="text-blue-500 text-6xl sm:text-8xl" />
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">PayCenter</h3>
            <p className="mt-1 text-lg sm:text-2xl text-gray-900">
              The PayCentre web and mobile app grants you the freedom to receive and provide banking hall services.
            </p>
          </div>
        </div>
        <button className="font-sora text-white h-14 sm:h-[65px] w-full sm:w-[250px] bg-[#fb5607] rounded-lg border-2 border-black font-medium text-lg sm:text-xl mt-6 md:mt-0">
          Visit PayCenter
        </button>
      </div>
  
      {/* PayPad */}
      <div className="flex flex-col md:flex-row justify-between border-b-2 border-gray-400 pb-8">
        <div className="flex items-center space-x-4">
          <FaMobileAlt className="text-green-700 text-6xl sm:text-8xl" />
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">PayPad</h3>
            <p className="mt-1 text-lg sm:text-2xl text-gray-900">
              PAYPAD is an mPOS solution that enables businesses to receive payments via a smartphone.
            </p>
          </div>
        </div>
        <button className="font-sora text-white h-14 sm:h-[65px] w-full sm:w-[250px] bg-[#fb5607] rounded-lg border-2 border-black font-medium text-lg sm:text-xl mt-6 md:mt-0">
          Visit PayPad
        </button>
      </div>
  
      {/* PaymentShop */}
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex items-center space-x-4">
          <PiLockKeyFill className="text-6xl sm:text-8xl" />
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">PaymentShop</h3>
            <p className="mt-1 text-lg sm:text-2xl text-gray-900">
              PaymentShop is a solution that helps businesses receive payments via a smartphone.
            </p>
          </div>
        </div>
        <button className="font-sora text-white h-14 sm:h-[65px] w-full sm:w-[250px] bg-[#fb5607] rounded-lg border-2 border-black font-medium text-lg sm:text-xl mt-6 md:mt-0">
          Visit PaymentShop
        </button>
      </div>
    </div>
  </div>

  );
};

export default OurProducts;
