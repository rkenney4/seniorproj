<template>
<p>Login</p>
<p>Please login below:</p>
<form>
    <label for="email">Email: </label>
    <input type="text" value="Email">
    <br>
    <br>
    <label for="password">Password: </label>
    <input type="text" value="Password">
    <br>
    <br>
    <button type="submit" style="margin:20px">Submit</button>
    <button type="submit" style="margin:20px">Create Account</button>
</form>
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
