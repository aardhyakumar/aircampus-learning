import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDTI5_ks8COjHxmlMcyvKEqU4piOasKvP8",
  authDomain: "e-learning-website-3c34d.firebaseapp.com",
  projectId: "e-learning-website-3c34d",
  storageBucket: "e-learning-website-3c34d.appspot.com",
  messagingSenderId: "386786690620",
  appId: "1:386786690620:web:3bbbd1a435e194d86aa539",
  measurementId: "G-XDQ5CBN9VG",
};
const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase
  .auth()
  .setPersistence(firebase.auth.Auth.Persistence.LOCAL);
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const dbRef = firebase.database().ref();

export { auth, provider, storage, dbRef };

export default db;
