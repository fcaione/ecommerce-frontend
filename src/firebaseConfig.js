import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage";

const app = initializeApp ({
  apiKey: "AIzaSyAQfAzmYmhcJyyOQ85Ce_9Mx-DBoPiAOQM",
  authDomain: "ecommerce-2b1f2.firebaseapp.com",
  projectId: "ecommerce-2b1f2",
  storageBucket: "ecommerce-2b1f2.appspot.com",
  messagingSenderId: "123864584284",
  appId: "1:123864584284:web:0cc5a2de2bfbcbabcb9699",
  measurementId: "G-9SEQRCRHMM"
})

const storage = getStorage(app);
export default storage;