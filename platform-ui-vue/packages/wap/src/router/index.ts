import { createRouter, createWebHashHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '@/views/Tabs.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/tabs/home',
    },
    {
        path: '/tabs/',
        component: TabsPage,
        children: [
            {
                path: '',
                redirect: '/tabs/home',
            },
            {
                path: 'home',
                component: () => import('@/views/Home.vue'),
            },
            {
                path: 'discover',
                component: () => import('@/views/Discover.vue'),
            },
            {
                path: 'me',
                component: () => import('@/views/Me.vue'),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
