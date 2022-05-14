import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/portfolio',
    name: 'portfolio',

    component: () => import(/* webpackChunkName: "about" */ '../views/PortfolioView')
  },
  {
    path: '/about',
    name: 'about',

    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView')
  },
  {
    path: '/store',
    name: 'store',

    component: () => import(/* webpackChunkName: "about" */ '../views/StoreView')
  },
  {
    path: '/axios',
    name: 'axios',

    component: () => import(/* webpackChunkName: "about" */ '../views/AxiosView')
  },
  {
    path: '/register',
    name: 'register',

    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterView')
  },
  {
    path: '/novaposhta',
    name: 'novaposhta',

    component: () => import(/* webpackChunkName: "about" */ '../views/NovaPoshtaView')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
