import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/download",
      name: "download",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "download" */ "./views/Download.vue")
    },
    {
      path: "/focusnow",
      name: "focusnow",
      component: () =>
        import(/* webpackChunkName: "focusnow" */ "./views/FocusNow.vue")
    },
    {
      path: "/focusedu",
      name: "focusedu",
      component: () =>
        import(/* webpackChunkName: "focusedu" */ "./views/FocusEdu.vue")
    }
  ]
});
