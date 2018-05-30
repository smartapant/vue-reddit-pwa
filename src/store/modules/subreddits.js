export default {
  namespaced: true,
  state: {
    savedSubreddits: [],
    selectedSubreddit: ''
  },
  getters: {
    savedSubreddits: state => state.savedSubreddits,
    selectedSubreddit: state => state.selectedSubreddit
  },
  mutations: {
    updateSelectedSubreddit (state, payload) {
      state.selectedSubreddit = payload
    },
    updateSavedSubreddits (state, payload) {
      state.savedSubreddits = payload
    }
  },
  actions: {
    selectSubreddit ({commit}, subreddit) {
      commit('updateSelectedSubreddit', subreddit)
    },

    saveSubreddit ({commit, state}, subreddit) {
      let subreddits = state.savedSubreddits.slice()
      if (!subreddits.includes(subreddit)) {
        subreddits.unshift(subreddit)
        commit('updateSavedSubreddits', subreddits)
      }
    }
  }
}
