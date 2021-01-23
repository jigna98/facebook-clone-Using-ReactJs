import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBTA1jIjVhQ3rP5Id6AnJBXxGg1NCP5SfQ",
    authDomain: "facebook-clone-7c436.firebaseapp.com",
    projectId: "facebook-clone-7c436",
    storageBucket: "facebook-clone-7c436.appspot.com",
    messagingSenderId: "580368936678",
    appId: "1:580368936678:web:467f852d7f3b125fdd5527",
    measurementId: "G-7L6KTHS5F4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth=firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;