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
import TagListings from "./pages/TagListings"
import storage from "./firebaseConfig.js"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import ProfileSettings from './pages/ProfileSettings'

function App() {
  const [listings, setListings] = useState([])
  const [percent, setPercent] = useState(0);
  const [file, setFile] = useState("");
  const [user, setUser] = useState(null)
  const [imageUrl, setImageUrl] = useState("")

  useEffect(() => {
    getAllListings()
  }, [])

  const getAllListings = async () => {
    const res = await Client.get(`/listings`)
    console.log(res.data)
    await res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    setListings(res.data)
  }

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

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  const handleUpload = () => {
    if (!file) {
      alert("Please upload an image first!");
    }

    const randomInt = Math.random();
    const storageRef = ref(storage, `/files/${randomInt}${file.name}`);

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        // uploadTask.snapshot.ref refers to the image we just uploaded
          setImageUrl(url)
        });
      }
    );
  };

  return (
    <>
      <Header setUser={setUser} user={user} />
      <Routes>
        <Route path="/" element={<Home listings={listings} />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:userId" element={<Profile user={user} listings={listings} getAllListings={getAllListings} />} />
        <Route path="/listings" element={<Listings listings={listings} getAllListings={getAllListings} />} />
        <Route path="/listings/:listingId" element={<ListDetails user={user} file={file} handleImageChange={handleChange} handleUpload={handleUpload} percent={percent} imageUrl={imageUrl} getAllListings={getAllListings} />} />
        <Route path="/listings/tag/:tagName" element={<TagListings />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/signIn" element={<SignIn setUser={setUser} />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/addListingsForm" element={<AddListingsForm user={user} getAllListings={getAllListings} file={file} handleChange={handleChange} handleUpload={handleUpload} percent={percent} imageUrl={imageUrl} />} />
        <Route path="/settings" element={<ProfileSettings handleImageChange={handleChange} user={user} imageUrl={imageUrl} handleUpload={handleUpload} percent={percent}/>} />
      </Routes>
    </>
  )
}

export default App
