import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className="bg-[#F5F7FA] py-8">
      <div className="flex flex-wrap justify-around items-center">
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <h1 className="text-2xl md:text-3xl font-bold text-[#4D4D4D]">
            Helping a Local <br />
            <span className="text-[#43A046]">business reinvent itself</span>
          </h1>
          <p className="text-[#717171] mt-2">We reached here with our hard work and dedication</p>
        </div>

        <div className="grid grid-cols-2 gap-8 w-full md:w-auto">
          <div className="members flex items-center justify-center">
            <Image src="/images/12.png" width={16} height={16} />
            <div className="ml-2 text-start">
              <h1 className="font-bold text-[#4D4D4D]">2,23,345</h1>
              <p className="text-[#717171] mt-1 text-xs">members</p>
            </div>
          </div>
          <div className="club flex items-center justify-center">
            <Image src="/images/13.png" width={16} height={16} />
            <div className="ml-2 text-start">
              <h1 className="font-bold text-[#4D4D4D]">46,328</h1>
              <p className="text-[#717171] mt-1 text-xs">clubs</p>
            </div>
          </div>
          <div className="event-booking flex items-center justify-center">
            <Image src="/images/15.png" width={16} height={16} />
            <div className="ml-2 text-start">
              <h1>828,678</h1>
              <p className="text-xs">event booking</p>
            </div>
          </div>
          <div className="payment flex items-center justify-center">
            <Image src="/images/14.png" width={16} height={16} />
            <div className="ml-2 text-start">
              <h1>828,678</h1>
              <p className="text-xs">payment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
