import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'flex3.1',
      component: () => import('../views/flex31.vue')
    },
    {
      path: '/flex23',
      name: 'flex2.3',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/flex23.vue'),
    },
    {
      path: '/cars',
      name: 'CarsAPI',
      component : () => import("../views/CarsAPI.vue")
    }
  ],
})

export default router
