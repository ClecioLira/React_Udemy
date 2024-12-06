import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfKcYv0iKW91gU2PUlnDgYRZJmbCLYU2A",
  authDomain: "miniblog-6b912.firebaseapp.com",
  projectId: "miniblog-6b912",
  storageBucket: "miniblog-6b912.firebasestorage.app",
  messagingSenderId: "993678654571",
  appId: "1:993678654571:web:5acb2c556371d6f48fc52e",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };
