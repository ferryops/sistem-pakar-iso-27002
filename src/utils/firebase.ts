// Import the functions you need from the SDKs you need
import "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD42oyDE6VwrJ8WTDBHqw9tNOWPMe8jFaY",
    authDomain: "sistem-pakar-27002.firebaseapp.com",
    projectId: "sistem-pakar-27002",
    storageBucket: "sistem-pakar-27002.appspot.com",
    messagingSenderId: "59073519975",
    appId: "1:59073519975:web:131b33ffd79e65d9b5cfc2",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const google = new firebase.auth.GoogleAuthProvider();

export { auth, google, firebase };