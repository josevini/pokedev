import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../view/HomeView.vue')
    },
    {
        path: '/info',
        name: 'info',
        component: () => import('../view/InfoView.vue')
    }
  ]
})

export default router
