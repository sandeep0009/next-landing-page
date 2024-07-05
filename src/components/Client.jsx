import React from 'react'
import Image from 'next/image'
import { CompanyImage } from '@/utils/CompanyImage'
import { community } from '@/utils/community'

const Client = () => {
  return (
    <div className="container">
    <div className="container">
      <div className="container mt-4">
        <div className="container text-center">
          <h4 className="text-3xl text-[#4D4D4D] mt-4">Our Clients</h4>
          <p className="text-[#717171] mt-3">We have been working with some Fortune 500+ clients</p>
        </div>
        <div className="flex flex-wrap gap-28 mt-5 cursor-pointer">
          {CompanyImage.map((img) => (
            <div className="text-center" key={img.name}>
              <Image
                src={img.src}
                alt={img.name}
                width={38.28}
                height={20.88}
                className="object-contain"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-7">
          <h4 className="text-2xl mt-8 text-[#4D4D4D]">Manage your entire community <br /> in a single system</h4>
          <p className="text-xs text-[#717171] mt-3">Who is Nextcent suitable for?</p>
        </div>

        <div className="flex flex-wrap justify-center mt-10">
          {community.map((communities) => (
            <div key={communities.src} className="text-center max-w-xs">
              <Image
                src={communities.src}
                alt={communities.heading}
                width={41.7}
                height={30.7}
                className="mx-auto"
              />
              <h5 className="font-bold mt-2">{communities.heading}</h5>
              <p className="mt-1 text-sm text-[#717171]">{communities.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Client
