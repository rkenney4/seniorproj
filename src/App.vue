<template>
<div id="nav" class="left">
  <nav>
      <form class="home">
        <button class="button line" type="submit" style="margin:15px"><router-link to="/">Home</router-link> </button>
        <br>
        <br>
        <button class="button line" type="submit" style="margin:15px"><router-link to="/user-details">User Details</router-link></button>
        <br>
        <br>
        <button class="button line" type="submit" style="margin:15px"><router-link to="/user-management">User Management</router-link></button>
        <br>
        <br>
        <button class="button line" type="submit" style="margin:15px"><router-link to="/project-management">Project Management</router-link></button>
        <br>
        <br>
        <button class="button line" type="submit" style="margin:15px"><router-link to="/test-management">Test Management</router-link></button>
      </form>
  </nav>
</div>

<div id="nav" class="right">
  <nav>
    <form>
            <button class="button line" type="submit" style="margin:15px" @click="handleSignOut" v-if="isLoggedIn"><router-link to="/">Sign Out</router-link></button>
            <br>
            <br>
            <button class="button line" type="submit" style="margin:15px" v-if="!isLoggedIn"><router-link to="/sign-in">Sign In</router-link></button>
            <br>
            <br>
            <button class="button line" type="submit" style="margin:15px" v-if="!isLoggedIn"><router-link to="/register">Register</router-link> </button>
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
</style>
