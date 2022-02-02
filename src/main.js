import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsHD4xIHmnXgxx3uZiVhiRimh2jOX8eds",
  authDomain: "seniorproj-d8a09.firebaseapp.com",
  projectId: "seniorproj-d8a09",
  storageBucket: "seniorproj-d8a09.appspot.com",
  messagingSenderId: "541465242613",
  appId: "1:541465242613:web:299aa4162bd3d6ffe20ebc",
  measurementId: "G-5BEXGKHHM6"
};

initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
