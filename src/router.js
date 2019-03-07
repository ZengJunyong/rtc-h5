import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Room from "./views/Room.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "index",
      component: Index
    },
    {
      path: "/room",
      name: "room",
      component: Room
    },
    // {
    //   path: "/docx",
    //   name: "docx",
    //   component: () => import( /* webpackChunkName: "docx" */"./views/Docx.vue")
    // },
    // {
    //   path: "/docx2",
    //   name: "docx2",
    //   component: () => import( /* webpackChunkName: "docx2" */"./views/Docx2.vue")
    // }
  ]
});