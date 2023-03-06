import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Category = () => {
  const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']
  const navigation = {
    categories: [
      {
        name: 'Women',
        featured: [
          {
            name: 'New Arrivals',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Basic Tees',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
          {
            name: 'Accessories',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
            imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
          },
          {
            name: 'Carry',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg',
            imageAlt: 'Model opening tan leather long wallet with credit card pockets and cash pouch.',
          },
        ],
      },
      {
        name: 'Men',
        featured: [
          {
            name: 'New Arrivals',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
            imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
          },
          {
            name: 'Basic Tees',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
            imageAlt: 'Model wearing light heather gray t-shirt.',
          },
          {
            name: 'Accessories',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
            imageAlt:
              'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
          },
          {
            name: 'Carry',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
            imageAlt: 'Model putting folded cash into slim card holder olive leather wallet with hand stitching.',
          },
        ],
      },
    ],
    pages: [
      { name: 'Company', href: '#' },
      { name: 'Stores', href: '#' },
    ],
  }
  const categories = [
    {
      name: 'New Arrivals',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg',
    },
    {
      name: 'Productivity',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg',
    },
    {
      name: 'Workspace',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-04.jpg',
    },
    {
      name: 'Accessories',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg',
    },
    { name: 'Sale', href: '#', imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg' },
  ]
  const collections = [
    {
      name: 'Handcrafted Collection',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg',
      imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
      description: 'Keep your phone, keys, and wallet together, so you can lose everything at once.',
    },
    {
      name: 'Organized Desk Collection',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg',
      imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
      description: 'The rest of the house will still be a mess, but your desk will look great.',
    },
    {
      name: 'Focus Collection',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg',
      imageAlt: 'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
      description: 'Be more productive than enterprise project managers with a single piece of paper.',
    },
  ]
  const footerNavigation = {
    shop: [
      { name: 'Bags', href: '#' },
      { name: 'Tees', href: '#' },
      { name: 'Objects', href: '#' },
      { name: 'Home Goods', href: '#' },
      { name: 'Accessories', href: '#' },
    ],
    company: [
      { name: 'Who we are', href: '#' },
      { name: 'Sustainability', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Terms & Conditions', href: '#' },
      { name: 'Privacy', href: '#' },
    ],
    account: [
      { name: 'Manage Account', href: '#' },
      { name: 'Returns & Exchanges', href: '#' },
      { name: 'Redeem a Gift Card', href: '#' },
    ],
    connect: [
      { name: 'Contact Us', href: '#' },
      { name: 'Twitter', href: '#' },
      { name: 'Instagram', href: '#' },
      { name: 'Pinterest', href: '#' },
    ],
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <section aria-labelledby="category-heading" className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
          <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
            <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">
              Shop by Category
            </h2>
            <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>

          <div className="mt-4 flow-root">
            <div className="-my-2">
              <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                <div className="min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                  {categories.map((category) => (
                    <a
                      key={category.name}
                      href={category.href}
                      className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                    >
                      <span aria-hidden="true" className="absolute inset-0">
                        <img src={category.imageSrc} alt="" className="h-full w-full object-cover object-center" />
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                      />
                      <span className="relative mt-auto text-center text-xl font-bold text-white">{category.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 px-4 sm:hidden">
            <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </section>
  )
}

export default Category
