import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDae_W_yAuIrbdaofWP6HG5Vmwyt5NRE3o",
  authDomain: "prepwise-6da88.firebaseapp.com",
  projectId: "prepwise-6da88",
  storageBucket: "prepwise-6da88.firebasestorage.app",
  messagingSenderId: "1067461604127",
  appId: "1:1067461604127:web:0894872aa556fc8e75b62a",
  measurementId: "G-WQ5113PZ97"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app)
export const db = getFirestore(app)