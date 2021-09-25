import firebase from "firebase";
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDTMH1FYkrapRfhfPRVLmyKbHTNNDH3dZ4",
  authDomain: "linkedin-clone-c60d5.firebaseapp.com",
  projectId: "linkedin-clone-c60d5",
  storageBucket: "linkedin-clone-c60d5.appspot.com",
  messagingSenderId: "759747218137",
  appId: "1:759747218137:web:1ea529cdbab4b095b38cc8",
  measurementId: "G-V9KSKHHR80",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
