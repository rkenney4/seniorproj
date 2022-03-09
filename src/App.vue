<template>
  <div>
    <nav>
      <router-link to="/"> Home </router-link> |
      <router-link to="/feed"> Feed </router-link> |
      <router-link to="/register"> Register </router-link> |
      <router-link to="/sign-in"> Login </router-link> |
      <button @click="handleSignOut" >Sign Out</button>
    </nav>
    <router-view />
  </div>
</template>



import { getAuth, signOut } from "firebase/auth";
import { useRouter } from 'vue-router';
const router = useRouter();

let auth;
onMounted(() => {
 auth = getAuth(); 
}
)

 const handleSignOut = () => {
   signOut(auth).then(() => {
router.push("/");
  });
};


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>