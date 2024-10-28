import React from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { RiArrowDownSLine } from "react-icons/ri";

const OurprouctsFeat = () => {
  return (
    <div className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28 border-b-2 border-gray-400">
      <div className='flex justify-between'>
        <div>
          <h3 className='font-sora text-4xl md:text-6xl'>Our Product <span className='font-bold'><br />Innovative Features</span></h3>
        </div>

        {/* Navigation Icons (Hidden on Mobile) */}
        <div className="hidden md:flex justify-end mt-8 space-x-4">
          <button className="p-6 border-2 border-yellow-400 rounded-full text-gray-900 text-4xl">
            <FaArrowLeftLong />
          </button>
          <button className="p-6 border-2 border-yellow-400 rounded-full text-gray-900 text-4xl">
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      <div className='flex py-8 my-4 flex-wrap gap-6 items-center justify-evenly'>
        
        {/* Feature 1: SECURITY */}
        <div className='rounded-3xl w-[340px] h-[414px] px-3 py-3 bg-[#ffbe0b]'>
          <div className='w-[302px] mx-auto my-8 h-[170px] rounded-xl'>
            <img src='/images/feat-1.jpg' className='object-cover h-full w-full rounded-xl' alt='' />
          </div>
          <h5 className='font-ageo text-center text-2xl font-semibold'>SECURITY</h5>
          <p className='text-center text-xl font-sora mt-2'>Lorem ipsum dolor sit amet, consectetur de elit</p>
          <div className="flex items-center justify-center">
            <button className="text-center text-3xl font-bold mt-6">
              <RiArrowDownSLine />
            </button>
          </div>
        </div>

        {/* Feature 2: Payments Solution */}
        <div className='rounded-3xl w-[340px] h-[414px] px-3 py-3 bg-[#ffbe0b]'>
          <div className='w-[302px] mx-auto my-8 h-[170px] rounded-xl'>
            <img src='/images/feat-2.jpg' className='object-cover h-full w-full rounded-xl' alt='' />
          </div>
          <h5 className='font-ageo text-center text-2xl font-semibold'>PAYMENT SOLUTIONS</h5>
          <p className='text-center text-xl font-sora mt-2'>Lorem ipsum dolor sit amet, consectetur de elit</p>
          <div className="flex items-center justify-center">
            <button className="text-center text-3xl font-bold mt-6">
              <RiArrowDownSLine />
            </button>
          </div>
        </div>

        {/* Feature 3: Bill Payments */}
        <div className='rounded-3xl w-[340px] h-[414px] px-3 py-3 bg-[#ffbe0b]'>
          <div className='w-[302px] mx-auto my-8 h-[170px] rounded-xl'>
            <img src='/images/feat-3.jpg' className='object-cover h-full w-full rounded-xl' alt='' />
          </div>
          <h5 className='font-ageo text-center text-2xl font-semibold'>BILL PAYMENTS</h5>
          <p className='text-center text-xl font-sora mt-2'>Lorem ipsum dolor sit amet, consectetur de elit</p>
          <div className="flex items-center justify-center">
            <button className="text-center text-3xl font-bold mt-6">
              <RiArrowDownSLine />
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default OurprouctsFeat
