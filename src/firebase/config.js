import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBjdVbd4B767ZCEwxBlx6voDjoHstioehU",
    authDomain: "flow-nest.firebaseapp.com",
    projectId: "flow-nest",
    storageBucket: "flow-nest.appspot.com",
    messagingSenderId: "161443949071",
    appId: "1:161443949071:web:063ba3c8915bf54ad0917a"
}

// initialize firebase
firebase.initializeApp(firebaseConfig)

// initialize services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.timestamp()

export { projectFirestore, projectAuth, timestamp }