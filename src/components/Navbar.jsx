import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

const links=[
    {
        name:"Home",
        path:'/'
    },
    {
        name:'Features',
        path:'/features'
    },
    {
        name:"Community",
        path:'/community'
    },
    {
        name:'Blogs',
        path:'/blogs'
    },
    {
        name:'Pricing',
        path:'/prices'
    }
]
const Navbar = () => {
  return (
    <div className="container">
        <div className="container flex justify-between py-4">
            <div className="container">
                <div className="heading">
                    <h2 className="font-bold">NexCent</h2>
                </div>

            </div>

            <div className=" hidden lg:flex items-center">
               
                <ul className="flex px-4">
            {links.map((link) => (
              <li key={link.path}>
                <Link className="px-4" href={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
               
          <Button className='bg-green-500'>Register Now <ArrowRight/></Button>
            </div>

        </div>
    </div>
  )
}

export default Navbar