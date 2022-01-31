// I followed the guide 'https://firebase.google.com/docs/auth/web/firebaseui#initialize_firebaseui' to set up FirebaseUI
// I followed the guide 'https://firebase.google.com/docs/auth/web/email-link-auth?authuser=1' to create SignUp, SignIn, SignOut
//This code is connected to the account 'https://console.firebase.google.com/u/1/project/seniorproj-d8a09/authentication/providers'

import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
//firebase imports
import { initializeApp } from "firebase/app";
var firebase = require("firebase");
var firebaseui = require("firebaseui");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

//firebase
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsHD4xIHmnXgxx3uZiVhiRimh2jOX8eds",
  authDomain: "seniorproj-d8a09.firebaseapp.com",
  projectId: "seniorproj-d8a09",
  storageBucket: "seniorproj-d8a09.appspot.com",
  messagingSenderId: "541465242613",
  appId: "1:541465242613:web:2268934d43df15c8e20ebc",
  measurementId: "G-D8SZC5VC0W",
};

const app = initializeApp(firebaseConfig);
console.log(app); //Created to remove error (app is not used)

ui.start("#firebaseui-auth-container", {
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.IIET0T5CllNjM82PPh8QGsYSAsD2,
      signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
    },
  ],
  // Other config options...
});

// Is there an email link sign-in?
if (ui.isPendingRedirect()) {
  ui.start("#firebaseui-auth-container", uiConfig);
}
// This can also be done via:
if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
  ui.start("#firebaseui-auth-container", uiConfig);
}

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      authResult = null; //Created to remove error (authResult is not defined)
      redirectUrl = null; //Created to remove error (redirectUrl is not defined)
      console.log(redirectUrl); //Created to remove error (redirectUrl is not used)
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById("loader").style.display = "none";
    },
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: "popup",
  signInSuccessUrl: "<url-to-redirect-to-on-success>",
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
  ],
  // Terms of service url.
  tosUrl: "<your-tos-url>",
  // Privacy policy url.
  privacyPolicyUrl: "<your-privacy-policy-url>",
};

// The start method will wait until the DOM is loaded.
ui.start("#firebaseui-auth-container", uiConfig);
