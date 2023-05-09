import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6yiCJqCietLf6W-SDdqOVPH2bFUJRlYw",
  authDomain: "makaton-booking-system.firebaseapp.com",
  projectId: "makaton-booking-system",
  storageBucket: "makaton-booking-system.appspot.com",
  messagingSenderId: "227866199865",
  appId: "1:227866199865:web:4648fab253593d16f30ae8",
  measurementId: "G-GBHXCQLNVJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
