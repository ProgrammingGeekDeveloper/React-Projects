// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import App from "../App";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKwI_2WR91G-kytWN7EY-Hzp6sYC5BQFg",
  authDomain: "react-course-f1f58.firebaseapp.com",
  projectId: "react-course-f1f58",
  storageBucket: "react-course-f1f58.appspot.com",
  messagingSenderId: "633122894846",
  appId: "1:633122894846:web:c2eb30d24d7b2e6e1906af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)
