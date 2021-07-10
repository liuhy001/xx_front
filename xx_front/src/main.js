import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import axios from 'axios'
import utils from './plugins/util'

import moment from 'moment'
Vue.prototype.$moment = moment
moment.locale('zh-cn'); //汉化

Vue.prototype.HTTP = 'http://10.1.168.110:8081/'
Vue.prototype.$utils = utils
Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
