import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import './plugins/element.js'
import request from './utils/request'

// 个人配置
import './assets/CSS/style.css'

Vue.prototype.request = request

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
