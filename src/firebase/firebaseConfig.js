import { initializeApp } from "firebase/app";
import { getFirestore, collection, serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAVGkVFUDC70wdIIMFHCbfxIrpvM7OWmOQ",
  authDomain: "collage-8686a.firebaseapp.com",
  projectId: "collage-8686a",
  storageBucket: "collage-8686a.appspot.com",
  messagingSenderId: "588832498787",
  appId: "1:588832498787:web:0b7f74004d334bb64e0456",
  measurementId: "G-VPPJCQ1N0P",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig); 
const storage = getStorage(firebase);  
const db = getFirestore();               //database reference
const colRef = collection(db, "images"); //collection reference
const timeStamp = serverTimestamp();     //firebase timeStamp

export { storage, db, colRef, timeStamp };
