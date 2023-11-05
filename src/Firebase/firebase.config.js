// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-FyuvrYIGSEEsQwYRjFE-5emEqgvJ-nc",
  authDomain: "asingment-eleven.firebaseapp.com",
  projectId: "asingment-eleven",
  storageBucket: "asingment-eleven.appspot.com",
  messagingSenderId: "758130483024",
  appId: "1:758130483024:web:81cbab754500d97b76d655"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app