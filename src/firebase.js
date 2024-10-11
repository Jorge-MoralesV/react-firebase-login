// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

import { } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMQ9aQall4t3CSAmY513mfwfJmjSQxASE",
  authDomain: "react-fb-auth-5e96c.firebaseapp.com",
  projectId: "react-fb-auth-5e96c",
  storageBucket: "react-fb-auth-5e96c.appspot.com",
  messagingSenderId: "1030836413228",
  appId: "1:1030836413228:web:a0423fa76795b8d3e08289"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);