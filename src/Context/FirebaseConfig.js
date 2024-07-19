// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc6IoSEyeWz-kD1MmGN5Fhi1atKLEOPAs",
  authDomain: "lets-create-aea7a.firebaseapp.com",
  projectId: "lets-create-aea7a",
  storageBucket: "lets-create-aea7a.appspot.com",
  messagingSenderId: "408209344603",
  appId: "1:408209344603:web:02adc68b1cee27ab36577e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth