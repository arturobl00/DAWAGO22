import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCL0TGVuYdpdMw3x359vYMS4i_LoqwrYQU",
    authDomain: "dawcrud-1dbfe.firebaseapp.com",
    projectId: "dawcrud-1dbfe",
    storageBucket: "dawcrud-1dbfe.appspot.com",
    messagingSenderId: "130284410279",
    appId: "1:130284410279:web:89fe9fad29aca27d0a5282"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {firebase}