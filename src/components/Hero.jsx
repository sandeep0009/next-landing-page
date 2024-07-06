import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <div className="container">
      <div className="container">
        <div className="container grid lg:grid-cols-2 grid-cols-1 gap-4 justify-between items-center bg-[#F5F7FA] h-auto lg:h-[416.95px] p-4">
          <div className="container lg:h-[192.9px] lg:w-[457.32px]">
            <h4 className="text-2xl lg:text-4xl text-[#4D4D4D]">
              Lessons and insights <br />
              <span className="space-y-4 text-[#43A046]">from 8 years</span>
            </h4>
            <p style={{ fontSize: '11.11px' }} className="mt-2">
              Where to grow your business as a photographer: site or social media?
            </p>
            <Button className='bg-green-500 mt-3'>Register</Button>
          </div>
          <div className="container flex justify-center lg:justify-end">
            <Image
              src="/images/1.png"
              alt="Hero Image"
              width={272.16}
              height={283.3}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
