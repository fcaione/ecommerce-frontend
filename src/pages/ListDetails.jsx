import { useState, useEffect } from "react"
import { Disclosure, RadioGroup, Tab } from "@headlessui/react"
import { StarIcon } from "@heroicons/react/20/solid"
import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline"
import Client from "../services/api"
import { useParams } from "react-router-dom"
import Comments from "../components/Comments"

const ListDetails = () => {
	function classNames(...classes) {
		return classes.filter(Boolean).join(" ")
	}

	let { listingId } = useParams()

	// const [selectedColor, setSelectedColor] = useState(product.colors[0])

	const [selectedListing, setSelectedListing] = useState({})

	const getListing = async () => {
		const res = await Client.get(`/listings/${listingId}`)
		console.log(res)
		setSelectedListing(res.data)
	}

	useEffect(() => {
		getListing()
	}, [])

	return (
		<>
			<div className="bg-white">
				<div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
					<div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
						{/* Image gallery */}
						<div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
							<img
								src={selectedListing.image}
								alt="picture of product"
								className="h-full w-full object-cover object-center"
							/>
						</div>

						{/* Product info */}
						<div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
							<h1 className="text-3xl font-bold tracking-tight text-gray-900">
								{selectedListing.name}
							</h1>

							<div className="mt-3">
								<h2 className="sr-only">Product information</h2>
								<p className="text-3xl tracking-tight text-gray-900">
									${selectedListing.price}
								</p>
							</div>

							{/* Reviews */}
							<div className="mt-3">
								<h3 className="sr-only">Reviews</h3>
								<div className="flex items-center">
									<div className="flex items-center">
										{[0, 1, 2, 3, 4].map((rating) => (
											<StarIcon
												key={rating}
												className={classNames(
													selectedListing.rating >
														rating
														? "text-indigo-500"
														: "text-gray-300",
													"h-5 w-5 flex-shrink-0"
												)}
												aria-hidden="true"
											/>
										))}
									</div>
									<p className="sr-only">
										{selectedListing.rating} out of 5 stars
									</p>
								</div>
							</div>

							<div className="mt-6">
								<h3 className="sr-only">Description</h3>

								<div
									className="space-y-6 text-base text-gray-700"
									dangerouslySetInnerHTML={{
										__html: selectedListing.description,
									}}
								/>
							</div>

							<form className="mt-6">
								{/* Colors */}
								{/* <div>
                <h3 className="text-sm text-gray-600">Color</h3>
              </div> */}

								<div className="sm:flex-col1 mt-10 flex">
									<button
										type="submit"
										className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
									>
										Add to bag
									</button>

									<button
										type="button"
										className="ml-4 flex items-center justify-center rounded-md py-3 px-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
									>
										<HeartIcon
											className="h-6 w-6 flex-shrink-0"
											aria-hidden="true"
										/>
										<span className="sr-only">
											Add to favorites
										</span>
									</button>
								</div>
							</form>

							<section
								aria-labelledby="details-heading"
								className="mt-12"
							>
								<h2 id="details-heading" className="sr-only">
									Additional details
								</h2>

								{/* <div className="divide-y divide-gray-200 border-t">
                {selectedListing.details.map((detail) => (
                  <Disclosure as="div" key={detail.name}>
                    {({ open }) => (
                      <>
                        <h3>
                          <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                            <span
                              className={classNames(open ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-medium')}
                            >
                              {detail.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel as="div" className="prose prose-sm pb-6">
                          <ul role="list">
                            {detail.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </div> */}
							</section>
						</div>
					</div>
				</div>
			</div>
			<Comments comments={selectedListing.comments}/>
		</>
	)
}
export default ListDetails
