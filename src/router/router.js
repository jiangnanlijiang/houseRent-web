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
      redirect: '/index'
    },
    {
      path: '/login',
      component: () => import('../views/Login')
    },
    {
      path: '/register',
      component: () => import('../views/Register')
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
          path: '/rent/houseInfo',
          component: () => import('../views/rent/houseInfo'),
        },
        {
          path: '/pubHouse',
          component: () => import('../views/pubHouse/index')
        },
        {
          path: '/control',
          component: () => import('../views/control/index'),
          // redirect: '/control/sysConfig',
          children: [
            {
              path: '/control/sysConfig',
              component: () => import('../views/control/sys/sysConfig/index')
            },
            {
              path: '/control/role',
              component: () => import('../views/control/sys/role/index')
            },
            {
              path: '/control/log',
              component: () => import('../views/control/sys/log/index')
            },
            {
              path: '/control/admin',
              component: () => import('../views/control/sys/admin/index')
            },
            {
              path: '/control/user',
              component: () => import('../views/control/basic/user/index')
            },
            {
              path: '/control/house',
              component: () => import('../views/control/basic/house/index')
            },
            {
              path: '/control/message',
              component: () => import('../views/control/basic/message/index')
            },
            {
              path: '/control/comment',
              component: () => import('../views/control/basic/comment/index')
            },
            {
              path: '/control/contractCenter',
              component: () => import('../views/control/business/rentContract/index')
            }
          ]
        }
      ]
    }
  ]
})
