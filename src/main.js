// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './routes'
import {store} from './store/store'
import axios from 'axios'

Vue.use(VueRouter)
console.log(store)
const router = new VueRouter({
  routes
})
/* eslint-disable no-new */
new Vue({
  store,
  router,
  axios,
  el: '#app',
  template: '<App/>',
  components: { App }
})
