import { Route, Routes } from "react-router-dom"
import CheckoutForm from './pages/CheckoutForm';
import ListDetails from './pages/ListDetails';
import ListCard from './pages/ListCard';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Home from './pages/Home';




function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/listCard" element={<ListCard />} />
          <Route path="/listDetails" element={<ListDetails />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUn" element={<SignUp />} />
        </Routes>
    </>
  );
}

export default App;
