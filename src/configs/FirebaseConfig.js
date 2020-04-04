// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";
import * as firebaseui from "firebaseui";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import { setSignedIn } from '../actions/setSignedIn';

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
var ui = new firebaseui.auth.AuthUI(firebase.auth());

var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        console.log('auth');
        console.log(authResult);

        return true;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        // document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //   firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    //   firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
  };


export {firebase, db, ui, uiConfig};