import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDkUrCQ6z42aVjBRTHmIEsL5ikEJV9HklI",
  authDomain: "contact-form-8da43.firebaseapp.com",
  projectId: "contact-form-8da43",
  storageBucket: "contact-form-8da43.appspot.com",
  messagingSenderId: "132454615786",
  appId: "1:132454615786:web:fecf3a37a526d3aeee2593",
  measurementId: "G-5MF5KG75C1"
};

firebase.initializeApp(config);
export const functions = firebase.functions();

