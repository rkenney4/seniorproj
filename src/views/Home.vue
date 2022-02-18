
<template>
  <head>
  </head>
  <body>
    <img src="../assets/OU-Logo.jpg" alt="OU-Logo" width="200" height="150">
    <h1>
      <b>Welcome to our Quality Assurance Management Team!</b>
    </h1>

    <p>
      Team members: Joey, Saliel, Sarah, Maurice, and Richard
    </p>
    <form class="home">
      <button class="btn-1" type="submit" style="margin:15px"><router-link to="/sign-in">Sign Out</router-link> </button>
      <button class="btn-2" type="submit" style="margin:15px"><router-link to="/about">User Details</router-link></button>
      <button class="btn-3" type="submit" style="margin:15px"><router-link to="/feed">User Management</router-link></button>
      <button class="btn-3" type="submit" style="margin:15px">Project Management</button>
    </form>
  </body>


</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import {roles, userSignedIn, userActive, userManagement, projectManagement, message} from "../App.vue"
//roles = 0;
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
  h1 {
    background-color: black;
  }
  .btn-1 {
  background-color: #9b8449;
  font-family: 'Courier New', Courier, monospace;
  }

  .btn-2 {
    background-color: #9b8449;
    font-family: 'Courier New', Courier, monospace;

  }

  .btn-3 {
    background-color: #9b8449;
    font-family: 'Courier New', Courier, monospace;
  }

  p {
    color: snow;
  }

  h1 {
  color: #9b8449;
  }
</style>