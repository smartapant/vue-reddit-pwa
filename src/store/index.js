import Vue from 'vue'
import Vuex from 'vuex'

import reddit from './modules/reddit'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true, // process.env.NODE_ENV !== 'production',,
  modules: {
    reddit
  },
  state: {},
  mutations: {},
  getters: {}
})

export default store
