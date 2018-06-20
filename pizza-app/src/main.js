// 导入路由
import VueRouter from 'vue-router'

import Vue from 'vue'
import App from './App.vue'
import {routes} from './routes';

// 使用路由
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  // router放在实例中使用
  router,
  render: h => h(App)
})
