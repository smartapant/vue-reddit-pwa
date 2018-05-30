import Vue from 'vue'
import Vuex from 'vuex'

import posts from './modules/posts'
import subreddits from './modules/subreddits'
import search from './modules/search'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true, // process.env.NODE_ENV !== 'production',,
  modules: {
    posts,
    subreddits,
    search
  },
  state: {},
  mutations: {},
  getters: {}
})

export default store
