// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth  } from  "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCI6OseGjBB8EuRHLaHXo_qC-A0cuEiJW4",
  authDomain: "universitymanagmentdiyala.firebaseapp.com",
  projectId: "universitymanagmentdiyala",
  storageBucket: "universitymanagmentdiyala.appspot.com",
  messagingSenderId: "682197958980",
  appId: "1:682197958980:web:7ff13834e38a2001a91711"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const db = getFirestore(app);
