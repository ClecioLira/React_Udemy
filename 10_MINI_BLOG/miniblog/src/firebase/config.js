import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCQ8bplGoIH0GoaeYs1QXGy8gdBbcY-tbc",
  authDomain: "miniblog-7b159.firebaseapp.com",
  projectId: "miniblog-7b159",
  storageBucket: "miniblog-7b159.appspot.com",
  messagingSenderId: "103535076143",
  appId: "1:103535076143:web:879ced51de3569475bf7da"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, app };
