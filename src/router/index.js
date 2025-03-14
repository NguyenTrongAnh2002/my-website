import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Portfolio from "../views/Portfolio.vue";
import Blog from "../views/Blog.vue";
import Contact from "../views/Contact.vue";
import Info_blog1 from "../views/Info_blog1.vue";

const routes = [
  { path: "/", component: Home, meta: { title: "HOME " } },
  {
    path: "/about",
    component: About,
    meta: { title: "ABOUT" },
  },
  {
    path: "/portfolio",
    component: Portfolio,
    meta: { title: "PORTFOLIO-My Website" },
  },
  {
    path: "/blog",
    component: Blog,
    meta: { title: "BLOG " },
    children: [
      {
        path: "info_blog1",
        name: "info_blog1",
        component: Info_blog1,
        meta: { title: "Blog 1" },
      },
    ],
  },
  {
    path: "/contact",
    component: Contact,
    meta: { title: "CONTACT" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.afterEach((to) => {
  document.title = to.meta.title || "My Website";
});

export default router;
