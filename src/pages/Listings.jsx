const Listings = ({ listings }) => {
    
      return (
        <div className="bg-white">
          <div className="mx-auto max-w-7xl overflow-hidden py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
              {listings.map((listing) => (
                <a key={listing.id} href={listing.href} className="group text-sm">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                    <img
                      src="https://media-photos.depop.com/b1/8603949/1459213852_14ecfa9f104e46a995f732c5bdcfcc0a/P0.jpg"
                      alt="picture of product"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-4 font-medium text-gray-900">{listing.name}</h3>
                  <p className="italic text-gray-500">{listing.availability}</p>
                  <p className="mt-2 font-medium text-gray-900">{listing.price}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      )
    }
export default Listings