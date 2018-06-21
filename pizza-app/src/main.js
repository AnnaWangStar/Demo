// 导入路由
import VueRouter from 'vue-router'

import Vue from 'vue'
import App from './App.vue'
import {routes} from './routes';

// 使用路由
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
  // 
  scrollBehavior(to,from,savedPosition){
    // 返回页面中，直接展示button
    // return {
    //   selector:'.btn'
    // }

    //记住上一个页面滑动的位置
    if(savedPosition){
      return savedPosition
    } else{
      return{x:0,y:0}
    }

  }
})

new Vue({
  el: '#app',
  // router放在实例中使用
  router,
  render: h => h(App)
})
