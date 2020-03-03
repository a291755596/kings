import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import http from './http'

Vue.config.productionTip = false

// 把http添加到vue实例中去之后
// 可以在任意页面通过this.http访问这个接口
Vue.prototype.$http = http




new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
