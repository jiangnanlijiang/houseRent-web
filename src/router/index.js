import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    components: () => import('../views/Login')
  }
]

const router = new VueRouter({
  routes
})

export default router
