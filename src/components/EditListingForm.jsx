import { useState, useEffect } from "react"
import { Disclosure, RadioGroup, Tab } from "@headlessui/react"
import { StarIcon } from "@heroicons/react/20/solid"
import {
	HeartIcon,
	MinusIcon,
	PlusIcon,
	TrashIcon,
} from "@heroicons/react/24/outline"
import Client from "../services/api"
import { useParams, useNavigate } from "react-router-dom"
import Comments from "./Comments"
import Checkbox from "./Checkbox"

const EditListingForm = ({
	selectedListing,
	user,
	setToggleEditing,
	getListing,
}) => {
	const navigate = useNavigate()

	let { listingId } = useParams()

	const [formValues, setFormValues] = useState({
		name: selectedListing.name,
		price: selectedListing.price,
		soldOut: selectedListing.soldOut,
		image: selectedListing.image,
		description: selectedListing.description,
		userId: user?.id,
	})

	const handleChange = (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		await Client.put(`/listings/${listingId}`, formValues)
		setFormValues({
			name: "",
			price: "",
			soldOut: "",
			description: "",
			image: "",
		})
		setToggleEditing(false)
		getListing()
	}
	return (
		<div>
			<div className="flex justify-center">
				<form
					className="space-y-14 divide-y divide-gray-200 w-1/2"
					onSubmit={handleSubmit}
				>
					<div className="space-y-8 divide-y divide-gray-200">
						<div className="py-14">
							<div>
								<h3 className="text-4xl mb-5 font-semibold leading-6 text-gray-900">
									Edit your listing
								</h3>
								<p className="mt-1 text-sm text-gray-500">
									Fill out the information about your item.
								</p>
							</div>

							<div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
								<div className="sm:col-span-3">
									<label
										htmlFor="name"
										className="block text-md font-medium leading-6 text-gray-900"
									>
										Name
									</label>
									<div className="mt-2">
										<input
											type="text"
											value={formValues.name}
											name="name"
											id="name"
											required
											autoComplete="given-name"
											onChange={handleChange}
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>

								<div className="sm:col-span-6">
									<label
										htmlFor="description"
										className="block text-md font-medium leading-6 text-gray-900"
									>
										Description
									</label>
									<div className="mt-2">
										<textarea
											name="description"
											value={formValues.description}
											id="description"
											required
											onChange={handleChange}
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
									<p className="mt-2 text-sm text-gray-500">
										Please Describe the Given Item.
									</p>
								</div>

								<div className="sm:col-span-6">
									<label
										htmlFor="price"
										className="block text-md font-medium leading-6 text-gray-900"
									>
										Price
									</label>
									<div className="mt-2">
										<input
											type="number"
											value={formValues.price}
											step="1"
											min="0"
											name="price"
											id="price"
											required
											onChange={handleChange}
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
									<p className="mt-2 text-sm text-gray-500">
										Please Price the Given Item in USD.
									</p>
								</div>

								<div className="sm:col-span-6">
									<label
										htmlFor="image"
										className="block text-md font-medium leading-6 text-gray-900"
									>
										Image Address
									</label>
									<div className="mt-2">
										<input
											type="text"
											value={formValues.image}
											name="image"
											id="image"
											required
											onChange={handleChange}
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>

								{/* <div className="sm:col-span-6">
									<Checkbox listing={selectedListing} />
								</div> */}
							</div>
						</div>
					</div>
					<div className="pt-5">
						<div className="flex justify-end mb-40">
							
						<button
								type="button"
								className="ml-3 inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								onClick={() => setToggleEditing(false)}
							>
								Cancel
							</button>
							<button
								type="submit"
								className="ml-3 inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Done
							</button>

						</div>
					</div>
				</form>
			</div>
		</div>
	)

	// return (
	// 	<>
	// 		<form onSubmit={handleSubmit}>
	// 			<div className="bg-white">
	// 				<div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
	// 					<div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
	// 						{/* Image gallery */}
	// 						<div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
	// 							<img
	// 								src={selectedListing.image}
	// 								alt="picture of product"
	// 								className="h-full w-full object-cover object-center"
	// 							/>
	// 						</div>

	// 						{/* Product info */}
	// 						<div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
	// 							<h1 className="text-3xl font-bold tracking-tight text-gray-900">
	// 								<input
	// 									type="text"
	// 									name="name"
	// 									id="name"
	// 									value={formValues.name}
	// 									onChange={handleChange}
	// 								/>
	// 							</h1>

	// 							<div className="mt-3">
	// 								<h2 className="sr-only">
	// 									Product information
	// 								</h2>
	// 								<p className="text-3xl tracking-tight text-gray-900">
	// 									<input
	// 										type="text"
	// 										name="price"
	// 										id="price"
	// 										value={formValues.price}
	// 										onChange={handleChange}
	// 									/>
	// 								</p>
	// 							</div>

	// 							<div className="mt-6">
	// 								<h3 className="sr-only">Description</h3>
	// 								<input
	// 									type="text"
	// 									name="description"
	// 									id="description"
	// 									value={formValues.description}
	// 									onChange={handleChange}
	// 								/>
	// 								<div className="space-y-6 text-base text-gray-700" />
	// 							</div>

	// 							<div className="sm:flex-col1 mt-10 flex">
	// 								<div className="sm:flex-col1 mt-10 flex-col">
	// 									<button
	// 										type="reset"
	// 										className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-red-600 py-3 px-8 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
	// 										onClick={() =>
	// 											setToggleEditing(false)
	// 										}
	// 									>
	// 										Cancel
	// 									</button>
	// 									<button
	// 										type="submit"
	// 										className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-gray-600 py-3 px-8 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full mt-5"
	// 									>
	// 										Submit
	// 									</button>
	// 								</div>
	// 							</div>

	// 							<section
	// 								aria-labelledby="details-heading"
	// 								className="mt-12"
	// 							>
	// 								<h2
	// 									id="details-heading"
	// 									className="sr-only"
	// 								>
	// 									Additional details
	// 								</h2>
	// 							</section>
	// 						</div>
	// 					</div>
	// 				</div>
	// 			</div>
	// 		</form>
	// 		<Comments comments={selectedListing.comments} user={user} />
	// 	</>
	// )
}
export default EditListingForm
