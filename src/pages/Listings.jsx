import ListCard from "../components/ListCard"

const Listings = ({ listings }) => {
      return (
        <div className="bg-white">
          <div className="mx-auto max-w-7xl overflow-hidden py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
              {listings.map((listing) => (
                <ListCard {...listing}/>
              ))}
            </div>
          </div>
        </div>
      )
    }
    
export default Listings