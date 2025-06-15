// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSw5Es9E5TPAsPqw7rUo16vgg9z0nwCiU",
  authDomain: "netflixgpt-cb08a.firebaseapp.com",
  projectId: "netflixgpt-cb08a",
  storageBucket: "netflixgpt-cb08a.firebasestorage.app",
  messagingSenderId: "282956053245",
  appId: "1:282956053245:web:3ef245ca8c9c1ccde81c94",
  measurementId: "G-LTK3L0JKWW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
