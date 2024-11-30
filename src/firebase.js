// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKndIw7tPDpRExNc9WuAM70gQGdpB6CNg",
  authDomain: "coffee-store-30e02.firebaseapp.com",
  projectId: "coffee-store-30e02",
  storageBucket: "coffee-store-30e02.firebasestorage.app",
  messagingSenderId: "940715736170",
  appId: "1:940715736170:web:3fa606da65074484211e13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);