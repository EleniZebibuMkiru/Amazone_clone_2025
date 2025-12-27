// 1. Corrected Imports (Modular SDK is recommended for 2025)
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnDofHV42axbdS7fRVvtTSzLOa6GKSwh0",
  authDomain: "e-clone-2025-23f07.firebaseapp.com",
  projectId: "e-clone-2025-23f07",
  storageBucket: "e-clone-2025-23f07.firebasestorage.app",
  messagingSenderId: "980576232114",
  appId: "1:980576232114:web:c97df675a7a09bd63c5fab",
  measurementId: "G-KR23XXJ1NE"
};

// 2. Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 3. Export Services
export const auth = getAuth(app);
export const db = getFirestore(app);