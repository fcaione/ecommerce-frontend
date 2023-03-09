import { Link } from "react-router-dom"
const Category = () => {

  const categories = [
    {
      name: "Women's Tops",
      href: '/listings/tag/Women-Tops',
      imageSrc: 'https://images.squarespace-cdn.com/content/v1/5b438c55e74940da6d9cd433/1541000197297-RBM4UKGHKTZE6KACAY0E/joao-silas-683707-unsplash.jpg',
    },
    {
      name: "Men's Bottoms",
      href: '/listings/tag/Men-Tops',
      imageSrc: 'https://cdn.discordapp.com/attachments/1062764461024358555/1083163613243654205/s-l500.png',
    },
    {
      name: 'Shoes',
      href: '/listings/tag/Men-Shoes',
      imageSrc: 'https://cf.shopee.com.mx/file/sg-11134201-22120-2rrnz4ovqjlvfa_tn',
    },
    {
      name: 'Accesories',
      href: '/listings/tag/Accessories',
      imageSrc: 'https://media.sunglasshut.com/2023/01_Trend_Neutrals/MOBILE/MOBILE_HERO.jpg',
    },
    {
      name: 'Misc',
      href: '#',
      imageSrc: 'https://ae01.alicdn.com/kf/U5872d773acd7491baf054119f27ed60dW/Keep-off-Rug-Keepoff-Classic-Virgil-Abloh-Rugs-Off-White-Pattern-Rug-Rugs-Living-Room-Washable.jpg_Q90.jpg_.webp',
    },
  ]


  return (
    <section aria-labelledby="category-heading" className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
          <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
            <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">
              Popular Categories
            </h2>
          
            {/* <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </a> */}

          </div>

          <div className="mt-4 flow-root">
            <div className="-my-2">
              <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                <div className="min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      to={category.href}
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
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 px-4 sm:hidden">
            {/* <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </a> */}
          </div>
        </section>
  )
}

export default Category
