import { useState } from "react"
import Client from "../services/api"

const Checkbox = ({ listing }) => {

  const people = [
    { id: 1, name: 'Women-All-Categories' },
    { id: 2, name: 'Women-Tops' },
    { id: 3, name: 'Women-Bottoms' },
    { id: 4, name: 'Women-Shoes' },
    { id: 5, name: 'Men-All-Categories' },
    { id: 6, name: 'Men-Tops' },
    { id: 7, name: 'Men-Bottoms' },
    { id: 8, name: 'Men-Shoes' },
    { id: 9, name: 'Accessories' },
    { id: 10, name: 'Bracelets' },
    { id: 11, name: 'Earrings' },
    { id: 12, name: 'Rings' },
    { id: 13, name: 'Misc' },
    { id: 14, name: 'Home' },
    { id: 15, name: 'Art' },
    { id: 16, name: 'Other' },
  ]

  const handleChange = async (e) => {
    if (e.target.checked){
      await Client.post(`/tags/${listing.id}`, {
        content: e.target.name,
        listingId: listing.id,
      })
    } else {
      await Client.delete(`/tags/${e.target.name}/${listing.id}`)
    }
  }


  console.log()
  return (
    <fieldset>
      <legend className="text-base font-semibold leading-6 text-gray-900">Tags</legend>
      <div className="mt-4 divide-y divide-gray-200 border-t border-b border-gray-200">
        {people.map((person, personIdx) => (
          <div key={personIdx} className="relative flex items-start py-4">
            <div className="min-w-0 flex-1 text-sm leading-6">
              <label htmlFor={`${person.id}`} className="select-none font-medium text-gray-900">
                {person.name}
              </label>
            </div>
            <div className="ml-3 flex h-6 items-center">
              <input
                onChange={handleChange}
                id={`${person.id}`}
                name={`${person.name}`}
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-slate-900 focus:ring-red-600"
              />
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  )
}

export default Checkbox