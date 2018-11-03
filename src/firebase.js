import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAE0yMnxhs-jQ25FmVKQbNGfGJEhLcIk8o",
  authDomain: "react-slack-clone-b4030.firebaseapp.com",
  databaseURL: "https://react-slack-clone-b4030.firebaseio.com",
  projectId: "react-slack-clone-b4030",
  storageBucket: "react-slack-clone-b4030.appspot.com",
  messagingSenderId: "393204063335"
};
firebase.initializeApp(config);

export default firebase;