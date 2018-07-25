export default {
  namespaced: true,
  state: {
    savedSubreddits: localStorage.getItem('savedSubreddits') ? JSON.parse(localStorage.getItem('savedSubreddits')) : [],
    selectedSubreddit: localStorage.getItem('selectedSubreddit') ? JSON.parse(localStorage.getItem('selectedSubreddit')) : ''
  },
  getters: {
    savedSubreddits: state => state.savedSubreddits,
    selectedSubreddit: state => state.selectedSubreddit
  },
  mutations: {
    updateSelectedSubreddit (state, payload) {
      state.selectedSubreddit = payload
      localStorage.setItem('selectedSubreddit', JSON.stringify(state.selectedSubreddit))
    },
    updateSavedSubreddits (state, payload) {
      state.savedSubreddits = payload
      localStorage.setItem('savedSubreddits', JSON.stringify(state.savedSubreddits))
    }
  },
  actions: {
    selectSubreddit ({commit}, subreddit) {
      console.log(subreddit)
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
