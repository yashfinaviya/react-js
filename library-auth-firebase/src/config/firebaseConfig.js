// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5J5-tlXVRhUh_YCzJwJLCbN3vFYwhhdo",
  authDomain: "library-management-e5f0c.firebaseapp.com",
  projectId: "library-management-e5f0c",
  storageBucket: "library-management-e5f0c.firebasestorage.app",
  messagingSenderId: "199163531071",
  appId: "1:199163531071:web:7af0404f6977433ae7cd8a",
  measurementId: "G-83139YSBW3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const auth = getAuth(app)