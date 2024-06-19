import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBqp5eRc-fCouMSfCxaxFpwk2uIKc9g4fk',
  authDomain: 'music-eb088.firebaseapp.com',
  projectId: 'music-eb088',
  storageBucket: 'music-eb088.appspot.com',
  appId: '1:690155803799:web:c0e99f9f05262687db45d2'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()

const usersCollection = db.collection('users')

export { auth, db, usersCollection }
