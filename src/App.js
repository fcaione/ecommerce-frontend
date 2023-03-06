import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import CheckoutForm from './pages/CheckoutForm';
import ListDetails from './pages/ListDetails';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Home from './pages/Home';
import Listings from "./pages/Listings";
import Header from "./components/Header";
import { CheckSession } from "./services/Auth";

function App() {

  const [listings, setListings] = useState([])

  useEffect(() => {
    getAllListings()
  }, [])

  const getAllListings = async () => {
    const res = await axios.get(`http://localhost:3001/api/listings`)
    setListings(res.data)
  }

  const [user, setUser] = useState(null)

  const checkToken = async () => {
    const currentUser = await CheckSession()
    setUser(currentUser)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<Home  listings={listings}/> } />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="/listings" element={<Listings listings={listings}/>} />
          <Route path="/listings/:listingsId" element={<ListDetails />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/signIn" element={<SignIn setUser={setUser} />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
    </>
  );
}

export default App;
