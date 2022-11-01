// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useState, useEffect} from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-3aIqvaAyR2R9pn0HtHRP9RIXF6cIiJc",
  authDomain: "fir-login-fc284.firebaseapp.com",
  projectId: "fir-login-fc284",
  storageBucket: "fir-login-fc284.appspot.com",
  messagingSenderId: "604625458706",
  appId: "1:604625458706:web:753be319345aeba25e2acb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export const LoginEvent = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);

}

export const LogoutEvent = () => {
    return signOut(auth);
}

// customized hook

export function UseAuth() {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unSubsribe = onAuthStateChanged(auth, user => setCurrentUser(user))
        return unSubsribe;      
    
    }, [])
    
    return currentUser;
}