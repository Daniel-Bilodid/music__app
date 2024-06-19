import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/AppHome.vue'
import AppAbout from '@/views/AppAbout.vue'
import AppManage from '@/views/AppManage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: AppAbout
    },
    {
      path: '/manage',
      component: AppManage
    }
  ]
})

export default router
