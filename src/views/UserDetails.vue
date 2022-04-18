<template>
  <h1><u>Details</u></h1>
  <form id="nav" class="about">
    <label for="fName">First Name: </label>
    <input type="text" value="Bob">
    <br>
    <br>
    <label for="lName">Last Name: </label>
    <input type="text" value="Tester">
    <br>
    <br>
    <label for="email">Email: </label>
    <input type="text">
    <br>
    <br>
    <label for="password">Password: </label>
    <input type="text">
    <br>
    <br>
    <label for="confirmPassword">Confirm Password: </label>
    <input type="text">
    <br>
    <br>
    <!--
    <button type="submit" style="margin: 5vh"><router-link to="/">Home</router-link></button>
    <button type="submit" style="margin: 5vh">Update</button>
    <button type="submit" style="margin: 5vh"><router-link to="/login">Logout</router-link></button>
    -->
  </form>
</template>

<style scoped>
  #nav {
    position: fixed;
    left: 40vh;
    right: 30vh;
    background-color: whitesmoke;
    height: 100vh;
    color: #202125;
  }
</style>