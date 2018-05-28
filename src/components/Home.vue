<template>
  <posts-list
    :posts="posts"
    :loading="postsLoading"
    @loadMorePosts="getMorePosts({prevPost: lastPost})"
  />
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import PostsList from './PostsList.vue'

  export default {
    name: 'Home',
    components: {
      PostsList
    },
    computed: {
      ...mapGetters('reddit', {
        posts: 'posts',
        postsLoading: 'isLoading'
      }),
      lastPost () {
        return this.posts[this.posts.length - 1]
      }
    },
    data () {
      return {

      }
    },
    mounted () {
      this.loadPosts()
    },
    methods: {
      ...mapActions('reddit', {
        getPostsFromSubreddit: 'getPostsFromSubreddit',
        getMorePosts: 'getMorePosts'
      }),
      async loadPosts () {
        await this.getPostsFromSubreddit('vuejs')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
