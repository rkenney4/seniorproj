// imports for Vue
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore, collection, getDocs } from 'firebase/firestore'

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAsHD4xIHmnXgxx3uZiVhiRimh2jOX8eds",
  authDomain: "seniorproj-d8a09.firebaseapp.com",
  projectId: "seniorproj-d8a09",
  storageBucket: "seniorproj-d8a09.appspot.com",
  messagingSenderId: "541465242613",
  appId: "1:541465242613:web:299aa4162bd3d6ffe20ebc",
  measurementId: "G-5BEXGKHHM6"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = getFirestore()

const app = createApp(App);

const colRef = collection(db, 'Instagram Login')

getDocs(colRef)
  .then((snapshot) =>{
    let tests = []
    snapshot.docs.forEach((doc) =>{
      tests.push({...doc.data(), id: doc.id})
    })
    console.log(tests)
  })
.catch(err =>{
  console.log(err.message)
})
app.use(router);

app.mount("#app");
