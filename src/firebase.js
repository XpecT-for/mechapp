import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyD7ix274aEgpsKX7Qx2eHahHD7NiT2StZI",
  authDomain: "mech-app-dev.firebaseapp.com",
  projectId: "mech-app-dev",
  storageBucket: "mech-app-dev.appspot.com",
  messagingSenderId: "376600375632",
  appId: "1:376600375632:web:73d657bbff5fdaf39c3c55",
  measurementId: "G-YH7S378HQ5",
});

export const auth = app.auth();
export default app;
