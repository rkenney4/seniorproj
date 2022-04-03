// imports for Vue
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import * as firebase from "firebase/app";

import { firestorePlugin } from 'vuefire'
Vue.use(firestorePlugin);

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

const app = createApp(App);

app.use(router);

app.mount("#app");
