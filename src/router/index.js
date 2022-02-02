import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  { path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue") 
  },
    {
    path: "/sign-in",
    name: "SignIn",
    component: () => import("../views/SignIn.vue")
    },
    {
      path: "/feed",
      name: "Feed",
      component: () => import("../views/Feed.vue"),
      meta: {
          requireAuth: true,
      },
      },
  
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (getAuth().currentUser) {
      next();
    } else {
      alert("you dont have access!");
      next("/");
    }
  } else {
    next();
  }
  }

);

export default router;
