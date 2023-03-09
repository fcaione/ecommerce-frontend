import ListCard from "../components/ListCard"
import Footer from "../components/Footer"

const Listings = ({ listings, getAllListings }) => {
  
      return listings && (
        <div className="bg-white">
          <div className="mx-auto max-w-7xl overflow-hidden py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
              {listings?.map((listing) => (
                <ListCard 
                id={listing.id}
                image={listing.image}
                name={listing.name}
                color={listing.color}
                price={listing.price}
                userId={listing.userId}
                getAllListings={getAllListings}
                />
              ))}
            </div>
          </div>
          <Footer/>
        </div>
      )
    }
    
export default Listings