<template>
  <form>
    <button type="button">Sign Out</button>
    <button type="button">User Details</button>
    <button type="button">User Management</button>
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
