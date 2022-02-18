<template>
<body>
    <p>Login</p>
    <p>Please login below:</p>
    <form>
        <label class="email" for="email">Email:</label>
        <input type="text">
        <br>
        <br>
        <label class="password" for="password"><b>Password:</b></label>
        <input type="text">
        <br>
        <br>
        <button type="submit" style="margin:20px"><router-link to="/sign-in">Login</router-link> </button>
        <button type="submit" style="margin:20px"><router-link to="/register">Register</router-link></button>
    </form>
</body>

</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router' 
const email = ref("");
const password = ref("");
const errMsg = ref()
const router = useRouter() 

const register = () => {

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
        console.log("Successfully Signed In!");
        router.push('/feed')
    })
    .catch((error) => {
        console.log(error.code);
        switch (error.code)  {
            case "auth/Invalid-email":
                errMsg.value = "Invalid email";
                break;
            case "auth/user-not-found":
                errMsg.value = "No account with that email was found";
                break;
            case "auth/wrong-password":
                errMsg.value = "Incorrect password";
                break;
                default:
                errMsg.value = "Email or password was incorrect";
                break;
        }
        alert(error.message);
    });
};

const signInWithGoogle = () => {

}
</script>

<style scoped>
    body
    {
        background-color: orange;
        height: 100%;
    }

    .email
    {
        color: blue;
        font-family: 'Times New Roman', Times, serif;
        font-size: 100%;
        background-color: chocolate;
    }

    .password
    {
        color: darkolivegreen;
        font-family: 'Times New Roman', Times, serif;
        font-size: 100%;
        background-color: yellow;
    }
</style>
