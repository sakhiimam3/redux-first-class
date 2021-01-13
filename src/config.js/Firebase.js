import React from 'react'
 import firebase from "firebase"


var firebaseConfig = {
    apiKey: "AIzaSyBr6WrKGlFs7SFZKCRoNiBGcc-ICHX_1po",
    authDomain: "todo-with-react-ea74b.firebaseapp.com",
    projectId: "todo-with-react-ea74b",
    storageBucket: "todo-with-react-ea74b.appspot.com",
    messagingSenderId: "223739787464",
    appId: "1:223739787464:web:403c1e99e3eb60742dcdfd",
    measurementId: "G-TYDGM22NLD"
  };
  // Initialize Firebase
 export default firebase.initializeApp(firebaseConfig);