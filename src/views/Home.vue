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
      <button class="btn-1" type="submit" style="margin:15px">Sign Out</button>
      <button class="btn-2" type="submit" style="margin:15px">User Details</button>
      <button class="btn-3" type="submit" style="margin:15px">User Management</button>
    </form>
  </body>


</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

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
  color: white;
  }

  h1 {
  color: #9b8449;
  }
</style>