import { CompanyImage } from '@/utils/CompanyImage'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import {  ArrowRight } from 'lucide-react'
const Testimonial = () => {
  return (
    <div className="container px-20 mt-4 ">
      <div className=" flex flex-wrap justify-around">
        <div>
          <Image
          src="/images/18.png"
          width={326}
          height={326}
          
          />
        </div>

        <div className="text w-[661px] lg:m-auto mt-5 ">
          <p className="text-[#717171] text-xs mt-2 max-w-full">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.          
          </p>
          <h6 className="text-green-500 mt-2">Tim Smith</h6>
          <p className="text-[#717171] text-xs mt-2 max-w-full">British Dragon Boat Racing Association</p>
          <div className="flex gap-5 mt-5">
          {
            CompanyImage.map((image)=>(
              <div key={image.src}>
             <Image
             src={image.src}
             width={40}
             height={40}
              />
              </div>
                          

 
            ))
          }
            <Button className="bg-green-500">Meet all customers <ArrowRight/></Button>
        </div>
        </div>
       
      </div>
    </div>
  )
}

export default Testimonial