import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { FaCog } from 'react-icons/fa'
import ProfileTabs from '../components/ProfileTabs'
import SignIn from './SignIn'
import Client from '../services/api'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Profile = ({ listings, getAllListings }) => {

  const navigate = useNavigate()
  
  const [user, setUser] = useState(null)
  
  const { userId } = useParams()

  const getUser = async () => {
    const res = await Client.get(`/users/user/${userId}`)
    setUser(res.data)
  }

  useEffect(() => {
    getUser()
  }, [])
  
  const profile = {
    name: user?.name,
    email: user?.email,
    profileImage: user?.profileImage,
    backgroundImage: user?.backgroundImage
  }

  if (user) {
    return (
      <div>
        <div>
          <img className="h-32 w-full object-cover lg:h-48 object-center" src={profile.backgroundImage} alt="" />
        </div>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
            <div className="flex">
              <img className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32 object-cover" src={profile.profileImage} alt="" />
            </div>
            <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
              <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
                <h1 className="truncate text-2xl font-bold text-gray-900">{profile.name}</h1>
              </div>
              <div className="justify-stretch mt-6 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => navigate('/settings')}
                  className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <FaCog className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                  <span>Settings</span>
                </button>
                {/* <button
                  type="button"
                  className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <EnvelopeIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                  <span>Followers</span>
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <PhoneIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                  <span>Following</span>
                </button> */}
              </div>
            </div>
          </div>
          <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
            <h1 className="truncate text-2xl font-bold text-gray-900">{profile.name}</h1>
          </div>
        </div>
        
        <ProfileTabs user={user} listings={listings} getAllListings={getAllListings} />
      </div>

    )
  }
}

export default Profile