import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import './plugins/element.js'

// 个人配置
import './assets/CSS/style.css'

//websocket
import webSocketServer from './utils/webSocket'
Vue.prototype.$webSocketServer = webSocketServer;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
