<template>
<h2>Create Account</h2>
<h1>Welcome</h1>
<p>Please Enter Your Information Below:</p>
<form>
    <label for="firstName">First Name:</label>
    <input type="text" style="margin:10px" value="First Name">
    <br>
    <label for="lastName">Last Name:</label>
    <input type="text" style="margin:10px" value="Last Name">
    <br>
    <label for="email">Email</label>
    <input type="text" style="margin:10px" value="Email">
    <br>
    <label for="password">Password:</label>
    <input type="text" style="margin:10px" value="Password">
    <br>
    <label for="confPassword">Confirm Password:</label>
    <input type="text" style="margin:10px" value="Confirm Password">
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
        router.push('/feed')
    })
    .catch((error) => {
        console.log(error.code);
        alert(error.message);
    });
};

const signInWithGoogle = () => {

}
</script>
