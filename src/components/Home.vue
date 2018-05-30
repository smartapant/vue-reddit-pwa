<template>
  <posts-list
    :posts="posts"
    :loading="postsLoading"
    @loadMorePosts="getMorePosts({prevPost: lastPost, subreddit: selectedSubreddit})"
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
      ...mapGetters('posts', {
        posts: 'posts',
        postsLoading: 'isLoading'
      }),
      ...mapGetters('subreddits', [
        'selectedSubreddit'
      ]),
      lastPost () {
        return this.posts[this.posts.length - 1]
      }
    },
    watch: {
      selectedSubreddit (val) {
        this.loadPosts()
      }
    },
    mounted () {
      this.loadPosts()
    },
    methods: {
      ...mapActions('posts', {
        getPostsFromSubreddit: 'getPostsFromSubreddit',
        getMorePosts: 'getMorePosts'
      }),
      async loadPosts () {
        await this.getPostsFromSubreddit(this.selectedSubreddit)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
