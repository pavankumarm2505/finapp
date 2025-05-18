// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjTDI0P9lUdjxupRCmxGzEcwtvwKzm9e0",
  authDomain: "finapp-c213f.firebaseapp.com",
  projectId: "finapp-c213f",
  storageBucket: "finapp-c213f.firebasestorage.app",
  messagingSenderId: "664889832919",
  appId: "1:664889832919:web:3739eac9a2a5329520c792",
  measurementId: "G-XJFB9CDKYS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);