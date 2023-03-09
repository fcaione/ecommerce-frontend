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
import { useParams } from "react-router-dom"
import Comments from "../components/Comments"
import EditListingForm from "../components/EditListingForm"
import { Link, useNavigate } from "react-router-dom"

const ListDetails = ({ user, getAllListings }) => {
	function classNames(...classes) {
		return classes.filter(Boolean).join(" ")
	}

	let { listingId } = useParams()

	let navigate = useNavigate()

	const [selectedListing, setSelectedListing] = useState({})
	const [toggleEditing, setToggleEditing] = useState(false)

	const getListing = async () => {
		const res = await Client.get(`/listings/${listingId}`)
		console.log(res.data)
		setSelectedListing(res.data)
	}

	useEffect(() => {
		getListing()
	}, [])

	const deleteListing = async () => {
		const res = await Client.delete(`/listings/${listingId}`)
		getAllListings()
		navigate("/listings")
	}

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
							{!toggleEditing && (
								<>
									<h1 className="text-3xl font-bold tracking-tight text-gray-900">
										{selectedListing.name}
									</h1>
									<div className="mt-3">
										<h2 className="sr-only">
											Product information
										</h2>
										<p className="text-3xl tracking-tight text-gray-900">
											${selectedListing.price}
										</p>
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
								</>
							)}

							{/* {profile link} */}
							<Link to={`/profile/${selectedListing.owner?.id}`}>
								<div className="flex mt-6">
									<div className="mr-4 flex-shrink-0 self-center">
										<img
											className="h-16 w-16 border border-gray-300 bg-white text-gray-300 rounded-full object-cover"
											src={
												selectedListing.owner
													?.profileImage
											}
										/>
									</div>
									<div>
										<h4 className="text-lg font-bold">
											{selectedListing.owner?.name}
										</h4>
										<p className="mt-1">
											Click here to go to{" "}
											{selectedListing.owner?.name}'s
											profile
										</p>
									</div>
								</div>
							</Link>

							{toggleEditing && (
								<EditListingForm
									selectedListing={selectedListing}
									user={user}
									setToggleEditing={setToggleEditing}
									getListing={getListing}
								/>
							)}

							{/* {buttons} */}
							<form className="mt-6">
								<div className="sm:flex-col1 mt-10 flex">
									<div className="sm:flex-col1 mt-10 flex-col">
										{user?.id !==
											selectedListing.owner?.id &&
											selectedListing.soldOut ===
												false && (
												<button
													type="button"
													className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
												>
													Add to bag
												</button>
											)}
										{user?.id !==
											selectedListing.owner?.id &&
											selectedListing.soldOut ===
												true && (
												<button
													type="button"
													className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-red-600 py-3 px-8 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
												>
													SOLD OUT
												</button>
											)}

										{user?.id ===
											selectedListing.owner?.id && !toggleEditing && (
											<button
												type="submit"
												className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-gray-600 py-3 px-8 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full mt-5"
												onClick={(e) =>{
													e.preventDefault()
													setToggleEditing(true)
												}
												}
											>
												Edit Listing
											</button>
										)}
									</div>

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
									{user?.id === selectedListing.owner?.id && (
										<button
											type="button"
											className="ml-4 flex items-center justify-center rounded-md py-3 px-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
											onClick={deleteListing}
										>
											<TrashIcon
												className="h-6 w-6 flex-shrink-0"
												aria-hidden="true"
											/>
											<span className="sr-only">
												Add to favorites
											</span>
										</button>
									)}
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<Comments
				comments={selectedListing.comments}
				user={user}
				getListing={getListing}
			/>
		</>
	)
}
export default ListDetails
