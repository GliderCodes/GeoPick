import "firebase/auth";
import "firebase/database";
import firebase from "firebase";
import cred from "../constants/firebase-creds.json";
import "firebase/storage";
//import './sign-in screen';
const config = {
  apiKey: cred.REACT_APP_API_KEY,
  authDomain: cred.REACT_APP_AUTH_DOMAIN,
  databaseURL: cred.REACT_APP_DATABASE_URL,
  projectId: cred.REACT_APP_PROJECT_ID,
  storageBucket: cred.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: cred.REACT_APP_MESSAGING_SENDER_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const signIn = (email: string, password: string) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((u) => {
      console.log("sucessfully logged");
    })
    .catch((err) => {
      console.log("Error " + err.toString);
    });
};
export const auth = firebase.auth();
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.database();
export default auth;
export const storage = firebase.storage();
