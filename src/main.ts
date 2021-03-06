// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { i18n } from './i18n'
import axios from 'axios'
import './api/axios.tool'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.config.productionTip = false
Vue.use(mavonEditor)

/* eslint-disable no-new */
new Vue({
  router,
  i18n,
  components: {
    App
  },
  template: '<App/>'
}).$mount('#app')
