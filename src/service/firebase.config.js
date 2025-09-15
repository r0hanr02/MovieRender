// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlQLQnnaBQkDwj79xK1erHhpDwe1aTKBk",
  authDomain: "movierecommendation-95846.firebaseapp.com",
  projectId: "movierecommendation-95846",
  storageBucket: "movierecommendation-95846.firebasestorage.app",
  messagingSenderId: "1073375673940",
  appId: "1:1073375673940:web:1c063f83de0213cd7af7c1",
  measurementId: "G-Q2D50K2RFM",
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
