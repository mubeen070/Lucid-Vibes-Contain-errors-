// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firestore';


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
let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app();
}
const db = app.firestore();

export { db };
