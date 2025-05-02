import React from 'react'

const CourseCard = ({ img }) => {
  return (
    <div className="max-w-2xl  bg-[#F0F0F0] rounded-lg overflow-hidden shadow-md p-5 sm:p-7 md:p-5 lg:p-10 ">
      {/* Course Image */}
      <div className="relative mb-[30px] ">
        <img
          src={img}
          alt="AI Trading Course"
          className="w-full  object-cover rounded-lg"
        />
      </div>

      {/* Course Info */}
      <div >
        {/* Tags and Author */}
        <div className="flex justify-between items-center mb-[30px]">
          <div className="flex space-x-2">
            <span className="bg-white text-[#4C4C4D] text-sm lg:text-lg m font-medium px-[16px] py-[10px] rounded-xl">
              4 Weeks
            </span>
            <span className="bg-white text-[#4C4C4D] text-sm lg:text-lg  font-medium px-[16px] py-[10px] rounded-xl">
              Beginner
            </span>
          </div>
          <div className="lg:text-xl text-[16px] font-medium text-[#262626]">
            By John Smith
          </div>
        </div>

        {/* Course Title */}
        <h3 className="text-2xl font-semibold text-[#262626] mb-[14px]">
          Web Design Fundamentals
        </h3>

        {/* Course Description */}
        <p className="text-[#4C4C4D] text-lg font-normal mb-6">
          Learn the fundamentals of web design, including HTML, CSS, and
          responsive design principles. Develop the skills to create visually
          appealing and user-friendly websites.
        </p>

        {/* CTA Button */}
        <button className=" mt-[14px] w-full bg-[#002868] text-white font-medium text-lg py-4 px-6 rounded">
          Get it Now
        </button>
      </div>
    </div>
  )
}

export default CourseCard