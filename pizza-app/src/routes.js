
// 引入组件
import Admin from './component/Admin'
import Home from './component/Home'
import Menu from './component/Menu'
import About from './component/about/About'
import Login from './component/Login'
import Register from './component/Register'
// 二级路由
import Contact from './component/about/Contact'
import Delivery from './component/about/Delivery'
import History from './component/about/History'
import OrderingGuide from './component/about/OrderingGuide'
import Default from './component/about/Default'
// 三级路由
import Address from './component/about/contact/Address.vue'
import Phone from './component/about/contact/Phone.vue'


// 配置路由 ： 数组-对象-属性
export const routes = [
  // 点击主页，就会展示home这个组件的内容
  // /代表根路径
  {
    path: '/',
    name:"nameLink",
    // router-view的复用
    components: {
      default:Home,
      'orderingGuide':OrderingGuide,
      'delivary':Delivery,
      'history':History,
    }
  },

  // 点击菜单，就会展示home这个组件的内容
  {
    path: '/menu',
    name: "menuLink",
    component: Menu
  },

  // 管理
  {
    path: '/admin',
    name: 'adminLink',
    component: Admin,
    
  },
  // 关于我们
  {
    path: '/about',
    name: 'aboutLink',
    redirect: '/default',
    component: About,
    // 将二级路由引入
    children: [{
        path: '/contact',
        name: "contactLink",
        component: Contact,

        // 三级路由，在'联系我们'下，有三级菜单
        children: [{
            path: '/phone',
            name: "phoneLink",
            component: Phone,
          },
          {
            path: '/address',
            name: "addressLink",
            component: Address
          }
        ]
      },

      {
        path: '/default',
        name: "defaultLink",
        component: Default
      },

      {
        path: '/history',
        name: "historyLink",
        component: History
      },
      {
        path: '/orderingGuide',
        name: "orderingGuideLink",
        component: OrderingGuide
      },
      {
        path: '/delivery',
        name: "deliveryLink",
        component: Delivery
      },
    ]
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
    redirect: '/'
  }

]

