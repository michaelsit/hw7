const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyCvArRRucQwIqkGkUqv63ivBTlcIJHfhHw",
  authDomain: "kiei-451-hw7-e171a.firebaseapp.com",
  projectId: "kiei-451-hw7-e171a",
  storageBucket: "kiei-451-hw7-e171a.appspot.com",
  messagingSenderId: "619487900877",
  appId: "1:619487900877:web:b1be85e518300dff5fa584"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase