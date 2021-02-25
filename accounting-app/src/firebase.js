import firebase from "firebase";
import "firebase/auth";

// var admin = require("firebase-admin");

// admin.initializeApp({
//   credential: admin.credential.applicationDefault(),
//   databaseURL: "https://auth-development-f22fd-default-rtdb.firebaseio.com",
// });

const firebaseConfig = {
  apiKey: "AIzaSyBD5kmy9usCf0AOLnARJGFJ_kiVXqB9Kxs",
  authDomain: "auth-development-f22fd.firebaseapp.com",
  databaseURL: "https://auth-development-f22fd-default-rtdb.firebaseio.com",
  projectId: "auth-development-f22fd",
  storageBucket: "auth-development-f22fd.appspot.com",
  messagingSenderId: "265095647865",
  appId: "1:265095647865:web:a128df9174ca27d455baa8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.default.auth();

export { db, auth };