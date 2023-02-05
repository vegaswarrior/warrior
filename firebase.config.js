
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbMaRt_avzrtqQaK3vQI3hZhsybnIVkSQ",
  authDomain: "warrior-real-estate.firebaseapp.com",
  projectId: "warrior-real-estate",
  storageBucket: "warrior-real-estate.appspot.com",
  messagingSenderId: "708244118359",
  appId: "1:708244118359:web:3bb07e68c794ce4efe7c12"
};

// Initialize Firebase

initializeApp(firebaseConfig)
export const db = getFirestore()