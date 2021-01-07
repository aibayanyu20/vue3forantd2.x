import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/layout/Layout.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/pages/Index.vue"),
        meta: {
          title: "首页"
        }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
