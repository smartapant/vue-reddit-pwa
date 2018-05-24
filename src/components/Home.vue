<template>
  <posts-list :posts="posts"/>
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
        posts: 'posts'
      })
    },
    mounted () {
      this.loadPosts()
    },
    methods: {
      ...mapActions('reddit', {
        getPostsFromSubreddit: 'getPostsFromSubreddit'
      }),
      async loadPosts () {
        await this.getPostsFromSubreddit('vuejs')
        console.log(this.posts)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
