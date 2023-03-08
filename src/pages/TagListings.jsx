import ListCard from "../components/ListCard"
import Footer from "../components/Footer"
import { useState, useEffect } from "react"
import Client from "../services/api"
import { useParams } from "react-router-dom"


const TagListings = () => {
  const [tagListings, setTagListings] = useState([])

  let { tagName } = useParams()

  const getTagListings = async () => {
    const res = await Client.get(`/tags/${tagName}`)
    setTagListings(res.data)
  }

  useEffect(() => {
    getTagListings()
  },[])
  
      return tagListings && (
        <div className="bg-white">
          <div className="mx-auto max-w-7xl overflow-hidden py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
              {tagListings.map((listing) => (
                <ListCard 
                id={listing.listingsTags.id}
                image={listing.listingsTags.image}
                name={listing.listingsTags.name}
                color={listing.listingsTags.color}
                price={listing.listingsTags.price}
                userId={listing.listingsTags.userId}
                />
              ))}
            </div>
          </div>
          <Footer/>
        </div>
      )
    }
    
export default TagListings