import * as firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAKPwwUMKk_FquGC0NDuBZbykuvvH0HnG0",
  authDomain: "myname-fbe3e.firebaseapp.com",
  databaseURL: "https://myname-fbe3e.firebaseio.com",
  projectId: "myname-fbe3e",
  storageBucket: "",
  messagingSenderId: "563900445538",
  appId: "1:563900445538:web:f6a50d1a83a3fba1"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export default db
