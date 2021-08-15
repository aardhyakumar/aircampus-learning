import firebase from "firebase";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
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
