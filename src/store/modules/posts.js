import PostsApi from '@/api/PostsApi'

export default {
  namespaced: true,
  state: {
    error: null,
    isLoading: false,
    openedPost: localStorage.getItem('openedPost') ? JSON.parse(localStorage.getItem('openedPost')) : '',
    posts: [],
    comments: []
  },
  getters: {
    isLoading: state => state.isLoading,
    error: state => state.error,
    posts: state => state.posts,
    openedPost: state => state.openedPost,
    comments: state => state.comments
  },
  mutations: {
    updateOpenedPost (state, payload) {
      state.openedPost = payload
      localStorage.setItem('openedPost', JSON.stringify(state.openedPost))
    },
    updateError (state, payload) {
      state.error = payload
    },
    updateIsLoading (state, payload) {
      state.isLoading = payload
    },
    updatePosts (state, payload) {
      state.posts = payload
    },
    updateComments (state, payload) {
      state.comments = payload
    },
    concatenatePosts (state, payload) {
      state.posts = [...state.posts, ...payload]
    }
  },
  actions: {
    resetPosts ({commit}) {
      commit('updatePosts', [])
    },

    resetComments ({commit}) {
      commit('updateComments', [])
    },

    setOpenedPost ({commit}, post) {
      commit('updateOpenedPost', post)
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
    },

    async getComments ({commit}, post) {
      commit('updateError', null)
      commit('updateIsLoading', true)
      try {
        let comments = await PostsApi.fetchComments(post)
        commit('updateComments', comments)
      } catch (err) {
        commit('updateError', err.message)
      } finally {
        commit('updateIsLoading', false)
      }
    }
  }
}
