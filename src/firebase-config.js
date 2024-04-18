import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3Crc01Vbl3UnOyqeDRfJhsPJ0vM4vu7k",
    authDomain: "blog-app-5f47f.firebaseapp.com",
    projectId: "blog-app-5f47f",
    storageBucket: "blog-app-5f47f.appspot.com",
    messagingSenderId: "50404177268",
    appId: "1:50404177268:web:0e8dfe976621e9a86b2821"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
