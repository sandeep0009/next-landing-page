import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Message = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-around gap-4">
        <div className="w-[442px]">
          <Image
            src="/images/16.png"
            width={442}
            height={330}
            alt="Descriptive Alt Text"
          />
        </div>
        <div className="text-start w-[661px] m-auto">
          <h2 className="text-[#4D4D4D] text-3xl">
            The unseen of spending three <br /> years at Pixelgrade
          </h2>
          <p className="text-[#717171] text-xs mt-2 max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed <br /> sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed <br /> porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam <br />quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
          </p>
          <Button className='bg-green-500 mt-2'>Learn More</Button>
        </div>
      </div>
    </div>
  )
}

export default Message
