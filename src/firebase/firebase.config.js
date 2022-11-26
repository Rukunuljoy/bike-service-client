// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvyMIG0A5TI4ILot8RYf_iYWZlS4sFVQU",
  authDomain: "reseller-bike.firebaseapp.com",
  projectId: "reseller-bike",
  storageBucket: "reseller-bike.appspot.com",
  messagingSenderId: "172321668298",
  appId: "1:172321668298:web:6cabe1ae55c2517dc6c833"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;