import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import homeIcon from "../images/online-shopping.png"
import { useNavigate, Link } from 'react-router-dom'




const Header = ({ user, setUser }) => {
  
  const navigate = useNavigate()

  const navigation = {
    categories: [
      {
        name: 'Women',
        featured: [
          {
            name: 'Show All',
            href: '/listings/tag/Women-All-Categories',
            imageSrc: 'https://cdn.discordapp.com/attachments/1062764461024358555/1082395659119894568/6dd6d5905823f4f2e4eb7b7596e136d1.png',
            imageAlt: 'All Listings',
          },
          {
            name: 'Tops',
            href: '/listings/tag/Women-Tops',
            imageSrc: 'https://cdn.discordapp.com/attachments/1062764461024358555/1082394142707036233/Strong-Muscle-Graphic-Men-Tshirt-Hip-Hop-Black-Shirts-Men-Streetwear-Summer-Graphic-Tees-Man-Punk.png',
            imageAlt: 'Women Tops',
          },
          {
            name: 'Bottoms',
            href: '/listings/tag/Women-Bottoms',
            imageSrc: 'https://cdn.discordapp.com/attachments/1062764461024358555/1082390839159947274/wmnpants.jpg',
            imageAlt: 'Women Bottoms',
          },
          {
            name: 'Shoes',
            href: '/listings/tag/Women-Shoes',
            imageSrc: 'https://cdn.discordapp.com/attachments/1062764461024358555/1082396339545051237/best-new-balance-sneakwea-for-women.png',
            imageAlt: 'Women Shoes',
          },
        ],
      },
      {
        name: 'Men',
        featured: [
          {
            name: 'Show All',
            href: '/listings/tag/Men-All-Categories',
            imageSrc: 'https://cdn.discordapp.com/attachments/1062764461024358555/1082396593086533765/images.png',
            imageAlt: 'All Listings',
          },
          {
            name: 'Tops',
            href: '/listings/tag/Men-Tops',
            imageSrc: 'https://cdn.discordapp.com/attachments/1062764461024358555/1082394037077680260/Illest-Legend-Tan-T-Shirt-_365430-front-US.png',
            imageAlt: 'Men Tops',
          },
          {
            name: 'Bottoms',
            href: '/listings/tag/Men-Bottoms',
            imageSrc: 'https://cdn.discordapp.com/attachments/1062764461024358555/1082393822836834384/163005271711882ebe92cd4e130a6c1da38f6c41e4_thumbnail_600x.png',
            imageAlt: 'Men Bottoms',
          },
          {
            name: 'Shoes',
            href: '/listings/tag/Men-Shoes',
            imageSrc: 'https://cdn.discordapp.com/attachments/1062764461024358555/1082397342541561966/nike-dunk-low-aged-2.png',
            imageAlt: 'Men Shoes',
          },
        ],
      },
      {
        name: 'Style',
        featured: [
          {
            name: 'Show All',
            href: '/listings/tag/Accessories',
            imageSrc: 'https://cdn.discordapp.com/attachments/1062764461024358555/1082399420164882442/golden-watch.png',
            imageAlt: 'All Listings',
          },
          {
            name: 'Bracelets',
            href: '/listings/tag/Bracelets',
            imageSrc: 'https://cdn.discordapp.com/attachments/1062764461024358555/1082397880997920909/1651604269-cartier-1651604262.png',
            imageAlt: 'Bracelets',
          },
          {
            name: 'Earrings',
            href: '/listings/tag/Earrings',
            imageSrc: 'https://cdn.discordapp.com/attachments/1062764461024358555/1082399160034144316/2Q.png',
            imageAlt: 'Earrings',
          },
          {
            name: 'Rings',
            href: '/listings/tag/Rings',
            imageSrc: 'https://cdn.discordapp.com/attachments/1062764461024358555/1082398115258187828/GUEST_89aed79b-2d4e-4ce9-9b47-b27dc3ec681c.png',
            imageAlt: 'Rings',
          },
        ],
      },
      {
        name: 'More',
        featured: [
          {
            name: 'Show All',
            href: '/listings/tag/Misc',
            imageSrc: 'https://cdn.discordapp.com/attachments/1062764461024358555/1082401201221546096/5-3.png',
            imageAlt: 'All Listings',
          },
          {
            name: 'Home',
            href: '/listings/tag/Home',
            imageSrc: 'https://cdn.discordapp.com/attachments/1062764461024358555/1082399892086984734/il_794xN.png',
            imageAlt: 'Home Products',
          },
          {
            name: 'Art',
            href: '/listings/tag/Art',
            imageSrc: 'https://cdn.discordapp.com/attachments/1062764461024358555/1082399768438902914/s-l1600.png',
            imageAlt: 'Art Products',
          },
          {
            name: 'Other',
            href: '/listings/tag/Other',
            imageSrc: 'https://cdn.discordapp.com/attachments/1062764461024358555/1082400246576992276/KAWS-Five-Years-Later-Companion-Figure-Grey.png',
            imageAlt: 'All other things',
          },
        ],
      },
    ],
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }



  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const signOut = () => {
    localStorage.clear()
    setUser(null)
    navigate('/')
  }


  return (
    <>
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                              'flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel key={category.name} className="space-y-12 px-4 py-6">
                        <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                          {category.featured.map((item) => (
                            <div key={item.name} className="group relative">
                              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                              </div>
                              <a href={item.href} className="mt-6 block text-sm font-medium text-gray-900">
                                <span className="absolute inset-0 z-10" aria-hidden="true" />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1 text-sm text-gray-500">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>
                  {/* <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                    <div className="flow-root">
                      <a href="http://localhost:3000/signup" className="-m-2 block p-2 font-medium text-gray-900">
                        Create an account
                      </a>
                    </div>
                    <div className="flow-root">
                      <a href="http://localhost:3000/signin" className="-m-2 block p-2 font-medium text-gray-900">
                        Sign in
                      </a>
                    </div>
                  </div>  */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <header className="relative z-10 bg-slate-800">
        <nav aria-label="Top">
          {/* Top navigation */}
          <div className="bg-gray-900">
            <div className="mx-auto flex h-10 items-center justify-end px-4 sm:px-6 lg:px-8">
          {!user ?
              <div className="flex items-center space-x-6">
                <Link to="/signin" className="text-sm font-medium text-white hover:text-gray-100">
                  Sign in
                </Link>
                <Link to="/signup" className="text-sm font-medium text-white hover:text-gray-100">
                  Create an account
                </Link>
              </div> :
              <div className="flex items-center space-x-6">
              <button onClick={() => {navigate(`profile/${user.id}`)}} className="text-sm font-medium text-white hover:text-gray-100">
                  Profile 
                </button>
              <Link to="/addListingsForm" className="text-sm font-medium text-white hover:text-gray-100">
                  Add Listing
                </Link>
              <button onClick={() => signOut()} className="text-sm font-medium text-white hover:text-gray-100">
                  Sign Out
                </button>
              </div>}
            </div> 

          </div>

          {/* Secondary navigation */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md backdrop-filter">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
              <div>
                <div className="flex h-16 items-center justify-between">
                  {/* Logo (lg+) */}
                  <div className="hidden lg:flex lg:flex-1 lg:items-center">
                    <Link to="/">
                      <span className="sr-only">Ecommerce</span>
                      <img
                        className="h-11 w-auto"
                        src={homeIcon}
                        alt=""
                      />
                    </Link>
                  </div>


                  <div className="hidden h-full lg:flex">
                    {/* Flyout menus */}
                    <Popover.Group className="inset-x-0 bottom-0 px-4">
                      <div className="flex h-full justify-center space-x-8">
                        {navigation.categories.map((category) => (
                          <Popover key={category.name} className="flex">
                            {({ open }) => (
                              <>
                                <div className="relative flex">
                                  <Popover.Button className="relative z-10 flex items-center justify-center text-sm font-medium text-white transition-colors duration-200 ease-out">
                                    {category.name}
                                    <span
                                      className={classNames(
                                        open ? 'bg-white' : '',
                                        'absolute inset-x-0 -bottom-px h-0.5 transition duration-200 ease-out'
                                      )}
                                      aria-hidden="true"
                                    />
                                  </Popover.Button>
                                </div>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="opacity-0"
                                  enterTo="opacity-100"
                                  leave="transition ease-in duration-150"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                                    {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                    <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                                    <div className="relative bg-white">
                                      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                        <div className="grid grid-cols-4 gap-y-10 gap-x-8 py-16">
                                          {category.featured.map((item) => (
                                            <div key={item.name} className="group relative">
                                              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                                <img
                                                  src={item.imageSrc}
                                                  alt={item.imageAlt}
                                                  className="object-cover object-center"
                                                />
                                              </div>
                                              <a href={item.href} className="mt-4 block font-medium text-gray-900">
                                                <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                {item.name}
                                              </a>
                                              <p aria-hidden="true" className="mt-1">
                                                Shop now
                                              </p>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </Popover.Panel>
                                </Transition>
                              </>
                            )}
                          </Popover>
                        ))}
                      </div>
                    </Popover.Group>
                  </div>

                  {/* Mobile menu and search (lg-) */}
                  <div className="flex flex-1 items-center lg:hidden">
                    <button type="button" className="-ml-2 p-2 text-white" onClick={() => setMobileMenuOpen(true)}>
                      <span className="sr-only">Open menu</span>
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Search */}
                    <a href="#" className="ml-2 p-2 text-white">
                      <span className="sr-only">Search</span>
                      <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                    </a>
                  </div>

                  {/* Logo (lg-) */}
                  <a href="http://localhost:3000/" className="lg:hidden">
                    <span className="sr-only">Ecommerce</span>
                    <img src={homeIcon} alt="" className="h-8 w-auto" />
                  </a>

                  <div className="flex flex-1 items-center justify-end">
                    <a href="#" className="hidden text-sm font-medium text-white lg:block">
                      Search
                    </a>

                    <div className="flex items-center lg:ml-8">
                      {/* Help */}
                      <Link to="/about" className="p-2 text-white lg:hidden">
                        <span className="sr-only">About</span>
                        <QuestionMarkCircleIcon className="h-6 w-6" aria-hidden="true" />
                      </Link>
                      <Link to="/about" className="hidden text-sm font-medium text-white lg:block">
                        About
                      </Link>

                      {/* Cart */}
                      <div className="ml-4 flow-root lg:ml-8">
                        <a href="#" className="group -m-2 flex items-center p-2">
                          <ShoppingBagIcon className="h-6 w-6 flex-shrink-0 text-white" aria-hidden="true" />
                          <span className="ml-2 text-sm font-medium text-white">0</span>
                          <span className="sr-only">items in cart, view bag</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
