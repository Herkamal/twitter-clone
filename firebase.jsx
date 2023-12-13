// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuw69tyFA_Hz18iGh5pCCu4h7fmqyAAb0",
  authDomain: "twitter-clone-29d1a.firebaseapp.com",
  projectId: "twitter-clone-29d1a",
  storageBucket: "twitter-clone-29d1a.appspot.com",
  messagingSenderId: "413662413755",
  appId: "1:413662413755:web:7b1d2fa5e56b9fc5353a9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);