import Vue from 'vue'
import App from './App.vue'
// 导入路由
import VueRouter from 'vue-router'
// 导入ElementUI
import ElementUI from 'element-ui'
// 导入自定义组件



Vue.use(ElementUI)
// 使用路由
Vue.use(VueRouter)

new Vue({
  el: '#app',
  render: h => h(App)
})
