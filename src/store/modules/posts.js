import PostsApi from '@/api/PostsApi'

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
    },
    concatenatePosts (state, payload) {
      state.posts = [...state.posts, ...payload]
    }
  },
  actions: {
    resetPosts ({commit}) {
      commit('updatePosts', [])
    },

    async getPostsFromSubreddit ({commit}, subreddit) {
      commit('updateError', null)
      commit('updateIsLoading', true)
      try {
        let posts = await PostsApi.fetchPostsFromSubreddit(subreddit)
        commit('updatePosts', posts)
      } catch (err) {
        commit('updateError', err.message)
      } finally {
        commit('updateIsLoading', false)
      }
    },

    async getMorePosts ({commit}, {prevPost, subreddit}) {
      commit('updateError', null)
      commit('updateIsLoading', true)
      try {
        let posts = await PostsApi.fetchMorePosts(prevPost, subreddit)
        commit('concatenatePosts', posts)
      } catch (err) {
        commit('updateError', err.message)
      } finally {
        commit('updateIsLoading', false)
      }
    }
  }
}
