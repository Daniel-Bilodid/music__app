import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/AppHome.vue'
import AppAbout from '@/views/AppAbout.vue'
import AppManage from '@/views/AppManage.vue'
import useUserStore from '@/stores/user'

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
      component: AppManage,
      beforeEnter: (to, from, next) => {
        console.log('Manage Route Guard')
        next()
      },
      meta: {
        requiersAuth: true
      }
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
  // console.log(to.meta)

  if (!to.meta.requiersAuth) {
    next()
    return
  }

  const store = useUserStore()

  if (store.userLoggedIn) {
    next()
  } else {
    next({ name: 'home' })
  }
})

export default router
