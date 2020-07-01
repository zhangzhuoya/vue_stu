import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store/index'
// 方便请求
import api from './api'
Vue.prototype.$api = api
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
