/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDJOTyzInKk-pPGGw4MuPGB_9xJCB4GvAQ",
  authDomain: "fir-task-49dfe.firebaseapp.com",
  projectId: "fir-task-49dfe",
  storageBucket: "fir-task-49dfe.appspot.com",
  messagingSenderId: "333916874945",
  appId: "1:333916874945:web:2b3d856d0a701b14fe8c40",
  measurementId: "G-PRDP7HH4P5"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);