// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcxAcxWvAEMFbrNJaBLQnBjYlT8njQ8Qk",
  authDomain: "my3dworld-club.firebaseapp.com",
  databaseURL:
    "https://my3dworld-club-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my3dworld-club",
  storageBucket: "my3dworld-club.appspot.com",
  messagingSenderId: "612670919698",
  appId: "1:612670919698:web:d2bb2d81c0a0778ed3f4cb",
  measurementId: "G-SHB2LE7R3W",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const fireApp = app;
export const fireAnalyics = analytics;
export const fireStorage = getStorage(app);
