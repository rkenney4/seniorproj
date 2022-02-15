<template>
    <link rel="stylesheet" href="./SeniorProj/views/Home.css">
    <form class="home">
    <button class="btn-1" type="submit" style="margin:15px">Sign Out</button>
    <button class="btn-2" type="submit" style="margin:15px">User Details</button>
    <button class="btn-3" type="submit" style="margin:15px">User Management</button>
  </form>
  
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
