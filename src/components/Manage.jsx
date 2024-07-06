import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Manage = () => {
  
  return (
    <div className="container mt-4">
      <div className="flex flex-wrap justify-around ">
        <div>
          <Image
          src="/images/17.png"
          width={441}
          height={433}
          />
        </div>
        <div className="text-start w-[661px] lg:m-auto mt-5 ">
          <h2 className="text-[#4D4D4D] text-3xl">
          How to design your site footer like we did
          </h2>
          <p className="text-[#717171] text-xs mt-2 max-w-full">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
          </p>
          <Button className='bg-green-500 mt-2'>Learn More</Button>
        </div>
      </div>
    </div>
  )
}

export default Manage