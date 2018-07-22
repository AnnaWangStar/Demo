// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueResource from 'vue-resource'
Vue.use(VueResource);

// 引入axios
import axios from 'axios'
Vue.prototype.$ajax = axios

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts 




Vue.use(ElementUI);
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
