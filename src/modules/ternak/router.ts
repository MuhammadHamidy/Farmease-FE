import type { RouteRecordRaw } from 'vue-router';
import { userSession } from '@/store/navigation';

export const ternakRoutes: RouteRecordRaw[] = [
  {
    path: '/ternak',
    component: () => import('./layouts/TernakLayout'),
    children: [
      {
        path: '',
        name: 'ternak',
        component: () => import('./views/PeternakanPage'),
      },
      {
        path: 'masuk-kandang',
        name: 'masuk-kandang',
        component: () => import('./components/session/MasukKandang'),
      },
    ],
  },
  {
    path: '/peternakan',
    redirect: { name: 'ternak' },
  },
  {
    path: '/masuk-kandang',
    redirect: { name: 'masuk-kandang' },
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('./admin/views/AdminPage'),
    beforeEnter: () => {
      const role = userSession.value?.role;
      if (role === 'Admin' || role === 'Owner' || role === 'Pemilik') return true;
      return { name: 'home' };
    },
  },
];
