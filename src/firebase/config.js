import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiH3Z9M1xCEmcEebCWrK9-FHsLTVe-aTk",
  authDomain: "yakhyobek-s-kitchen.firebaseapp.com",
  projectId: "yakhyobek-s-kitchen",
  storageBucket: "yakhyobek-s-kitchen.appspot.com",
  messagingSenderId: "543100871888",
  appId: "1:543100871888:web:4638dea2d4bb80b6ef6ad5"
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init service
const projectFirestore = firebase.firestore();

export { projectFirestore };
