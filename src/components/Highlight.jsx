import posingshoes from '../images/posingshoes.webp'
import { Link } from 'react-router-dom'
const Highlight = () => {

  return (
        <section aria-labelledby="comfort-heading" className="mx-auto max-w-7xl pb-24 pt-10 px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute inset-0">
              <img
                src={posingshoes}
                alt=""
                className="h-full w-full object-cover object-bottom"
              />
            </div>
            <div className="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
              <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                <h2 id="comfort-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Reuseability
                </h2>
                <p className="mt-3 text-xl text-white">
                Passed down fashion holds significant cultural and historical value as it tells the story of previous generations and their unique styles. By embracing and preserving these pieces, we not only honor our past but also contribute to a sustainable and environmentally conscious future.
                </p>
                {/* <Link
                  href="#"
                  className="mt-8 block w-full rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                >
                  Shop Focus
                </Link> */}
              </div>
            </div>
          </div>
        </section>
  )
}

export default Highlight
