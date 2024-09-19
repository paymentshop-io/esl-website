import Image from 'next/image';
import React from 'react';

const Careers: React.FC = () => {
  return (
    <section className="relative bg-[#fb5607] h-screen flex justify-center items-center">
      <div className="absolute inset-0 bg-pattern opacity-80"></div>
      
      <div className="relative z-10 flex items-center w-10/12 max-w-6xl">
        {/* Left Text Section */}
        <div className="text-white md:w-1/2 px-6 md:px-12 py-12">
        <Image
          width={60}
          height={60}
            src="/images/55.png" // Update the logo image path
            alt="Hand bag Logo"
          />
          <h2 className="text-4xl font-bold mb-4 mt-6">Careers</h2>
          <p className="mb-6  text-xl">
            Are you passionate about using technology to solve problems and drive
            innovation? Then you should be part of us. Join us to get started.
          </p>
          <button className="font-sora h-[65px] mx-auto md:mx-0 block rounded-lg w-[250px] font-[500] my-8 text-xl bg-white text-black px-16 py-5  shadow-lg hover:bg-gray-200">
            Join Us
          </button>
        </div>

        {/* Right Image Section */}
        {/* <div className="md:w-1/2 flex justify-center items-center">
          <img
            src="/images/career-pic.jpg"
            alt="Careers"
            className="rounded-lg shadow-lg"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Careers;
