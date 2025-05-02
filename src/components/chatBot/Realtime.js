import React from 'react'

const Realtime = () => {
  return (
    <div className="  flex flex-col gap-6">
      <div className="bg-[#EFEFEF] rounded-lg p-7 w-full">
        <h2 className="text-4xl font-bold text-[#323232] mb-4">Real-time Analysis</h2>

        <div className="mb-6 bg-[#FFFFFF] p-4 gap-3 rounded-lg">
          <div className="flex items-center mb-1">
            <div className="w-4 h-4 rounded-full bg-[#06B217]  flex items-center justify-center mr-2">
              <div className="w-2 h-2 text-white flex items-center justify-center text-xs">✓</div>
            </div>
            <span className="text-lg font-semibold text-[#171D25]">Confidence Level</span>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-2">
            <div className="bg-[#44D618] h-2 rounded-full w-3/5"></div>
          </div>
          <div className="text-right text-sm font-normal text-gray-500">60%</div>
        </div>

        <div className='bg-[#FFFFFF] p-4 gap-3 rounded-lg'>
          <div className="flex items-center mb-1 ">
            <div className="mr-2">
              {/* Chart icon with pure SVG */}
              <svg className="w-4 h-4 text-[#909090]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8V16M12 11V16M8 14V16M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-lg font-semibold text-[#171D25]">Confidence Level</span>
          </div>
          <p className="text-sm text-[#909090]">85% improvement in objection handling</p>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg p-7">
        <h2 className="text-4xl font-bold text-[#323232]  mb-4">Quick Actions</h2>

        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <div className="w-6 h-6 bg-blue-900 text-white rounded flex items-center justify-center mb-2">
              {/* Document icon with pure SVG */}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <span className="text-lg text-[#171D25] font-semibold text-center">Generate Script</span>
          </div>

          <div className="bg-white p-3 gap-2 rounded-lg shadow-sm ">
            <div className="w-6 h-6 bg-blue-900 text-white rounded f mb-2">
              {/* Chat icon with pure SVG */}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
              </svg>
            </div>
            <span className="text-lg text-[#171D25] font-semibold text-center">Practice Pitch</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Realtime