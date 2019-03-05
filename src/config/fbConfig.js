import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDUYVNTYTZObEClXMvqMhmASiMFrUlvXA0",
  authDomain: "ron-mario-plan.firebaseapp.com",
  databaseURL: "https://ron-mario-plan.firebaseio.com",
  projectId: "ron-mario-plan",
  storageBucket: "ron-mario-plan.appspot.com",
  messagingSenderId: "1051831004259"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
