import { createRouter, createWebHashHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/message/:id',
    component: () => import('../views/ViewMessagePage.vue')
  },
  {
    path: '/current-address',
    name: 'Current-address',
    component: () => import('../views/Current-address.vue')
  },
  {
    path: '/form-input',
    name: 'Form-Input',
    component: () => import('../views/Form-input.vue')
  },
  {
    path: '/form-input-tel',
    name: 'Form-input-tel',
    component: () => import('../views/Form-input-tel.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
