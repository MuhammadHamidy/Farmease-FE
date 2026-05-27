import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { userSession } from '@/store/navigation'

const routes: RouteRecordRaw[] = [
  // Public routes (with Header/Footer shell)
  {
    path: '/',
    component: () => import('../layouts/PublicLayout'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../components/public/PublicHome'),
      },
      {
        path: 'informasi',
        name: 'information',
        component: () => import('../components/public/PublicInfo'),
      },
      {
        path: 'kontak',
        name: 'contact',
        component: () => import('../components/public/PublicContact'),
      },
    ],
  },

  // Fullscreen routes (no Header/Footer)
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/LoginModal'),
  },
  {
    path: '/masuk-kandang',
    name: 'masuk-kandang',
    component: () => import('../components/peternakan/session/MasukKandang'),
  },
  {
    path: '/peternakan',
    name: 'peternakan',
    component: () => import('../modules/peternakan/views/PeternakanPage'),
  },
  {
    path: '/admin/login',
    name: 'admin-login',
    component: () => import('../modules/admin/views/AdminLoginView'),
    beforeEnter: () => {
      if (userSession.value?.role === 'Admin') return { name: 'admin' }
      return true
    },
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../modules/admin/views/AdminPage'),
    beforeEnter: () => {
      if (userSession.value?.role === 'Admin') return true
      return { name: 'admin-login' }
    },
  },

  // Fallback
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
