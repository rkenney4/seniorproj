
<template>
  <head>
  </head>
  <body>
    <img src="../assets/OU-Logo.jpg" alt="OU-Logo" width="200" height="150">
    <h1>
      <b>Welcome to our Quality Assurance Management Team!</b>
    </h1>

    <p>
      <b>Team members: Joey, Saliel, Sarah, Maurice, and Richard</b>
    <br>
    <br>
      This program is used to manage/execute test cases for each project. For each test case executed, the program saves those results for the project's admin to view. Our program makes it easier for your testers to work more efficiently by pinpointing bugs more accurately.
    </p>
    <form class="home">
      <button type="submit" style="margin:15px"><router-link to="/login">Logout</router-link> </button>
      <button type="submit" style="margin:15px"><router-link to="/user-details">User Details</router-link></button>
      <button type="submit" style="margin:15px"><router-link to="/user-management">User Management</router-link></button>
      <button type="submit" style="margin:15px"><router-link to="/project-management">Project Management</router-link></button>
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
  button {
  background-color: white;
  font-family: 'Courier New', Courier, monospace;
  }

  p {
    color: black;
  }

  h1 {
  color: gold;
  }
</style>