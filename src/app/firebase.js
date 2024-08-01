// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASAT-nD5hU0rwzMxGWbV-LgtD3ZsVytAQ",
  authDomain: "cineaste-637bd.firebaseapp.com",
  projectId: "cineaste-637bd",
  storageBucket: "cineaste-637bd.appspot.com",
  messagingSenderId: "1036641023098",
  appId: "1:1036641023098:web:55ae7e3798a21b4373f7c3",
  measurementId: "G-JJ2W13DSBK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);