import Footer from "../components/Footer"
import { useState } from "react"
import Client from "../services/api"
import { useNavigate } from "react-router-dom"

const AddListingsForm = ({ user }) => {

  const navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    name: '',
    price: '',
    image: '',
    description: '',
    userId: 10
  })
  

  const handleChange = (e) => {
    setFormValues({
      ...formValues, [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await Client.post('/listings', formValues)
    navigate('/')
  }



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
                  type="text"
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
              <label htmlFor="description" className="block text-md font-medium leading-6 text-gray-900">
                Description
              </label>
              <div className="mt-2">
                <textarea
                  name="description"
                  id="description"
                  required
                  onChange={handleChange}
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
                  type="number"
                  step="1"
                  min="0"
                  name="price"
                  id="price"
                  required
                  onChange= {handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">Please Price the Given Item in USD.</p>
            </div>

            

            <div className="sm:col-span-6">
              <label htmlFor="image" className="block text-md font-medium leading-6 text-gray-900">
                Image Address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="image"
                  id="image"
                  required
                  onChange= {handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
      <div className="pt-5">
        <div className="flex justify-end mb-5">
          <button
            type="reset"
            className="mb-rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Reset
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
    </div>
    <Footer/>
    </div>
  )
}

export default AddListingsForm