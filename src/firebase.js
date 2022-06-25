// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1BTPgFPXMent3S3clREnw57cOQFgatno",
  authDomain: "yt-demo-512f6.firebaseapp.com",
  projectId: "yt-demo-512f6",
  storageBucket: "yt-demo-512f6.appspot.com",
  messagingSenderId: "838940660436",
  appId: "1:838940660436:web:716f5f17f0112a60a12141"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const firestore = firebase.firestore();
export const database = {
  users: firestore.collection('users')
}

