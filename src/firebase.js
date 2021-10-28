import firebase from "firebase/app";
import 'firebase/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBJ51xbVUkbNGOV3uRbUGvG2UAfGQXxg7I",
    authDomain: "unichat-446fc.firebaseapp.com",
    projectId: "unichat-446fc",
    storageBucket: "unichat-446fc.appspot.com",
    messagingSenderId: "983315520481",
    appId: "1:983315520481:web:97023633a13ac8e95610a0"
}).auth();