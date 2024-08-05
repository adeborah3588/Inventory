import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyBar3poeKPfvX0J4xp9aS83WUGb2xDFH7w",
  authDomain: "inventory-management-18df1.firebaseapp.com",
  projectId: "inventory-management-18df1",
  storageBucket: "inventory-management-18df1.appspot.com",
  messagingSenderId: "178754805861",
  appId: "1:178754805861:web:1f6010c569937d6577e68c",
  measurementId: "G-GS960EPZDQ",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);


export { firestore, auth, GoogleAuthProvider, signInWithPopup,storage };
