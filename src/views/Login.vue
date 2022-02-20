<template>
<body>
    <h1><b><u>Login</u></b></h1>
    <form>
        <label class="email" for="email"><b>Email:</b></label>
        <input type="text">
        <br>
        <br>
        <label class="password" for="password"><b>Password:</b></label>
        <input type="text">
        <br>
        <br>
        <button type="submit" style="margin:20px" id="pass"><router-link to="/home">Login</router-link> </button>
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
        router.push('/home')
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
/*
var pass = document.getElementById("pass");
document.getElementById('pass').onclick = function() {
    if(auth == true){

    }
}
*/
const signInWithGoogle = () => {

}
</script>

<style scoped>

   
    body
    {
        height: 100%;
    }

    .email
    {
        font-family: 'Times New Roman', Times, serif;
        font-size: 100%;
    }

    .password
    {
        font-family: 'Times New Roman', Times, serif;
        font-size: 100%;
    }
</style>
