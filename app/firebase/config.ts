// src/app/firebase/config.ts
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Authentication ke liye

// Your web app's Firebase configuration (Ye tumhari asli details hain!)
const firebaseConfig = {
  apiKey: "AIzaSyBVhDMuWujSJSa3ILCCspE-1GzaDdG8XaU", // <-- Apni asli API Key yahan dalna
  authDomain: "onepersonai-app.firebaseapp.com", // <-- Apni asli Auth Domain yahan dalna
  projectId: "onepersonai-app", // <-- Apni asli Project ID yahan dalna
  storageBucket: "onepersonai-app.firebasestorage.app", // <-- Apni asli Storage Bucket yahan dalna
  messagingSenderId: "23393911382", // <-- Apni asli Messaging Sender ID yahan dalna
  appId: "1:23393911382:web:294719db84c05d8cbbf1f7", // <-- Apni asli App ID yahan dalna
  measurementId: "G-5TQ34FZVMT", // Agar Google Analytics enable kiya hai toh ye bhi asli wala
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Authentication service ko initialize karo

export { auth, app }; // auth service aur app ko export kar rahe hain
