import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  routes: [
    {
      path: '/',
      component: import('../pages/Home.vue'),
    },
    {
      path: '/about',
      components: {
        default: () => import('../pages/AboutShow.vue'),
        LeftSidebar: () => import('../components/SidebarOne.vue'),
        RightSidebar: () => import('../components/SidebarTwo.vue'),
      },
    },
    {
      path: '/posts',
      components: {
        default: () => import('../pages/PostIndex.vue'),
        RightSidebar: () => import('../components/SidebarOne.vue'),
      },
    },
    {
      path: '/posts/:id',
      components: {
        default: () => import('../pages/PostShow.vue'),
        RightSidebar: () => import('../components/SidebarTwo.vue'),
      },
    },
  ],
  history: createWebHashHistory(),
});

export default router;
