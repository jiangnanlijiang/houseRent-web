import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: () => import('../views/Login')
    },
    {
      path: '/index',
      component: () => import('../views/main/index'),
      children: [
        {
          path: '/',
          redirect: '/show'
        },
        {
          path: '/show',
          component: () => import('../views/main/mainBody')
        },
        {
          path: '/rent',
          component: () => import('../views/rent/index')
        },
        {
          path: '/pubHouse',
          component: () => import('../views/pubHouse/index')
        },
        {
          path: '/controller',
          component: () => import('../views/sys/index')
        }
      ]
    }
  ]
})
