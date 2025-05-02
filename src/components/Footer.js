import React from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
import logo from '../assets/FooterLogo.svg';

const Footer = () => {
  return (
    <footer className=" py-12 px-4 sm:px-10 bg-[linear-gradient(to_top_right,_#eceffa,_transparent)]  to-white  ">
      < div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-x-10 lg:gap-x-60" >
        {/* Left - Logo + Description */}
        <div div className="lg:w-2/5 md:w-2/5" >
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Logo" />
            <span className=" text-xl sm:text-4xl font-bold text-[#020407]">Logo</span>
          </div>
          <p className="text-sm font-normal text-[#335386] leading-relaxed">
            SalesRank.AI offers a comprehensive suite of AI-powered solutions to help you find expert sales professionals who can elevate every aspect of your business. From performance rankings and skill verification to industry benchmarking and real-time analytics, we provide the insights and tools to optimize your sales strategy and drive growth.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-[#001C4A]">
            <div className="bg-white rounded-full shadow-md p-2 hover:text-blue-600 cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="bg-white rounded-full shadow-md p-2 hover:text-blue-400 cursor-pointer">
              <FaTwitter />
            </div>
            <div className="bg-white rounded-full shadow-md p-2 hover:text-blue-700 cursor-pointer">
              <FaLinkedinIn />
            </div>
            <div className="bg-white rounded-full shadow-md p-2 hover:text-pink-500 cursor-pointer">
              <FaInstagram />
            </div>
          </div>

        </div >

        {/* Right - Navigation + License + Contact */}
        < div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-md:mt-5 lg:w-1/2 md:w-3/5" >
          {/* Navigation */}
          <div div >
            <h4 className="font-semibold text-[#001C4A] text-base sm:text-lg mb-5">Navigation</h4>
            <ul className="space-y-5 text-xs sm:text-sm text-[#335386]">
              <li>Service</li>
              <li>Agency</li>
              <li>Case Study</li>
              <li>Resource</li>
              <li>Contact</li>
            </ul>
          </div >

          {/* Licence */}
          <div div >
            <h4 className="font-semibold text-[#001C4A] text-base sm:text-lg mb-5">Licence</h4>
            <ul className="space-y-5 text-xs sm:text-sm text-[#335386]">
              <li>Privacy Policy</li>
              <li>Copyright</li>
              <li>Email Address</li>
            </ul>
          </div >

          {/* Contact */}
          <div div className='w-full' >
            <h4 className="font-semibold  text-[#001C4A] text-base sm:text-lg mb-5">Contact</h4>
            <ul className="space-y-5 text-xs  sm:text-sm text-[#335386]">
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="w-5 h-5 text-[#335386] text-sm font-normal" />
                (406) 555-0120
              </li>
              <li className="flex items-center gap-3  ">
                <FaEnvelope className="w-5 h-5 text-[#335386] text-sm font-normal" />
                Hey@boostim.com
              </li>

              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-2xl text-[#335386]" />
                2972 Westheimer Rd. Santa Ana, Illinois 85486
              </li>
            </ul>
          </div >
        </div >
      </div >
    </footer >
  );
};

export default Footer;
