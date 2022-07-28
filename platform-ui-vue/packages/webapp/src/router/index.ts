import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('@/views/Index.vue'),
    },
];

const router = createRouter({
    routes: routes,
    history: createWebHashHistory(),
});

export default router;
