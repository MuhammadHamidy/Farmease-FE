import { createRouter, createWebHistory } from 'vue-router';
import { ssoRoutes } from '@/modules/sso/router';
import { ternakRoutes } from '@/modules/ternak/router';
import { kebunRoutes } from '@/modules/kebun/router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...ssoRoutes,
    ...ternakRoutes,
    ...kebunRoutes,
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
});

export default router;
