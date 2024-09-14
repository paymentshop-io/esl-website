
import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col items-start justify-center min-h-screen px-6 lg:px-24 py-12 bg-gray-200">
    <h1 className="capitalize text-6xl font-medium text-left text-black leading-tight inline-block align-middle">
      We provide access to{" "}
      <span className="text-green-500">financial</span> <span className="text-purple-500">services</span>, creating
      jobs and transforming businesses across Africa through our agent network
      and E-Payment <span className="text-purple-500">solutions</span>.
    </h1>
    <button className='font-sora text-white h-[65px] mx-auto md:mx-0 block rounded-lg w-[250px] font-[500] my-8 text-xl bg-[#fb5607]'>
        Contact Sale
        </button>
  </div>

  );
};

export default Contact;
