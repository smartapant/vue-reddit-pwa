import SearchApi from '@/api/SearchApi'

export default {
  namespaced: true,
  state: {
    error: null,
    isLoading: false,
    subredditSearchResults: []
  },
  getters: {
    isLoading: state => state.isLoading,
    error: state => state.error,
    subredditSearchResults: state => state.subredditSearchResults
  },
  mutations: {
    updateError (state, payload) {
      state.error = payload
    },
    updateIsLoading (state, payload) {
      state.isLoading = payload
    },
    updateSubredditSearchResults (state, payload) {
      state.subredditSearchResults = payload
    }
  },
  actions: {
    async searchSubreddits ({commit}, query) {
      commit('updateError', null)
      commit('updateIsLoading', true)
      try {
        let subreddits = await SearchApi.searchSubreddits(query)
        commit('updateSubredditSearchResults', subreddits)
      } catch (err) {
        commit('updateError', err.message)
      } finally {
        commit('updateIsLoading', false)
      }
    }
  }
}
