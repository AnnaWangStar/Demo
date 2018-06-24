import Home from './components/Home'
import Bug from './components/bugs/Bug.vue'
import Analysis from './components/bugs/Analysis.vue'
import Test from './components/qa/Test.vue'
import Tools from './components/tools/Tools.vue'



export const routes = [
    {
      path:'/home',
      component:Home,
    },
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
    },
    // 兼容错误页面
    {
      path:'*',
      redirect: '/home'
    }
  ]
  