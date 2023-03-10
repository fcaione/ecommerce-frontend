import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage";

const app = initializeApp ({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "thredzimages.firebaseapp.com",
  projectId: "thredzimages",
  storageBucket: "thredzimages.appspot.com",
  messagingSenderId: "1094740026994",
  appId: process.env.REACT_APP_APP_ID,
  measurementId: "G-PJBN7CTCZ3"
})

const storage = getStorage(app);
export default storage;