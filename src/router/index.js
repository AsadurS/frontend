import { createRouter, createWebHistory } from 'vue-router'


const routes = [{
        path: '/',
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem('token') == null) {
                next({ name: 'Login' })
            }
            next('/dashboard')
        }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () =>
            import ('../views/dashboard'),
        meta: {
            title: 'Dashboard'
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
            if (localStorage.getItem('token') == null)

            {
                next({ name: 'Login' })
            }
            next()
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
    },
    {
        path: '/product/:product/update',
        name: 'ProductUpdate',
        component: () =>
            import ('../views/product/update'),
        meta: {
            title: 'Product  update'
        },
    },
    {
        path: '/registration',
        name: 'Registration',
        component: () =>
            import ('../views/auth/registration'),
        meta: {
            title: 'registration'
        },
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
            if (localStorage.getItem('token') == null) {
                next()
            }
            next({ name: from.name })
        }

    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});
// router.beforeEach((to, from, next) => {

//   if (to.name!== 'Login' && localStorage.getItem('token') == null)

//   {
//     next( {name: 'Login'} )
//   }
//   next()
// })


export default router;