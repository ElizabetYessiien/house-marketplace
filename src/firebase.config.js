import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLfiKYz7_b3sp_Rjy3ia1ba-qDUbud87w",
  authDomain: "house-marketplace-app-34955.firebaseapp.com",
  projectId: "house-marketplace-app-34955",
  storageBucket: "house-marketplace-app-34955.appspot.com",
  messagingSenderId: "618013629240",
  appId: "1:618013629240:web:2b549f0db0e96da00e3fcd"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
