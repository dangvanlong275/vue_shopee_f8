import NotFound from "@/views/NotFound.vue";
import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import { disableRoutes } from "./disableRoutes";
import { authRoutes } from "./authRoutes";
import { shopRoutes } from "./shopRoutes";

const routes: Array<RouteRecordRaw> = [
    authRoutes,
    shopRoutes,
    {
        path: '/not-found',
        name: 'not-found',
        component: NotFound
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    if (disableRoutes.includes(to.path)) {
        next('not-found');
    }

    next();
})