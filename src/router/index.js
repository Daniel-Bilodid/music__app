import { createRouter, createWebHistory } from 'vue-router'

import useUserStore from '@/stores/user'

const AppHome = () => import('@/views/AppHome.vue')
const AppAbout = () => import('@/views/AppAbout.vue')
const AppManage = () => import('@/views/AppManage.vue')
const AppSong = () => import('@/views/AppSong.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/home',
      component: AppHome
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
      name: 'song',
      path: '/song/:id',
      component: AppSong
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
