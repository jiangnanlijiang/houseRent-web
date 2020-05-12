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

const router = new Router({
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
          path: '/pubHouse/houseInfo',
          component: () => import('../views/pubHouse/houseInfo')
        },
        {
          path: '/control',
          component: () => import('../views/control/index'),
          redirect: '/control/index',
          children: [
            {
              path: '/control/index',
              component: () => import('../views/control/home')
            },
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
    },
    {
      path: '/user',
      component: () => import('../views/user/index')
    },
    {
      path: '/message',
      component: () => import('../views/message/index')
    }
  ]
})

export default router;

router.beforeEach((to, from, next) => {
    const path = to.path;
    if(path!='/login' && path!='/register' && sessionStorage.getItem("token") == null){
      setTimeout(function () {
        next({path: '/login'});
      }, 1000)
    }
    else next();
})
