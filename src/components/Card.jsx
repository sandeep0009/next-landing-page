import { CardImage } from '@/utils/carImage'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Card = () => {
  return (
    <div className="container mx-auto px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h4 className="text-2xl md:text-3xl text-[#4D4D4D] mt-4">Caring is the new marketing</h4>
        <p className="text-[#717171] text-xs md:text-sm mt-3 max-w-xl mx-auto">
          The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.
        </p>
      </div>

      <div className="mt-8">
        <div className="flex flex-wrap justify-center gap-8">
          {CardImage.map((card) => (
      <div key={card.src} className="relative w-full md:w-full lg:w-[calc(50%-1rem)] xl:w-[calc(33.33%-1rem)] max-w-[266px]">
              <Image
                src={card.src}
                width={266}
                height={266}
                alt="Card Image"
                className="w-full h-auto"
              />
              <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 rounded-md bg-white text-center z-20 p-4 shadow-lg">
                <h2 className="text-[#717171] text-sm">{card.dec}</h2>
                <p className="text-green-500 flex items-center justify-center mt-2 text-sm">
                  {card.btn} <ArrowRight className="ml-1 w-4 h-4" />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card