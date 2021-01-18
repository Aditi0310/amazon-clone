// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBBy1qHDryIkTRQSw88qvfW1W_vLNDUr-I",
    authDomain: "clone-10894.firebaseapp.com",
    projectId: "clone-10894",
    storageBucket: "clone-10894.appspot.com",
    messagingSenderId: "405787465755",
    appId: "1:405787465755:web:8dd44b6dc9e2813c6540be",
    measurementId: "G-8T0RP6Q6NE"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export {db , auth};
  // step-1 -> go to firebase project - project settings - config and copy paste