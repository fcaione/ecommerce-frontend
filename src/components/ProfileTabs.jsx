import { Fragment } from 'react'
import { Tab } from '@headlessui/react'
import ListCard from './ListCard'

const ProfileTabs = ({user, listings, getAllListings}) => {

const tabs = [
  {
    name: 'All',
    features: [
      {
        
        content:
        <div className="bg-white">
          <div className="mx-auto max-w-7xl mb-36 overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 lg:gap-x-8">
              {listings.map((listing, index) => {
                if(listing.userId === user.id){
                  return(
                <ListCard key={index} 
                id={listing.id}
                image={listing.image}
                name={listing.name}
                color={listing.color}
                price={listing.price}
                getAllListings={getAllListings}
                sold={listing.soldOut}  
                />)
                }
              })}
            </div>
          </div>
        </div>
        
      },
    ],
  },
  {
    name: 'Selling',
    features: [
      {
        content:
        <div className="bg-white">
          <div className="mx-auto max-w-7xl mb-9 overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 lg:gap-x-8">
              {listings.map((listing, index) => {
                if(listing.userId === user.id && listing.soldOut === false){
                  return(
                <ListCard key={index} 
                id={listing.id}
                image={listing.image}
                name={listing.name}
                color={listing.color}
                price={listing.price}
                getAllListings={getAllListings}  
                />)
                }
              })}
            </div>
          </div>
        </div>
      },
    ],
  },
  {
    name: 'Sold',
    features: [
      {
        content:
        <div className="bg-white">
        <div className="mx-auto max-w-7xl mb-9 overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 lg:gap-x-8">
            {listings.map((listing, index) => {
              if(listing.userId === user.id && listing.soldOut === true){
                return(
              <ListCard key={index} 
              id={listing.id}
              image={listing.image}
              name={listing.name}
              color={listing.color}
              price={listing.price}
              getAllListings={getAllListings}
              sold={true} 
              />)
              }
            })}
          </div>
        </div>
      </div>
      },
    ],
  },
  // {
  //   name: 'Saved',
  //   features: [
  //     {
  //       name: "Everything you'll need",
  //       content:
  //         'Saved feature coming soon! Be ready to bookmark your favorite listings to browse at another time',
  //       imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-04.jpg',
  //       imageAlt: 'Walnut organizer system on black leather desk mat on top of white desk.',
  //     },
  //   ],
  // },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


  return (
    <div className="bg-white">
      <section aria-labelledby="features-heading" className="mx-auto max-w-7xl sm:px-2 lg:px-8">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
          <div className="max-w-3xl">
          
          </div>

          <Tab.Group as="div" className="mt-4">
            <div className="-mx-4 flex overflow-x-auto sm:mx-0">
              <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
                <Tab.List className="-mb-px flex space-x-10">
                  {tabs.map((tab) => (
                    <Tab
                      key={tab.name}
                      className={({ selected }) =>
                        classNames(
                          selected
                            ? 'border-red-500 text-red-600'
                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                          'whitespace-nowrap border-b-2 py-6 text-sm font-medium'
                        )
                      }
                    >
                      {tab.name}
                    </Tab>
                  ))}
                </Tab.List>
              </div>
            </div>

            <Tab.Panels as={Fragment}>
              {tabs.map((tab) => (
                <Tab.Panel key={tab.name} className="space-y-16 pt-10">
                  {tab.features.map((feature) => (
                    <div key={feature.name} className="flex flex-col-reverse lg:grid  lg:gap-x-8">
                      <div className="mt-6 lg:col-span-5 lg:mt-0">
                        {feature.content}
                      </div>
                    </div>
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  )
}

export default ProfileTabs