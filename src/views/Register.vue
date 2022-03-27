<template>
<h2>Create Account</h2>
<p>Please Enter Your Information Below:</p>
<form>
    <label for="firstName">First Name:</label>
    <input type="text" style="margin:10px" required>
    <br>
    <label for="lastName">Last Name:</label>
    <input type="text" style="margin:10px" required>
    <br>
    <label for="email">Email</label>
    <input type="text" style="margin:10px" required>
    <br>
    <label for="password">Password:</label>
    <input type="password" style="margin:10px" required>
    <br>
    <label for="confPassword">Confirm Password:</label>
    <input type="password" style="margin:10px" required>
    <br>
    <router-link to="/sign-in">Go Back</router-link>
    <button type="submit" style="margin:10px">Submit</button>
</form>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router' 
const email = ref("");
const password = ref("");
const router = useRouter()

const register = () => {
createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
        console.log("Successfully registered!");
        console.log(auth.currentUser)
        router.push('/')
    })
    .catch((error) => {
        console.log(error.code);
        alert(error.message);
    });
};

const signInWithGoogle = () => {

}
</script>

<style scoped>

    p
    {
        background-color: white;
        color: black;
        font-family: 'Times New Roman', Times, serif;
    }
    h2
    {
        color: snow;
        background-color: black;
        font-family: 'Times New Roman', Times, serif;
        margin: 5vh;
        padding: 2vh;
    }
</style>