import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAPcz1ti_P7JBr_zot3dwa5Uohmw_RzRLs",
    authDomain: "linkedin-3d21d.firebaseapp.com",
    projectId: "linkedin-3d21d",
    storageBucket: "linkedin-3d21d.appspot.com",
    messagingSenderId: "491043914691",
    appId: "1:491043914691:web:da485aed4e5dd8731e7376",
    measurementId: "G-GVBY6C7N0X"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth = firebase.auth();
  export{ db , auth };