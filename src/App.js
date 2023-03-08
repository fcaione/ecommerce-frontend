import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react"
import CheckoutForm from "./pages/CheckoutForm"
import ListDetails from "./pages/ListDetails"
import Profile from "./pages/Profile"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import About from "./pages/About"
import Home from "./pages/Home"
import Listings from "./pages/Listings"
import Header from "./components/Header"
import { CheckSession } from "./services/Auth"
import Client from "./services/api"
import AddListingsForm from "./pages/AddListingsForm"

function App() {
	const [listings, setListings] = useState([])

	useEffect(() => {
		getAllListings()
	}, [])

	const getAllListings = async () => {
		const res = await Client.get(`/listings`)
		console.log(res.data)
    await res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
		setListings(res.data)
	}

	const [user, setUser] = useState(null)

	const checkToken = async () => {
		const currentUser = await CheckSession()
		setUser(currentUser)
	}

	useEffect(() => {
		const token = localStorage.getItem("token")
		if (token) {
			checkToken()
		}
	}, [])

	return (
		<>
			<Header user={user} />
			<Routes>
				<Route path="/" element={<Home listings={listings} user={user}/>} />
				<Route path="/about" element={<About />} />
				<Route
					path="/profile"
					element={
						<Profile
							user={user}
							listings={listings}
							getAllListings={getAllListings}
						/>
					}
				/>
				<Route
					path="/listings"
					element={
						<Listings
							listings={listings}
							getAllListings={getAllListings}
						/>
					}
				/>
				<Route
					path="/listings/:tagName"
					element={<Listings />} />
				<Route
					path="/listings/:listingId"
					element={<ListDetails user={user} />}
				/>
				<Route path="/checkout" element={<CheckoutForm />} />
				<Route path="/signIn" element={<SignIn setUser={setUser} />} />
				<Route path="/signUp" element={<SignUp />} />
				<Route
					path="/addListingsForm"
					element={<AddListingsForm user={user} />}
				/>
			</Routes>
		</>
	)
}

export default App
