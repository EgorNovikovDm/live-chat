import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBXIlrfq09TLJFFPi4ZPbJSeb7n0tUSwOM",
  authDomain: "udemy-vue-firebase-sites-1b05f.firebaseapp.com",
  projectId: "udemy-vue-firebase-sites-1b05f",
  storageBucket: "udemy-vue-firebase-sites-1b05f.appspot.com",
  messagingSenderId: "129251009962",
  appId: "1:129251009962:web:49a51783383cf8f8fc77d3"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }
