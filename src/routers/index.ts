import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: () => import('../views/Homepage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
