import Vue from 'vue'
import App from './App'

require('bootstrap/dist/css/bootstrap.css')
require('devicons/css/devicons.css')
require('font-awesome/css/font-awesome.css')
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
