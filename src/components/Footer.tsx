import Image from 'next/image';
import Link from 'next/link'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-screen bg-[#090f27] text-white py-16 px-16">
      <div className="max-w-screen-xl h-full  flex justify-between gap-10">
        {/* Left Section */}
        <div className="flex w-full flex-col justify-between items-start text-center md:text-left">
          <h2 className="uppercase text-4xl font-bold mb-4">Reach <span className='font-semibold normal-case'>Out</span></h2>
          <div>
          <div className="relative object-contain w-fit">
          <Image
          width={300}
          height={300}
            src="/E settlemnt Logo.png" // Update the logo image path
            alt="E-Settlement Logo"
          />
          </div>
          <p className="mt-4 text-sm text-center md:text-left">
            © 2024 E-settlement Ltd
          </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col w-full h-full gap-16">
        <div className="">
          <h3 className="capitalize text-xl font-semibold mb-4">NEWSLETTER</h3>
          <div className="flex items-center w-ful bg-[#090f27] rounded-lg p-2">
            <input
              type="email"
              placeholder="Your Email..."
              className="w-full bg-transparent px-4 py-4 text-white border-2 border-white"
            />
            <button className="text-black bg-white p-2 rounded-lg">
              &rarr;
            </button>
          </div>
        </div>
          <p className="mb-4 font-semibold">
            contact@esettlementgroup.com
            <br />
            13A, Hughes Avenue, Alagomeji, Yaba, Lagos.
          </p>
          <p className="mb-4 font-semibold">
            Telephone: (123) 456-7890
            <br />
            Mobile: (123) 456-7890
          </p>
          <div className="flex flex-col gap-2">
            <h4 className='uppercase font-bold'>Follow US </h4>
            {/* Social Icons */}
            <div className="flex gap-3">
            <a href="#" className="text-white text-lg hover:text-gray-400">
              {/* Icon */}
              <FaInstagram width={24} height={24} />
            </a>
            <a href="#" className="text-white text-lg hover:text-gray-400">
              {/* Icon */}
              <FaTwitter width={24} height={24} />
            </a>
            <a href="#" className="text-white text-lg hover:text-gray-400 w-8 h-auto cursor-pointer">
              {/* Icon */}
              <FaLinkedin width={24} height={24} />
            </a>
            </div>
          </div>

           {/* Bottom Links */}
      <div className="font-semibold max-w-7xl mx-auto mt-12 flex gap-6 justify-self-end text-sm">
        <a href="#" className="text-gray-300 hover:text-white ">
          Terms & Conditions
        </a>
        <a href="#" className="text-gray-300 hover:text-white">
          Privacy Policy
        </a>
      </div>
        </div>
      </div>

     
    </footer>
  );
};

export default Footer;

