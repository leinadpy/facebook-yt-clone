import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB8GexktBdeLZLb7WW3Q5bQRfn3JETS-yw",
  authDomain: "facebook-2-yt-2bdf7.firebaseapp.com",
  projectId: "facebook-2-yt-2bdf7",
  storageBucket: "facebook-2-yt-2bdf7.appspot.com",
  messagingSenderId: "173096739368",
  appId: "1:173096739368:web:4fa4dad6cfe285e9c68b1d",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const storage = firebase.storage();

export { db, storage };
