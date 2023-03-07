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
import Comments from "../components/Comments"

const ToggleEditListing = ({ selectedListing, user, setToggleEditing, getListing }) => {

    const navigate = useNavigate()

    let { listingId } = useParams()
    
	const [formValues, setFormValues] = useState({
		name: selectedListing.name,
		price: selectedListing.price,
		soldOut: selectedListing.soldOut,
        image: selectedListing.image,
        userId: user?.id
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
            image: ""
		})
        setToggleEditing(false)
        getListing()
		// navigate("/signin")
	}

    return (
	<>
		<form onSubmit={handleSubmit}>
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
                                <input type="text" name="name" id="name" value={formValues.name} onChange={handleChange}/>
							</h1>

							<div className="mt-3">
								<h2 className="sr-only">Product information</h2>
								<p className="text-3xl tracking-tight text-gray-900">
                                    <input type="text" id="name" value={formValues.price} onChange={handleChange}/>
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


								<div className="sm:flex-col1 mt-10 flex">
									<div className="sm:flex-col1 mt-10 flex-col">
										<button
											type="reset"
											className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-red-600 py-3 px-8 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                                            onClick={() => setToggleEditing(false)}
										>
											Cancel
										</button>
											<button
												type="submit"
												className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-gray-600 py-3 px-8 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full mt-5"
											>
												Submit
											</button>
									</div>

								</div>

							<section
								aria-labelledby="details-heading"
								className="mt-12"
							>
								<h2 id="details-heading" className="sr-only">
									Additional details
								</h2>
							</section>
						</div>
					</div>
				</div>
			</div>
		</form>
		<Comments comments={selectedListing.comments} />
	</>
    )
}
export default ToggleEditListing
