// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQjmM7bYsq0RnmDmOscGBJZkeKDwn-jrY",
  authDomain: "tutoring-website-e8447.firebaseapp.com",
  projectId: "tutoring-website-e8447",
  storageBucket: "tutoring-website-e8447.appspot.com",
  messagingSenderId: "1059821004302",
  appId: "1:1059821004302:web:5a0aa8564836a5ab5d7e5f",
  measurementId: "G-HZJ2DGN7CN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);