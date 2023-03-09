import { useState } from 'react'
import { Link } from 'react-router-dom'
import boxGirl from "../images/girl-on-box.png"

const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
      <div className="relative bg-gray-900">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img
            src={boxGirl}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center py-32 px-6 text-center sm:py-64 lg:px-0">
          <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">New Listings are here</h1>
          <p className="mt-4 text-xl text-white">
          Check out our latest listings and discover unique, stylish pieces that are perfect for adding a touch of vintage flair to your wardrobe. Shop now and support sustainable fashion while standing out from the crowd.
          </p>
          <Link
            to="/listings"
            className="mt-8 inline-block rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100"
          >
            Shop New Listings
          </Link>
          
        </div>
        
      </div>
  )
}

export default Hero
