import Vue from 'vue'
// 导入路由
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes'


Vue.use(VueRouter)


const router = new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
