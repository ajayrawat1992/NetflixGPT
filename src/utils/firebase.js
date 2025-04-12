// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa74-IuS7RJPNsUPNU-dz3_bxfuOPT9LY",
  authDomain: "netflixgpt-802a1.firebaseapp.com",
  projectId: "netflixgpt-802a1",
  storageBucket: "netflixgpt-802a1.firebasestorage.app",
  messagingSenderId: "144536625880",
  appId: "1:144536625880:web:a77fb09823686848b52dad",
  measurementId: "G-CJPK7FQ80R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);