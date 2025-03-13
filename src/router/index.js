import { createRouter, createWebHistory } from "vue-router";
import Home from "../layouts/Home.vue";
import About from "../layouts/About.vue";
import Portfolio from "../layouts/Portfolio.vue";
import Blog from "../layouts/Blog.vue";
import Contact from "../layouts/Contact.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/portfolio", component: Portfolio },
  { path: "/blog", component: Blog },
  { path: "/contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
