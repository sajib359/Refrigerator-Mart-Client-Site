// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCux6Vw_x9z9kf1W_w_p3jCNGQMfc6wgdU",
  authDomain: "refrigerator-mart.firebaseapp.com",
  projectId: "refrigerator-mart",
  storageBucket: "refrigerator-mart.appspot.com",
  messagingSenderId: "1033766252437",
  appId: "1:1033766252437:web:7611173e2204105285909c",
  measurementId: "G-XC0JQE9ZTL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;
