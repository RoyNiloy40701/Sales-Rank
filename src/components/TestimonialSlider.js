import React, { useState } from 'react'
const testimonials = [
  {
    quote:
      "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.",
    name: "Michael Kaizer",
    role: "CEO of Basecamp Corp",
  },
  {
    quote:
      "Working with them has been a game changer. Their insights into user behavior and market trends are spot-on.",
    name: "Sarah Jennings",
    role: "Head of Marketing, Orbit Inc",
  },
  {
    quote:
      "From strategy to execution, they deliver beyond expectations. We saw results within weeks.",
    name: "David Liu",
    role: "COO, SmartEdge Solutions",
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16  bg-[radial-gradient(circle,_#fcf2f8,_#ffffff)]">
      <div className="relative  p-8 ">
        {/* Testimonial Text */}
        <p className="text-lg sm:text-2xl md:text-4xl  font-semibold text-[#010205] leading-relaxed mb-6 min-h-[160px] transition-all duration-300">
          “ {testimonials[current].quote} ”
        </p>

        <div className='flex flex-col sm:flex-row justify-between items-center'>
          {/* Profile Info */}
          <div className="flex items-center gap-5 mb-6 mt-7">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div>
              <p className="font-bold text-lg sm:text-xl text-[#010205]">{testimonials[current].name}</p>
              <p className="text-[#878C91] text-xs font-medium sm:text-base">{testimonials[current].role}</p>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 py-4 px-8 rounded-full border border-[#00245F] flex items-center justify-center hover:bg-gray-100 transition"
            >
              ←
            </button>
            <span className="text-sm md:text-xl font-semibold text-[#01020566]">
              <span className="font-semibold text-sm md:text-xl text-[#00245F]">
                {(current + 1).toString().padStart(2, '0')}
              </span>
              /{testimonials.length.toString().padStart(2, '0')}
            </span>
            <button
              onClick={handleNext}
              className="w-10 h-10 py-4 px-8 rounded-full bg-[#00245F] text-white flex items-center justify-center hover:bg-[#103570] transition"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialSlider