import React from 'react'
import CourseCard from './card/CourseCard'
import ImgCard1 from '../assets/cardIMG1.png';
import ImgCard2 from '../assets/cardImg2.png';

const Courses = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 ">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 items-center gap-6">
          {/* Text content */}
          <div className="md:col-span-4">
            <h1 className="sm:text-5xl text-3xl font-semibold text-[#262626] mb-4">Our Courses</h1>
            <p className="text-lg font-normal text-[#59595A]">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et.
              Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>

          {/* Button */}
          <div className="flex justify-start md:justify-end items-start md:items-end h-full">
            <button className="bg-[#002868] text-white px-6 py-[18px] rounded-lg text-lg font-medium">
              View All
            </button>
          </div>

        </div>

        <div className="flex flex-col md:flex-row gap-12 mt-12">
          <CourseCard img={ImgCard1} />
          <CourseCard img={ImgCard2} />
        </div>
      </div>
    </div>

  )
}

export default Courses