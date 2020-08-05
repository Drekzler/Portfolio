import Vue from 'vue'
import App from './App.vue'
import store from './store/store.js'
import routes from './router.js'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify';
const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  vuetify,
  router
}).$mount('#app')

import './assets/styles/styles.scss'

