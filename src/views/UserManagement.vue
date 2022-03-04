<template>
  <div id="nav">
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { email: 'email@gmail.com', first_name: 'John', last_name: 'Macdonald', role: 'Admin' },
          { email: 'email1@gmail.com', first_name: 'Mark', last_name: 'Macdonald', role: 'Super Admin' },
          { email: 'email2@gmail.com', first_name: 'Sam', last_name: 'Macdonald', role: 'Tester' },
          { email: 'email3@gmail.com', first_name: 'Eric', last_name: 'Macdonald', role: 'Tester' },
        ]
      }
    }
  }
</script>

<style scoped>
  #nav {
    position: fixed;
    left: 40vh;
    right: 30vh;
    background-color: #bbbec3;
    height: 100vh;
    color: #202125;
  }
</style>