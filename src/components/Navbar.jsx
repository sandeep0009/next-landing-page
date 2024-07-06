import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

const links = [
  {
    name: "Home",
    path: '/'
  },
  {
    name: 'Features',
    path: '/features'
  },
  {
    name: "Community",
    path: '/community'
  },
  {
    name: 'Blogs',
    path: '/blogs'
  },
  {
    name: 'Pricing',
    path: '/prices'
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

        <div className="hidden lg:flex items-center">
          <ul className="flex px-4">
            {links.map((link) => (
              <li key={link.path}>
                <Link className="px-4" href={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <Button className='bg-green-500'>Register Now <ArrowRight /></Button>
        </div>

        <div className="flex lg:hidden items-center">
          <button className="mobile-menu-button">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

   
      <div className="mobile-menu hidden lg:hidden">
        <ul className="flex flex-col items-center">
          {links.map((link) => (
            <li key={link.path} className="py-2">
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-4">
          <Button className='bg-green-500'>Register Now <ArrowRight /></Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
