import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <div className="container ">
      <div className="container">
        <div className="container grid grid-cols-2 gap-4 justify-between items-center bg-[#F5F7FA] h-[416.95px]">
            <div className="container h-[192.9px] w-[457.32px]">
              <h4 className="text-4xl text-[#4D4D4D]">
                Lessons and insights <br />
                <span className="space-y-4 text-[#43A046]">
                  from 8 years
                </span>
              </h4>
              <p style={{ fontSize: '11.11px' }} className="mt-2">
                Where to grow your business as a photographer: site or social media?
              </p>

              <Button className='bg-green-500 mt-3'>Register</Button>

              
            

            </div>
            <div className="container flex justify-end">
              
                <Image
                src="/images/1.png" 
                alt="Hero Image"
                width={272.16} 
                height={283.3} />
                
            </div>


        </div>
        </div>
    </div>
  )
}

export default Hero