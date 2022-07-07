// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import 'firebase/analytics'

const firebaseConfig = {
  apiKey: "AIzaSyBpylCs39hb3NGJSh3OlcTWACuIx-VrkUk",
  authDomain: "chat-app-b527c.firebaseapp.com",
  projectId: "chat-app-b527c",
  storageBucket: "chat-app-b527c.appspot.com",
  messagingSenderId: "751706454033",
  appId: "1:751706454033:web:18e57db43bdc25bd9e59b0",
  measurementId: "G-XMN67L3B8T"
};

firebase.initializeApp(firebaseConfig)
firebase.analytics() 

const auth = firebase.auth()
const db = firebase.firestore()

export {db,auth}
export default firebase