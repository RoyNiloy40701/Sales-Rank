import React from 'react'
import robot from '../assets/robot.svg';
import rectangle from '../assets/Rectangle.svg';
import smallRobot from '../assets/small robot.svg';
import atr from '../assets/atr.svg';
import FeaturedCard from './card/FeaturedCard.js';



const Header = () => {
  return (
    <div className=" bg-gradient-to-br from-white to-blue-50 p-6 md:p-12 mb-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-medium text-gray-900 leading-tight md:leading-[6rem]">
            Your AI-<br />
            <span className="text-blue-700">Powered</span><br />
            Sales Coach
          </h1>
          <div className="flex items-center space-x-4  flex-col sm:flex-row ">
            <img
              src={smallRobot}
              alt="AI Bot"
              className=" rounded"
            />
            <div className="text-xl p-4 rounded-md text-gray-700">
              Get real-time coaching, script suggestions, and deal-closing
              strategies powered by advanced AI technology.
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <FeaturedCard
              iconSrc={rectangle}
              value="2000+"
              description="Your protection"
            />
            <FeaturedCard
              iconSrc={atr}
              value="7001+"
              description="Provide tailored"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="relative">
          <img
            src={robot}
            alt="AI Robot"
            className=" rounded-2xl shadow-lg object-cover w-full max-w-[583px] mx-auto"
          />

          <div className="absolute rounded-2xl bottom-0 space-y-4 left-1/4 transform -translate-x-1/4 sm:-translate-x-2/4 translate-y-1/4 md:w-[60%] lg:w-[70%] xl:w-[75%] sm:w-[55%] w-[70%] bg-white shadow-xl py-8 px-4 ">
            <div className="flex justify-between">
              <p className="md:text-5xl text-3xl font-semibold text-[#00245F]">721+</p>
              <p className="md:text-5xl text-3xl font-semibold text-[#00245F]">1000+</p>
            </div>
            <h3 className="md:text-2xl text-xl font-semibold text-[#05131D]">
              Growth is our priority.
            </h3>
            <p className="md:text-lg text-sm text-[#05131DB2]  p-2 rounded">
              As a full-service business agency, we specialize in helping companies
              of all sizes optimize their operations
            </p>
          </div>


        </div>


      </div>
    </div>
  )
}

export default Header