import React, { useState } from 'react'

const ChatBox = () => {
  const [message, setMessage] = useState('');

  const suggestionButtons = [
    "How do I handle objections?",
    "Give me a cold email template",
    "Closing techniques",
    "Negotiation tips"
  ];

  return (
    <div className="bg-gray-200  rounded-lg shadow-lg  flex flex-col overflow-hidden border    md:w-3/5 ">
      <div className="border-t bg-white">
        <p className="text-md font-bold p-4"> AI Sales Coach</p>
      </div>
      <div className="flex-1 p-4 overflow-y-auto ">
        <div className="flex items-start mb-6">
          <div className="w-8 h-8 rounded-full bg-gray-400 mr-3 flex-shrink-0"></div>
          <div>
            <p className="text-gray-800  bg-white shadow-md py-2 px-4 rounded-lg">
              Hello! I'm your AI sales coach. How can I help you improve your sales performance today?
            </p>
          </div>
        </div>
      </div>

      <div className="border-t bg-white ">
        <div className="flex flex-wrap gap-2 p-4 bg-gray-50">
          {suggestionButtons.map((text, index) => (
            <button
              key={index}
              className="px-2 py-1 rounded-full text-xs md:text-sm bg-blue-100 text-blue-800 hover:bg-blue-200"
            >
              {text}
            </button>
          ))}
        </div>

        <div className="flex p-4 gap-3">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask anything you need"
            className="flex-1  outline-none text-sm border rounded-lg px-4 py-3 "
          />
          <button className="bg-blue-900 text-white p-3 rounded-lg  ml-2 flex items-center">
            <span className=" md:inline mr-2">Send</span>
            {/* Simple send arrow icon with pure SVG */}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>

          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatBox