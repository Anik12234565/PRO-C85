import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyARTIBKkEQoU_4X3piqSwlDpDYQ242GO1w",
    authDomain: "classtest-be03d.firebaseapp.com",
    databaseURL: "https://classtest-be03d-default-rtdb.firebaseio.com",
    projectId: "classtest-be03d",
    storageBucket: "classtest-be03d.appspot.com",
    messagingSenderId: "86077273842",
    appId: "1:86077273842:web:4abf584b3052d0508b426b"
  };
  
  // Initialize Firebase
    let app = firebase.initializeApp(firebaseConfig);
  
  export default db = app.database()