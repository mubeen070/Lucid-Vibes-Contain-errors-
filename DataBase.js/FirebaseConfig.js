// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBLOwWpJW2QrhYHPQm16jHtdczA0y-J8Jk",
    authDomain: "lucid-vibes.firebaseapp.com",
    projectId: "lucid-vibes",
    storageBucket: "lucid-vibes.appspot.com",
    messagingSenderId: "195391062729",
    appId: "1:195391062729:web:a6d83cb276c80a2e7dc318",
    measurementId: "G-F7GYT8EF3K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };