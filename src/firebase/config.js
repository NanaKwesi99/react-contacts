import { initializeApp } from "firebase/app";
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBho0CyT-9OrPA7xicidQA7frmU5lp1prE",
    authDomain: "react-contacts-a74dd.firebaseapp.com",
    projectId: "react-contacts-a74dd",
    storageBucket: "react-contacts-a74dd.appspot.com",
    messagingSenderId: "713464431002",
    appId: "1:713464431002:web:20c0342c31215a5eb6ba23"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);


  export default firebase;