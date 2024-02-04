// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b05dd.firebaseapp.com",
  projectId: "mern-estate-b05dd",
  storageBucket: "mern-estate-b05dd.appspot.com",
  messagingSenderId: "1044423132977",
  appId: "1:1044423132977:web:1ea2f49c8b22e8855fd210",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
