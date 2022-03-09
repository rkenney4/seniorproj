import { createRouter, createWebHistory } from "vue-router";

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
    },
    {
      path: "/project-management",
      component: () => import("../views/ProjectManagement.vue"),
    },
    {
      path: "/user-management",
      component: () => import("../views/UserManagement.vue"),
    },
  ],
});

export default router;
