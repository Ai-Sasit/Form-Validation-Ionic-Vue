import { createRouter, createWebHashHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/menu.vue'),
  },
  {
    path: '/form-tooltip',
    name: 'FormTooltip',
    component: () => import('../views/FormPopover.vue') 
  },
  {
    path: '/current-address',
    name: 'Current-address',
    component: () => import('../views/CurrentAddress.vue')
  },
  {
    path: '/fix-address',
    name: 'Form-Input',
    component: () => import('../views/FixAddress.vue')
  },
  {
    path: '/telephone',
    name: 'Form-input-tel',
    component: () => import('../views/Telephone.vue')
  },
  {
    path: '/form-dialog',
    name: 'Form-dialog',
    component: () => import('../views/DialogForm/FormDialog.vue')
  },
  {
    path: '/fix-address-dialog',
    name: 'dialog-fix-address',
    component: () => import('../views/DialogForm/FixAddress.vue')
  },
  {
    path: '/telephone-dialog',
    name: 'dialog-telephone',
    component: () => import('../views/DialogForm/Telephone.vue')
  },
  {
    path: '/current-address-dialog',
    name: 'dialog-current-address',
    component: () => import('../views/DialogForm/CurrentAddress.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
