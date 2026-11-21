

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC7VCIeiQJYOMRUF5_N5lKn40giZvP8jrA",
    authDomain: "auth-app-e7e44.firebaseapp.com",
    projectId: "auth-app-e7e44",
    storageBucket: "auth-app-e7e44.firebasestorage.app",
    messagingSenderId: "403459197459",
    appId: "1:403459197459:web:6459210132179afc6d0de6",
    measurementId: "G-Y9KF0YK18T"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);