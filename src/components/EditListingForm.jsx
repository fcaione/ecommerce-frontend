import { useState } from "react"
import Client from "../services/api"
import { useParams } from "react-router-dom"


const EditListingForm = ({
	selectedListing,
	user,
	setToggleEditing,
	getListing,
	percent,
	handleUpload,
	handleImageChange,
	imageUrl,
}) => {
	

	let { listingId } = useParams()

	const [formValues, setFormValues] = useState({
		name: selectedListing.name,
		price: selectedListing.price,
		soldOut: false,
		image: selectedListing.image,
		description: selectedListing.description,
		userId: user?.id,
	})

	const handleChange = (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		await Client.put(`/listings/${listingId}`, {
			name: formValues.name,
			price: formValues.price,
			soldOut: formValues.soldOut,
			image: imageUrl || selectedListing.image,
			description: formValues.description,
			userId: user?.id,
		})
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
			<div className="flex justify-center border-2 border-black">
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
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
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
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
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
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
										/>
									</div>
									<p className="mt-2 text-sm text-gray-500">
										Please Price the Given Item in USD.
									</p>
								</div>

								<div className="mt-2">
									<label
										htmlFor="soldOut"
										className="block text-md font-medium leading-6 text-gray-900"
									>
										Sold
									</label>
									<select
										id="soldOut"
										name="soldOut"
										onChange={handleChange}
										defaultValue="false"
									>
										<option value="false">In Stock</option>
										<option value="true">Sold Out</option>
									</select>
								</div>

								<div className="sm:col-span-6">
									<label
										htmlFor="image"
										className="block text-md font-medium leading-6 text-gray-900"
									>
										Image Address
									</label>
									{/* {imageupload} */}
									<div className="sm:col-span-6">
										<div className="flex">
											<label
												htmlFor="image"
												className="block text-md font-medium leading-6 text-gray-900 mr-4"
											>
												Upload image
											</label>
											<p>{percent}% done</p>
										</div>
										<div className="mt-2">
											<input
												type="file"
												onChange={handleImageChange}
												accept="/image/*"
											/>
											<button
												className="ml-3 inline-flex justify-center rounded-md bg-[#ED1C24] py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 mt-4"
												onClick={handleUpload}
												type="button"
											>
												Upload image
											</button>
										</div>
									</div>
								</div>

								{/* <div className="sm:col-span-6">
									<Checkbox listing={selectedListing} />
								</div> */}
							</div>
						</div>
					</div>
					<div className="pt-5">
						<div className="flex justify-end mb-2">
							<button
								type="button"
								className="ml-3 inline-flex justify-center rounded-md bg-black py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black-600"
								onClick={() => setToggleEditing(false)}
							>
								Cancel
							</button>
							<button
								type="submit"
								className="ml-3 inline-flex justify-center rounded-md bg-[#ED1C24] py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
							>
								Done
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}
export default EditListingForm
