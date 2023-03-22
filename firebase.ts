
// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANHi0v8tUDVOL34KrTJGy_VQncXa1Ev3I",
  authDomain: "netflix-clone-cb430.firebaseapp.com",
  projectId: "netflix-clone-cb430",
  storageBucket: "netflix-clone-cb430.appspot.com",
  messagingSenderId: "54790522012",
  appId: "1:54790522012:web:f1269eba528fb803fc9959",
  measurementId: "G-RBCQJZ5QSV"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }