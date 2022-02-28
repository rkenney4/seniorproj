<template>
<body>
    <!-- Bootstrap Code for Login Page -->
     <div>
       <!-- Call the functions onSubmit and onReset  -->
       <!-- There is a syntax error because of a missing end tag  -->
          <b-form @submit="onSubmit" @reset="onReset" v-if="show"></b-form>
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      ></b-form-group>
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
    </div>
    <h1><b><u>Login</u></b></h1>
    <form>
        <label class="email" for="email"><b>Email Address:</b></label>
        <input type="text">
        <br>
        <br>
        <label class="password" for="password"><b>Password:</b></label>
        <input type="password">
        <br>
        <br>
        <input type="checkbox">
        <!-- Remember me checkbox to remember email and password -->
        <label for="remember">Remember Me</label> 
        <button type="submit" style="margin:20px" id="pass"><router-link to="/">Login</router-link> </button>
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
        router.push('/')
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
Using the auth variable to check if the credentials are correct to login

var pass = document.getElementById("pass");
document.getElementById('pass').onclick = function() {
    if(auth == true){

    }
}
*/
const signInWithGoogle = () => {

}
// Function definition for when the submit button is clicked
function onSubmit()
{
    event.preventDefault(); // Prevent the webpage from going to another page when clicked

}

function onReset(event) // Function to reset the form
{
    event.preventDefault();
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
