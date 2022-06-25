import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDGGZh_4gC1refN7FcwZVaO907uxfT66ag",
    authDomain: "pro-71-48e09.firebaseapp.com",
    projectId: "pro-71-48e09",
    storageBucket: "pro-71-48e09.appspot.com",
    messagingSenderId: "934247291279",
    appId: "1:934247291279:web:dd754781599773a55b13fa"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
