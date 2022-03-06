
<template>

  <div id="nav">
    <div>
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
        <button class="button line" type="submit" style="margin:15px"><router-link to="/">Logout</router-link> </button>
        <br><br>
      </form>

      <!--
      <router-link to="/">Home</router-link>
      <br><br>
      <router-link to="/user-details">User Details</router-link>
      <br><br>
      <router-link to="/user-management">User Management</router-link>
      <br><br>
      <router-link to="/register">Register</router-link>
      <br><br>
      <router-link to="/login">Login</router-link>
      <br><br>
      <router-link to="/project-management">Project Management</router-link>
      <br><br>
      -->

    </div>
  </div>
  
  <router-view />
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

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
    router.push("/logout");
  }).catch((error) => {
  // An error happened.
});
};

//role permissions
const roles = 0;
const userSignedIn = false; // user is not signed into the program
const userActive = false; // user is not able to access the program
const userManagement = false; // user is not able to access/edit the 'User Management' page
const projectManagement = false; // user is not able to access/edit the 'User Management' page
const message = "";

/*
switch (roles) {
  case 1: // Super Admin

    userActive = true;
    userManagement = true;
    projectManagement = true;
    message = "Super Admin";
    break;
    
  case 2: // Admin
    userActive = true;
    userManagement = false;
    projectManagement = true;
    message = "Admin";
    break;

  case 3: // Tester
    userActive = true;
    userManagement = false;
    projectManagement = false;
    message = "Tester";
    break;

  default: // Unassigned
    userActive = false;
    userManagement = false;
    projectManagement = false;
    message = "Unassigned";
    break;
}
*/
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
  left: 0vh;
  height: 90vh;
  background-color: #202125;
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

.line {
  border-bottom:2px solid gold;
}


</style>