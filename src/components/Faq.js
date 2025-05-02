import React, { useState } from 'react'

const faqs = [
  {
    number: "01",
    question: "Why should I choose Humestic?",
    answer:
      "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let’s put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you’re not hurting you’re not winning loop back.",
  },
  {
    number: "02",
    question: "I like your works, how do we start a project?",
    answer: "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let’s put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you’re not hurting you’re not winning loop back.",
  },
  {
    number: "03",
    question: "What info is required to get a quotation?",
    answer: "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let’s put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you’re not hurting you’re not winning loop back.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Set default to open first FAQ

  const toggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 mt-20">
      {/* Header */}
      <div className="grid md:grid-cols-3 mb-20 ">
        <div className="text:lg md:text-2xl font-faq text-[#001C4A] font-normal uppercase tracking-wide">
          Frequently asked <br /> questions
        </div>
        <div className="md:col-span-2">
          <h2 className="text-2xl md:text-5xl font-normal font-faq text-[#111111]">
            Constant collaboration is how we roll. Let’s see if we are a good fit.
          </h2>
        </div>
      </div>

      {/* FAQ Items */}
      <div className="space-y-6 border-b divide-y">
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              className="py-6 cursor-pointer"
              onClick={() => toggle(index)}
            >
              {/* Question Row: number + question + icon */}
              <div className="flex justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-[#8B7D4C] text-[32px] font-faq">
                    {faq.number}
                  </span>
                  <div>
                    <h3 className="text-lg md:text-[40px] font-faq font-normal text-[#111111]">
                      {faq.question}
                    </h3>

                    {isActive && (
                      <div className="mt-4 w-11/12">
                        <p className="text-[#636363] text-xs md:text-[16px] font-faq font-light">
                          {faq.answer}
                        </p>
                      </div>
                    )}</div>
                </div>
                <div className="flex items-center text-xl sm:text-4xl text-[#111111] select-none">
                  {isActive ? '−' : '+'}
                </div>
              </div>


            </div>
          );
        })}
      </div>





    </div >
  )
}

export default Faq