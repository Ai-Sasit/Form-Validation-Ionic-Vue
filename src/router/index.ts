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
  {
    path: '/form-v1',
    name: 'Form-v1',
    component: () => import('../views/Form-v1.vue')
  },
  {
    path: '/style-address',
    name: 'Style-address',
    component: () => import('../views/style-address.vue')
  },
  {
    path: '/style-current',
    name: 'Style-current',
    component: () => import('../views/style-current.vue')
  },
  {
    path: '/style-form',
    name: 'Style-form',
    component: () => import('../views/style-form.vue')
  },
  {
    path: '/style-tel',
    name: 'Style-tel',
    component: () => import('../views/style-tel.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
