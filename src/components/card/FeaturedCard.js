import React from 'react'

const FeaturedCard = ({ iconSrc, value, description }) => {
  return (
    <div className="flex items-center space-x-4  px-4 py-3 ">
      <div className="bg-[#F3F6FB] shadow-md rounded-[16px] p-3  flex items-center justify-center">
        <img src={iconSrc} alt="Feature Icon" className=" object-contain" />
      </div>
      <div>
        <p className="text-4xl font-bold text-[#05131D]">{value}</p>
        <p className="text-xl text-[#05131DB2]">{description}</p>
      </div>
    </div>
  )
}

export default FeaturedCard