import firebase from "firebase/compat/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXTt4qg8mxCDL1lH5EU9ug-4sQ-FN0VR4",
  authDomain: "resume-9a804.firebaseapp.com",
  projectId: "resume-9a804",
  storageBucket: "resume-9a804.appspot.com",
  messagingSenderId: "855189745975",
  appId: "1:855189745975:web:505442090d266c4b58aab2",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();