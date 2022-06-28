// Import the functions you need from the SDKs you need
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBtoZVw2Vp20lMVNunavmlbt2Tq837e2e0",
  authDomain: "docs-clone-f7561.firebaseapp.com",
  projectId: "docs-clone-f7561",
  storageBucket: "docs-clone-f7561.appspot.com",
  messagingSenderId: "754166185258",
  appId: "1:754166185258:web:9736b1eb73adf6486fb253",
  measurementId: "G-T5NKWPR2QT"

};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore(app)