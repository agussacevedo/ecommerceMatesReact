// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALGQxPYolupDVrXqVUIBdqdOCx5O4NuAc",
  authDomain: "ecommerceacevedo.firebaseapp.com",
  projectId: "ecommerceacevedo",
  storageBucket: "ecommerceacevedo.appspot.com",
  messagingSenderId: "1002752610447",
  appId: "1:1002752610447:web:19b0fc73a8044fbf15e0fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
