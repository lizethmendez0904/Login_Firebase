import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyAh7PrnftoBY4jrZLXRUSqdh9ljj53G-IY",
    authDomain: "login-firebase-4c04f.firebaseapp.com",
    projectId: "login-firebase-4c04f",
    storageBucket: "login-firebase-4c04f.appspot.com",
    messagingSenderId: "285217062679",
    appId: "1:285217062679:web:fca0d4f5f1fb01dd604152",
    measurementId: "G-F7P7GD7FL3"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);