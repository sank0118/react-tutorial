// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_61H3M4n2_yKeVwMAffr8u0onDrYt3r0",
  authDomain: "data101-f1efb.firebaseapp.com",
  projectId: "data101-f1efb",
  storageBucket: "data101-f1efb.firebasestorage.app",
  messagingSenderId: "243950146716",
  appId: "1:243950146716:web:262c80ff6a87b3b8108959",
  measurementId: "G-NH1NSEGMHD",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore;
export const dbService = firebase.firestore();
export { firebase };
