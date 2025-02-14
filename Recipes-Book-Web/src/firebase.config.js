import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyD5DJNHGtDL7DhQSrzLtCJ7ZlODIZbg4yg",
    authDomain: "recipe-firebase-dd21f.firebaseapp.com",
    projectId: "recipe-firebase-dd21f",
    storageBucket: "recipe-firebase-dd21f.firebasestorage.app",
    messagingSenderId: "430733408786",
    appId: "1:430733408786:web:a4f463f988e65e6cb536cb"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app;