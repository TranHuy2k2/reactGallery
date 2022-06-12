import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAmjdxvznSAzS3dLAm4X3F3hiHj50Ulb4Q",
    authDomain: "reactgallery-2d5aa.firebaseapp.com",
    projectId: "reactgallery-2d5aa",
    storageBucket: "reactgallery-2d5aa.appspot.com",
    messagingSenderId: "962601985927",
    appId: "1:962601985927:web:837bac333ab0f240c61522"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };