// 导入路由
import VueRouter from 'vue-router'

import Vue from 'vue'
import App from './App.vue'
import {routes} from './routes';
import axios from 'axios'
import {store} from './store/store';


// 使用路由
Vue.use(VueRouter)

//配置全局的默认路径
axios.defaults.baseURL='https://wd6846125205vdfnry.wilddogio.com/'
// 配置Vue原型
Vue.prototype.http = axios

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
