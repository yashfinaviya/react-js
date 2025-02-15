import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnvZptntxpWwIQSZuUbbl1r0dCtVwOsgg",
  authDomain: "recipe-exam-c422c.firebaseapp.com",
  projectId: "recipe-exam-c422c",
  storageBucket: "recipe-exam-c422c.firebasestorage.app",
  messagingSenderId: "278407438122",
  appId: "1:278407438122:web:af02cc316412c84bf9c853"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const auth = getAuth(app) 