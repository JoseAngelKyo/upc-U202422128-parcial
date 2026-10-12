import { createRouter, createWebHistory } from 'vue-router';
import Home from './shared/presentation/views/home.vue';

const pageNotFound = () =>
    import('./shared/presentation/views/page-not-found.vue');

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: { title: 'Home' }
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: pageNotFound,
            meta: { title: 'Page Not Found' }
        }
    ]
});

router.beforeEach(to => {
    document.title =
        `Hussmann StoreConnect - ${to.meta.title || 'Home'}`;
});

export default router;