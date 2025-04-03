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
            <div className='w-20 h-20 '>
              <img src="/images/paycenter.svg" className='h-full object-cover object-left' />

            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">PayCenter</h3>
              <p className="mt-1 text-xs md:text-lg md:w-3/4 text-gray-900">
                The PayCentre web and mobile app grants you the freedom to receive and provide banking hall services.
              </p>
            </div>
          </div>
          <button className="font-sora text-white h-14 sm:h-[65px] w-full sm:w-[250px] bg-[#fb5607] rounded-lg border-2 border-black font-medium text-xs md:text-lg md:w-3/4mt-6 md:mt-0">
            Visit PayCenter
          </button>
        </div>

        {/* PayPad */}
        <div className="flex flex-col md:flex-row justify-between border-b-2 border-gray-400 pb-8">
          <div className="flex items-center gap-4 space-x-4">
            <div className='w-16 h-20 '>
              <img src="/images/quicksecure.svg" className='md:h-full h-full object-contain object-left' />

            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">QuickSecure</h3>
                <p className="mt-1 text-xs md:text-lg md:w-3/4 text-gray-900">
                QuickSecure is an Escrow Payment solution that ensures secure transactions between buyers and sellers.
                </p>
            </div>
          </div>
          <button className="font-sora text-white h-14 sm:h-[65px] w-full sm:w-[250px] bg-[#fb5607] rounded-lg border-2 border-black font-medium text-xs md:text-lg md:w-3/4mt-6 md:mt-0">
            Visit QuickSecure
          </button>
        </div>

        {/* PaymentShop */}
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex items-center space-x-4">
            <div className='w-20 h-20 '>
              <img src="/images/cashenvoy.png" className=' object-contain object-left' />

            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">CashEnvoy</h3>
              <p className="mt-1 text-xs md:text-lg md:w-3/4 text-gray-900">
              Payment gateway for local and international transactions.
              </p>
            </div>
          </div>
          <button className="font-sora text-white h-14 sm:h-[65px] w-full sm:w-[250px] bg-[#fb5607] rounded-lg border-2 border-black font-medium text-xs md:text-lg md:w-3/4mt-6 md:mt-0">
            Visit CashEnvoy
          </button>
        </div>
      </div>
    </div>

  );
};

export default OurProducts;
