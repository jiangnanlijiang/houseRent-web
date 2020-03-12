import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const [routerPush, routerReplace] = [Router.prototype.push, Router.prototype.replace]

Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}

Router.prototype.replace = function replace (location) {
  return routerReplace.call(this, location).catch(error => error)
}

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
