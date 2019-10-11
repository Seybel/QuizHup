import Vue from "vue";
import VueRouter from "vue-router";

import WelcomePage from "./components/WelcomePage.vue";
import Login from "./components/auth/Login.vue";
import Register from "./components/auth/Register.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: WelcomePage
    },

    {
      path: "/login",
      component: Login
    },

    {
      path: "/register",
      component: Register
    }
  ]
});

export default router;
