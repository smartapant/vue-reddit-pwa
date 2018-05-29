import Vue from 'vue'
import Vuex from 'vuex'

import reddit from './modules/reddit'
import search from './modules/search'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true, // process.env.NODE_ENV !== 'production',,
  modules: {
    reddit,
    search
  },
  state: {},
  mutations: {},
  getters: {}
})

export default store
