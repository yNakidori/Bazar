import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyD6iW-3vZA3A8zv4nfqDuN3qPS0cL6A2Kk",
  authDomain: "inventario-d8574.firebaseapp.com",
  projectId: "inventario-d8574",
  storageBucket: "inventario-d8574.appspot.com",
  messagingSenderId: "861945717239",
  appId: "1:861945717239:web:efa7a18944afa544744ef2"
};

const myapp = initializeApp(firebaseConfig, 'myapp');
export const db = getFirestore(myapp);
export const auth = getAuth();
export const storage = getStorage(myapp);


