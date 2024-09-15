import Image from 'next/image';
import Link from 'next/link'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full font-sora md:h-screen bg-[#090f27] text-white py-16 px-8 md:px-16">
      <div className="max-w-screen-xl h-full  grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className="flex w-full flex-col justify-between items-start text-center md:text-left">
          <h2 className=" font-ageo text-4xl md:text-7xl font-medium mb-4">Reach <span className='font-semibold normal-case'>Out</span></h2>
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
          <div className="flex relative items-center h-[72px] md:h-[96px] w-full border-2 border-white bg-[#090f27] rounded-lg">
            <input
              type="email"
              placeholder="Your Email..."
              className="w-full bg-transparent h-full px-4 py-4 text-white "
            />
            <button className="text-black right-0 h-full w-[70px] md:w-[90px] absolute bg-white p-2 rounded-l-lg">
              &rarr;
            </button>
          </div>
        </div>
          <p className="mb-4 font-normal">
            contact@esettlementgroup.com
            <br />
            13A, Hughes Avenue, Alagomeji, Yaba, Lagos.
          </p>
          <p className="mb-4 font-normal">
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

