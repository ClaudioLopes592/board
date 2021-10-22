import firebase from 'firebase/app';
import 'firebase/firestore';

let firebaseConfig = {
    apiKey: "AIzaSyCx6Cn2EOA2Y0JVW1EINIBTzvYMflMiBAI",
    authDomain: "boardapp-d09b0.firebaseapp.com",
    projectId: "boardapp-d09b0",
    storageBucket: "boardapp-d09b0.appspot.com",
    messagingSenderId: "923242659739",
    appId: "1:923242659739:web:b82f07031110bbaf746b3e",
    measurementId: "G-4CTX5Q7CQG"
  };
  
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
  