import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Bug from './components/bugs/Bug.vue'
import Analysis from './components/bugs/Analysis.vue'
import Test from './components/qa/Test.vue'
import Tools from './components/tools/Tools.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/bugs/bug',
    component: Bug
  },
  {
    path:'/bugs/analysis',
    component:Analysis
  },
  {
    path: '/qa/test',
    component: Test
  },
  {
    path: '/tools',
    component: Tools
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
