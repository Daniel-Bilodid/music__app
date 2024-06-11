import firebase from 'firebase/compat/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBqp5eRc-fCouMSfCxaxFpwk2uIKc9g4fk',
  authDomain: 'music-eb088.firebaseapp.com',
  projectId: 'music-eb088',
  storageBucket: 'music-eb088.appspot.com',
  appId: '1:690155803799:web:c0e99f9f05262687db45d2'
}

export default firebase.initializeApp(firebaseConfig)
