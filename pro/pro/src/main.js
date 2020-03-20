// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
import axios from 'axios';
Vue.prototype.$axios = axios;
/* eslint-disable no-new */
import breadNav from '@/components/bread.js'//引用全局组件Button
Vue.use(breadNav);//使用全局组件BreadCrumb

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
