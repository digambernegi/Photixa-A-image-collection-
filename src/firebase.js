import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAVGkVFUDC70wdIIMFHCbfxIrpvM7OWmOQ",
    authDomain: "collage-8686a.firebaseapp.com",
    projectId: "collage-8686a",
    storageBucket: "collage-8686a.appspot.com",
    messagingSenderId: "588832498787",
    appId: "1:588832498787:web:0b7f74004d334bb64e0456",
    measurementId: "G-VPPJCQ1N0P"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const db = firebase.firestore();
const timeStamp=firebase.firestore.FieldValue.serverTimestamp;

export {storage,db,timeStamp};