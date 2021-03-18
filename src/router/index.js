import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

const routes = [{
        path: '/',

    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () =>
            import ('../views/dashboard'),
        meta: {
            title: 'Dashboard'
        },
        beforeEnter: (to, from, next) => {
            (store.state.auth.token) ? next(): next({ name: 'Login' })
        }
    },
    {
        path: '/product/create',
        name: 'ProductCreate',
        component: () =>
            import ('../views/product/create'),
        meta: {
            title: 'Product Create'
        },
        beforeEnter: (to, from, next) => {
            (store.state.auth.token) ? next(): next({ name: 'Login' })
        }

    },
    {
        path: '/product/manage',
        name: 'ProductManage',
        component: () =>
            import ('../views/product/manage'),
        meta: {
            title: 'Product  Manage'
        },
        beforeEnter: (to, from, next) => {
            (store.state.auth.token) ? next(): next({ name: 'Login' })
        }
    },
    {
        path: '/product/:product/update',
        name: 'ProductUpdate',
        component: () =>
            import ('../views/product/update'),
        meta: {
            title: 'Product  update'
        },
        beforeEnter: (to, from, next) => {
            (store.state.auth.token) ? next(): next({ name: 'Login' })
        }
    },
    {
        path: '/registration',
        name: 'Registration',
        component: () =>
            import ('../views/auth/registration'),
        meta: {
            title: 'registration'
        },
        beforeEnter: (to, from, next) => {
            (!store.state.auth.token) ? next(): next({ path: '/' })
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/auth/login'),
        meta: {
            title: 'registration'
        },
        beforeEnter: (to, from, next) => {
            (!store.state.auth.token) ? next(): next({ path: '/' })
        }

    },
    {
        path: '/:pathMatch(.*)*',
        component: () =>
            import ('../views/error.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});


export default router;