import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/storage';  // <----


const firebaseConfig = {
  apiKey: "AIzaSyCNaBb2apMXRXhzMnbDiszSXYreaM-w6vQ",
  authDomain: "disneyclone-71de3.firebaseapp.com",
  projectId: "disneyclone-71de3",
  storageBucket: "disneyclone-71de3.appspot.com",
  messagingSenderId: "476877691933",
  appId: "1:476877691933:web:2a220f2f1fefe2e2c93af4",
  measurementId: "G-8MQL0KZGS7"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();


const auth = firebase.auth();
const provider =  new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export {auth, provider, storage};

export default db;


