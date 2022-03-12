import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/register",
      component: () => import("../views/Register.vue"),
    },
    {
      path: "/sign-in",
      component: () => import("../views/SignIn.vue"),
    },
    {
      path: "/user-details",
      component: () => import("../views/UserDetails.vue"),
      meta:{
        requiresAuth: true,
      },
    },
    {
      path: "/project-management",
      component: () => import("../views/ProjectManagement.vue"),
      meta:{
        requiresAuth: true,
      },
    },
    {
      path: "/user-management",
      component: () => import("../views/UserManagement.vue"),
      meta:{
        requiresAuth: true,
      },
    },
  ],
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },

      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if(to.matched.some((record) => record.meta.requiresAuth)){
    if(await getCurrentUser()){
      next();
    } else{
      alert("You do not have access to this page!");
      next("/");
    }

  } else {
    next();
  }

});

export default router;
