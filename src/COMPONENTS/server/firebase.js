// firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAAHaYJgIJP0eEEfVjl_jqezaM6R6bB5EE",
  authDomain: "nakis-auth.firebaseapp.com",
  projectId: "nakis-auth",
  storageBucket: "nakis-auth.appspot.com",
  messagingSenderId: "801050171990",
  appId: "1:801050171990:web:6f3f7a0a25115c519eb9f7",
  databaseURL: "https://nakis-auth-default-rtdb.firebaseio.com" // Adicione a URL do Realtime Database
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
