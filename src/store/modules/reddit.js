import RedditApi from '@/api/RedditApi'

export default {
  namespaced: true,
  state: {
    error: null,
    isLoading: false,
    posts: []
  },
  getters: {
    isLoading: state => state.isLoading,
    error: state => state.error,
    posts: state => state.posts
  },
  mutations: {
    updateError (state, payload) {
      state.error = payload
    },
    updateIsLoading (state, payload) {
      state.isLoading = payload
    },
    updatePosts (state, payload) {
      state.posts = payload
    }
  },
  actions: {
    async getPostsFromSubreddit ({commit}, subreddit) {
      commit('updateError', null)
      commit('updateIsLoading', true)
      try {
        let posts = await RedditApi.fetchPostsFromSubreddit(subreddit)
        commit('updatePosts', posts)
      } catch (err) {
        commit('updateError', err.message)
      } finally {
        commit('updateIsLoading', false)
      }
    }
  }
}
