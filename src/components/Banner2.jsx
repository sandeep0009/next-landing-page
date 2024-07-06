import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

const Banner2 = () => {
  return (
    <div className="container m-auto text-center flex flex-wrap justify-center">
      <div className="heading">
        <h2 className="text-4xl font-bold mt-20">Pellentesque suscipit  <br />fringilla libero eu.</h2>
        <Button className="bg-green-500 mt-7">Get a Demo <ArrowRight/></Button>

      </div>

    </div>
  )
}

export default Banner2