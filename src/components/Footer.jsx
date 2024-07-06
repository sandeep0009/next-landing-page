import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className="w-full bg-[#263238] text-white mt-10">
      <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 p-8">
        <div className="m-8 w-full lg:w-[350px]">
          <div className="mb-4">
            <h2 className="text-2xl font-bold">NextCent</h2>
          </div>
          <div>
            <p className="py-4 lg:py-10">
              Copyright &#169; 2020 NextCent Ind. <br /> All rights reserved
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Twitter className="border border-[#3f4041] p-1 rounded-full" />
            <Instagram className="border border-[#3f4041] p-1 rounded-full" />
            <Youtube className="border border-[#3f4041] p-1 rounded-full" />
            <Facebook className="border border-[#3f4041] p-1 rounded-full" />
          </div>
        </div>

        <div className="m-8 w-full lg:w-auto">
          <div>
            <h2 className="text-lg font-bold mb-4">Company</h2>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Blog</li>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Testimonials</li>
            </ul>
          </div>
        </div>

        <div className="m-8 w-full lg:w-auto">
          <div>
            <h2 className="text-lg font-bold mb-4">Support</h2>
            <ul className="space-y-2">
              <li>Help Center</li>
              <li>Terms of Service</li>
              <li>Legal</li>
              <li>Privacy</li>
              <li>Status</li>
            </ul>
          </div>
        </div>

        <div className="m-8 w-full lg:w-auto">
          <div>
            <h2 className="text-lg font-bold mb-4">Stay up to Date</h2>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
