<template>
  <div class="posts-list">
    <v-list
      v-infinite-scroll="loadMore"
      infinite-scroll-distance="10"
      infinite-scroll-disabled="loading"
      three-line
      v-show="posts.length"
    >
      <posts-list-item
        v-for="post in posts"
        :key="post.id"
        :post="post"
      />
    </v-list>
   <posts-list-loader v-if="loading"/>
  </div>
</template>

<script>
  import infiniteScroll from 'vue-infinite-scroll'
  import PostsListItem from './PostsListItem.vue'
  import PostsListLoader from './PostsListLoader.vue'
  export default {
    name: 'PostsList',
    components: {
      PostsListItem,
      PostsListLoader
    },
    directives: {
      infiniteScroll
    },
    props: {
      posts: {
        type: Array,
        default: []
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {

      }
    },
    methods: {
      loadMore () {
        console.log('load more!!!!')
      }
    }
  }
</script>

<style>

</style>
