
<template>
  <head>
  </head>
  <body id="nav">
    <img src="../assets/OU-Logo.jpg" alt="OU-Logo" width="200" height="150">
    <h2 class="line">
      <b>Welcome to our Quality Assurance Management Team!</b>
      <br><br>
    </h2>
    <p class="line">
      This program is used to manage/execute test cases for each project. For each test case executed, the program saves those results for the project's admin to view. Our program makes it easier for your testers to work more efficiently by pinpointing bugs more accurately.
      <br><br>
    </p>
    <p>
      <b>Team members: Joey, Saliel, Sarah, Maurice, and Richard</b>
    </p>
    <!--
    <form class="home">
      <button type="submit" style="margin:15px"><router-link to="/login">Logout</router-link> </button>
      <button type="submit" style="margin:15px"><router-link to="/user-details">User Details</router-link></button>
      <button type="submit" style="margin:15px"><router-link to="/user-management">User Management</router-link></button>
      <button type="submit" style="margin:15px"><router-link to="/project-management">Project Management</router-link></button>
    </form>
    -->
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
  h2 {
    color: #202125;
  }
  button {
  background-color: #202125;
  font-family: 'Courier New', Courier, monospace;
  box-shadow: 5px 5px 5px ;
  }

  p {
    color: #202125;
  }

  #nav {
    position: fixed;
    left: 40vh;
    right: 30vh;
    background: whitesmoke;
    height: 100vh;
    width: 100vh;
  }

  .line {
    border-bottom:3px solid goldenrod;;
  }

</style>