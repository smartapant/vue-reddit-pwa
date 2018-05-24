<template>
  <v-list class="posts-list" three-line>
    <posts-list-item
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </v-list>
</template>

<script>
  import PostsListItem from './PostsListItem.vue'
  export default {
    name: 'PostsList',
    components: {
      PostsListItem
    },
    props: {
      posts: {
        type: Array,
        default: []
      }
    },
    data () {
      return {

      }
    }
  }
</script>

<style>

</style>
