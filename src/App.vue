
<template>
<div id="nav" class="left">
  <nav>
      <form class="home">
        <router-link to="/"><button class="button line" type="submit" style="margin:15px">Home</button></router-link>
        <br>
        <br>
        <router-link to="/user-details"><button class="button line" type="submit" style="margin:15px">User Details</button></router-link>
        <br>
        <br>
        <router-link to="/user-management"><button class="button line" type="submit" style="margin:15px">User Management</button></router-link>
        <br>
        <br>
        <router-link to="/project-management"><button class="button line" type="submit" style="margin:15px">Project Management</button></router-link>
        <br>
        <br>
        <router-link to="/test-management"><button class="button line" type="submit" style="margin:15px">Test Management</button></router-link>
      </form>
  </nav>
</div>

<div id="nav" class="right">
  <nav>
    <form>
            <router-link to="/"><button class="button line" type="submit" style="margin:15px" @click="handleSignOut" v-if="isLoggedIn">Sign Out</button></router-link>
            <br>
            <br>
            <router-link to="/sign-in"><button class="button line" type="submit" style="margin:15px" v-if="!isLoggedIn">Sign In</button></router-link>
            <br>
            <br>
            <router-link to="/register"><button class="button line" type="submit" style="margin:15px" v-if="!isLoggedIn">Register</button></router-link>
    </form>
  </nav>
</div>

  <div>
    <nav>
      <router-link to="/"></router-link>
      <router-link to="/user-details"></router-link>
      <router-link to="/user-management"></router-link>
      <router-link to="/project-management"></router-link>
      <router-link to="/register"></router-link>
      <router-link to="/sign-in"></router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut} from "firebase/auth";

import { useRouter } from 'vue-router';
import firebase from "./firebaseInit";

const db = firebase.firestore();
const router = useRouter();
const isLoggedIn = ref(false);

let auth;
onMounted(() => {
 auth = getAuth(); 
onAuthStateChanged(auth, (user) => {
if (user) {
  isLoggedIn.value = true;
} else {
  isLoggedIn.value = false;
}
});
});


 const handleSignOut = () => {
   signOut(auth).then(() => {
   router.push("/");
  });
};
</script>

<style>
body
{
    background-color: #202125;
}
#app {
  font-family: 'Courier New', Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
#nav {
  padding: 5vh;
  position: fixed;
  height: 90vh;
  background-color: #202125;
  z-index: 2;
}
#nav a {
  font-weight: bold;
  color: #bec1c6;
}
#nav a.router-link-exact-active {
  color: white;
}
.button {
  background-color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  color: #bec1c6;
}
button:hover {
  box-shadow: 0 8px 16px 0 white;
}
.left {
  left: 0vh;
}
.right {
  right: 0vh;
}

.button {
  background-color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
}
button:hover {
  box-shadow: 0 8px 16px 0 white;
}



</style>