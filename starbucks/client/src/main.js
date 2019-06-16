// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/'
import baseui from './plugins/base-ui'
import store from './store/'
import "./utils/flexble.js"
import "./static/fonts/iconfont.css"
import "./static/scss/common.scss"


Vue.use(baseui)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
