import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyAn6ezdLt5m6Evo560TPBG0T9xMGb5bgMU",
  authDomain: "facebook-clone-aka.firebaseapp.com",
  databaseURL: "https://facebook-clone-aka.firebaseio.com",
  projectId: "facebook-clone-aka",
  storageBucket: "facebook-clone-aka.appspot.com",
  messagingSenderId: "809118349995",
  appId: "1:809118349995:web:61041ca1825ec9dc1515ee",
  measurementId: "G-C10YY59PYD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;