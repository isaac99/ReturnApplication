// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";


// Initialize Cloud Firestore through Firebase

const firebaseConfig = {
    apiKey: "AIzaSyBFgv4w5K9-sU1neZhJQuI-jnV2S-UWgZM",
    authDomain: "returnapp-f1453.firebaseapp.com",
    databaseURL: "https://returnapp-f1453.firebaseio.com",
    projectId: "returnapp-f1453",
    storageBucket: "returnapp-f1453.appspot.com",
    messagingSenderId: "369291262822",
    appId: "1:369291262822:web:b1059ec4af52a9579ae6a7",
    measurementId: "G-J357ZXECM0"
  };
  
firebase.initializeApp({
    // apiKey: '### FIREBASE API KEY ###',
    // authDomain: '### FIREBASE AUTH DOMAIN ###',
    // projectId: '### CLOUD FIRESTORE PROJECT ID ###'
    ...firebaseConfig
});
// firebase.initializeTestApp({...firebaseConfig});
  
var db = firebase.firestore();

export {firebase, db};