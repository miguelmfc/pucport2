import { createRouter, createWebHistory } from "vue-router";
import { isBooting } from "../loading";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/LayoutAwareView.vue"),
      meta: { layout: "retro", page: "home" },
    },
    {
      path: "/sobre-mim",
      component: () => import("../views/LayoutAwareView.vue"),
      meta: { layout: "retro", page: "sobremim" },
    },
    {
      path: "/projetos",
      component: () => import("../views/LayoutAwareView.vue"),
      meta: { layout: "retro", page: "projetos" },
    },
    {
      path: "/experiencias",
      component: () => import("../views/LayoutAwareView.vue"),
      meta: { layout: "retro", page: "experiencias" },
    },
    {
      path: "/contatos",
      component: () => import("../views/LayoutAwareView.vue"),
      meta: { layout: "retro", page: "contatos" },
    },
  ],
});

router.beforeEach(() => {
  isBooting.value = true;
});

router.afterEach(() => {
  // dá um tempinho para o Boot mostrar “System ready.”
  setTimeout(() => {
    isBooting.value = false;
  }, 5000);
});

export default router;