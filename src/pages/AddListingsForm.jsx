import Footer from "../components/Footer"
import { useState } from "react"
import Client from "../services/api"
import { useNavigate } from "react-router-dom"
import Checkbox from "../components/Checkbox"

const AddListingsForm = ({ user, getAllListings, file, handleChange, handleUpload, percent, imageUrl }) => {

  const navigate = useNavigate()

  const [listing, setListing] = useState({})
  const [nextStep, setNextStep] = useState(false)
  const [formValues, setFormValues] = useState({
    name: '',
    price: '',
    image: '',
    description: '',
    userId: ''
  })

  const handleFormChange = (e) => {
    setFormValues({
      ...formValues, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (percent === 100) {
    const res = await Client.post(`/listings/${user.id}`, {
      name: formValues.name,
      price: formValues.price,
      image: imageUrl,
      description: formValues.description,
      userId: user.id
    })
    if (res.status === 200) {
      setNextStep(true)
      setListing(res.data)
    }
    }
  }

  console.log("FORM", formValues)

  return (
    <div>
      <div className="flex justify-center">
        <form className="space-y-14 divide-y divide-gray-200 w-1/2" onSubmit={handleSubmit}>
          <div className="space-y-8 divide-y divide-gray-200">
            <div className="py-14">
              <div>
                <h3 className="text-4xl mb-5 font-semibold leading-6 text-gray-900">Add your listing</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Fill out the information about your item.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="name" className="block text-md font-medium leading-6 text-gray-900">
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      value={formValues.name}
                      type="text"
                      name="name"
                      id="name"
                      required
                      autoComplete="given-name"
                      onChange={handleFormChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="description" className="block text-md font-medium leading-6 text-gray-900">
                    Description
                  </label>
                  <div className="mt-2">
                    <textarea
                      value={formValues.description}
                      name="description"
                      id="description"
                      required
                      onChange={handleFormChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">Please Describe the Given Item.</p>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="price" className="block text-md font-medium leading-6 text-gray-900">
                    Price
                  </label>
                  <div className="mt-2">
                    <input
                      value={formValues.price}
                      type="number"
                      step="1"
                      min="0"
                      name="price"
                      id="price"
                      required
                      onChange={handleFormChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">Please Price the Given Item in USD.</p>
                </div>

                <div className="sm:col-span-6">
                  <div className="flex">
                  <label htmlFor="image" className="block text-md font-medium leading-6 text-gray-900 mr-4">
                    Upload image
                  </label>
                  <p>{percent}% done</p>
                  </div>
                  <div className="mt-2">
                    <input  type="file" onChange={handleChange} accept="/image/*" />
                    <button
                      className="ml-3 inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={handleUpload}>Upload image</button>
                    {/* <input
                      type="text"
                      name="image"
                      id="image"
                      required
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    /> */}
                  </div>
                </div>

                <div className="sm:col-span-6">
                  {nextStep ? <Checkbox listing={listing} /> : null}
                </div>

              </div>
            </div>

          </div>
          <div className="pt-5">
            <div className="flex justify-end mb-40">
              {/* <button
                type="reset"
                className="mb-rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Reset
              </button> */}
              {!nextStep ?
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Next
                </button> :
                <button
                  onClick={() => {
                    getAllListings()
                    navigate('/')
                  }} className="ml-3 inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Done
                </button>
              }
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default AddListingsForm