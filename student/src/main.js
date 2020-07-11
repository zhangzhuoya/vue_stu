import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store/index'
import toast from '@/tool/index'
// 方便请求
import api from './api'

import echarts from "echarts";
Vue.prototype.$echarts = echarts;

Vue.prototype.$api = api
Vue.prototype.$toast = toast

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
