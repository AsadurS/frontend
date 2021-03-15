import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/dashboard'),
    meta:{
      title : 'Dashboard'
    }
  },
  {
    path: '/product/create',
    name: 'ProductCreate',
    component: () => import(/* webpackChunkName: "about" */ '../views/product/create'),
    meta:{
      title : 'Product Create'
    }
  },
  {
    path: '/product/manage',
    name: 'ProductManage',
    component: () => import(/* webpackChunkName: "about" */ '../views/product/manage'),
    meta:{
      title : 'Product  Manage'
    },
  },
    {
      path: '/registration',
      name: 'Registration',
      component: () => import(/* webpackChunkName: "about" */ '../views/auth/registration'),
      meta:{
        title : 'registration'
      },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/auth/login'),
    meta:{
      title : 'registration'
    },
 
}
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
export default router;
