// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXHJldBGkVw6XY-BkfLwqUf3JW5eEPSSU",
    authDomain: "chat-app-2e59f.firebaseapp.com",
    projectId: "chat-app-2e59f",
    storageBucket: "chat-app-2e59f.appspot.com",
    messagingSenderId: "431136446770",
    appId: "1:431136446770:web:06f921471e47950e619f2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
