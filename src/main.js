// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import 'vuetify/src/stylus/app.styl'
import {
  Vuetify,
  VApp,
  VBtn,
  VGrid,
  VNavigationDrawer,
  VFooter,
  VToolbar,
  VList,
  VSubheader,
  VSelect,
  VProgressCircular,
  VIcon,
  transitions
} from 'vuetify'
import { Ripple } from 'vuetify/es5/directives'
import colors from 'vuetify/es5/util/colors'
import 'babel-polyfill'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'

import App from './App'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'

Vue.use(Vuetify, {
  components: {
    VApp,
    VBtn,
    VGrid,
    VNavigationDrawer,
    VFooter,
    VToolbar,
    VList,
    VSubheader,
    VSelect,
    VProgressCircular,
    VIcon,
    transitions
  },
  directives: {
    Ripple
  },
  theme: {
    primary: colors.blue.lighten2
  }
})

sync(store, router)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
