import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9O1BrzxizNPFXSzQoPLCyzVWzPeVf6Fg",
  authDomain: "netflix-clone-bd348.firebaseapp.com",
  projectId: "netflix-clone-bd348",
  storageBucket: "netflix-clone-bd348.appspot.com",
  messagingSenderId: "534319913585",
  appId: "1:534319913585:web:f9d70d7ebacfa620dc19d0",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
