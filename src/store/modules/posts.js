import PostsApi from '@/api/PostsApi'

export default {
  namespaced: true,
  state: {
    error: null,
    isLoading: false,
    selectedPost: localStorage.getItem('selectedPost') ? JSON.parse(localStorage.getItem('selectedPost')) : '',
    posts: [],
    comments: []
  },
  getters: {
    isLoading: state => state.isLoading,
    error: state => state.error,
    posts: state => state.posts,
    selectedPost: state => state.selectedPost,
    comments: state => state.comments
  },
  mutations: {
    updateSelectedPost (state, payload) {
      state.selectedPost = payload
      localStorage.setItem('selectedPost', JSON.stringify(state.selectedPost))
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

    setSelectedPost ({commit}, post) {
      commit('updateSelectedPost', post)
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
