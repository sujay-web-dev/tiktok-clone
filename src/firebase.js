import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDRTZfdv_i9iWfCw0RGNX5BJJUxfunvbNs",
    authDomain: "tik-tok-sujay.firebaseapp.com",
    databaseURL: "https://tik-tok-sujay.firebaseio.com",
    projectId: "tik-tok-sujay",
    storageBucket: "tik-tok-sujay.appspot.com",
    messagingSenderId: "395748816634",
    appId: "1:395748816634:web:570a66dee2ce9b6278bb43",
    measurementId: "G-F3L2GKER8W"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;