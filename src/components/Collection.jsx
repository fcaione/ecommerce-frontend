import ListCard from "./ListCard"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Collection = (props) => {
  

    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4  sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Lastest Products</h2>
            <a href="/listings" className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">
              Shop the collection
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
  
          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
            {props.listings.slice(0, 4).map((listing) => (
              <ListCard {...listing} key={listing.id}/>
            ))}
          </div>
  
          <div className="mt-8 text-sm md:hidden">
            <a href="/listings" className="font-medium text-indigo-600 hover:text-indigo-500">
              Shop the collection
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
  
export default Collection