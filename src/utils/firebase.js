// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC78cmZE_booYDjL9JjVZyPaUZNlnkUAko",
  authDomain: "netflixgpt-709b0.firebaseapp.com",
  projectId: "netflixgpt-709b0",
  storageBucket: "netflixgpt-709b0.firebasestorage.app",
  messagingSenderId: "386868176318",
  appId: "1:386868176318:web:2bb6925d9fa551e29385ef",
  measurementId: "G-29DCBKZ0FB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
