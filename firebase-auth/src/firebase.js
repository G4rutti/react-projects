// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_4HG-Ol47usxE5y-oot-85dMBuunyuow",
  authDomain: "react-auth-655de.firebaseapp.com",
  projectId: "react-auth-655de",
  storageBucket: "react-auth-655de.appspot.com",
  messagingSenderId: "1051593340298",
  appId: "1:1051593340298:web:3ffb9011a0e5e73aca4473"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)