import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import ServicesView from "../views/ServicesView.vue";
import BlogView from "@/views/BlogView.vue";
import AOS from "aos";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    meta: {
      title: "About",
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
    meta: {
      title: "Contact",
    },
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsView,
    meta: {
      title: "Projects",
    },
  },
  {
    path: "/services",
    name: "services",
    component: ServicesView,
    meta: {
      title: "Services",
    },
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogView,
    meta: {
      title: "Services",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Maxwell Oba-Joshua`;
  AOS.init();
  next();
});

export default router;
