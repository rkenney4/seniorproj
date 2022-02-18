
<template>

  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">User Details</router-link> |
    <router-link to="/feed">User Management</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/sign-in">Login</router-link> 
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
    router.push("/");
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
    background-color: lightblue;
}
#app {
  font-family: 'Courier New', Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: black;
}

#nav a.router-link-exact-active {
  color: #9b8449;
}
</style>