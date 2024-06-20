import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/AppHome.vue'
import AppAbout from '@/views/AppAbout.vue'
import AppManage from '@/views/AppManage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'about',
      path: '/about',
      component: AppAbout
    },
    {
      name: 'manage',
      // alias: '/manage',
      path: '/manage-music',
      component: AppManage
    },
    {
      path: '/manage',
      redirect: { name: 'manage' }
    },
    {
      path: '/:catchAll(.*)*',
      redirect: { name: 'home' }
    }
  ],
  linkExactActiveClass: 'text-yellow-500'
})

router.beforeEach((to, from, next) => {
  console.log(to, from)

  console.log('from global guard')

  next()
})

export default router
