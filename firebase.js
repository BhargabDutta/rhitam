// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDU-nEIemT2teHhCL9hpQEbZoWjgw5OGpM",
  authDomain: "cineaste-65d2c.firebaseapp.com",
  projectId: "cineaste-65d2c",
  storageBucket: "cineaste-65d2c.appspot.com",
  messagingSenderId: "663690960914",
  appId: "1:663690960914:web:10e2577e9005ece08138cb",
  measurementId: "G-SW5XPLW91Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);