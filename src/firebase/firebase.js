import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBlNx7dAGUmpVQlepfAI5ZrpWE_40mU9E8",
  authDomain: "projectx-d6533.firebaseapp.com",
  databaseURL: "https://projectx-d6533.firebaseio.com",
  projectId: "projectx-d6533",
  storageBucket: "projectx-d6533.appspot.com",
  messagingSenderId: "342948699738",
  appId: "1:342948699738:web:b1ca8f6aa90ea30d168263",
  measurementId: "G-7LJG698GRD"
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export { firebase };
