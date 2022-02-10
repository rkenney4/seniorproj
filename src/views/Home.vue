<template>
  <form>
    <button type="submit" style="margin:15px">Sign Out</button>
    <button type="submit" style="margin:15px">User Details</button>
    <button type="submit" style="margin:15px">User Management</button>
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
