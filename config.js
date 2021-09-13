import firebase from 'firebase';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVCiahOZxhE9E5Ew5d670i3J8c48Cl_FI",
  authDomain: "classtest-b6159.firebaseapp.com",
  projectId: "classtest-b6159",
  storageBucket: "classtest-b6159.appspot.com",
  messagingSenderId: "787149159583",
  appId: "1:787149159583:web:93b77053eac8181537b6aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase.database();