import Vue from 'vue'
import App from './App.vue'
// 导入路由
import VueRouter from 'vue-router'
// 引入home组件
import Home from './component/Home'
import Menu from './component/Menu'
import About from './component/about/About'
import Login from './component/Login'
import Register from './component/Register'



// 使用路由
Vue.use(VueRouter)

// 配置路由 ： 数组-对象-属性
const routes = [
  // 点击主页，就会展示home这个组件的内容
  // /代表根路径
  {
    path: '/',
    component: Home
  },

  // 点击菜单，就会展示home这个组件的内容
  {
    path: '/menu',
    component: Menu
  },

  // 关于我们
  {
    path: '/about',
    component: About
  },
  // 登录
  {
    path: '/login',
    component: Login
  },
  // 注册
  {
    path: '/register',
    component: Register
  },
  // 兼容错误页面
  {
    path: '*',
    redirect:'/'
  }

]

// 实例化一个router
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
