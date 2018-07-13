<template>
  <div class="posts-item">
    <h1>{{ openedPost.title }}</h1>
    <div class="post-item__content"
         v-if="!openedPost.post_hint">
      <span v-if="openedPost.selftext">
        {{ openedPost.selftext }}
      </span>
      <a v-else :href="openedPost.url">
        {{ openedPost.url }}
      </a>
    </div>
    <div class="post-item__image"
         v-if="openedPost.post_hint && openedPost.post_hint === 'image'">
      <img :src="openedPost.url"/>
    </div>
    <div class="post-item__image"
         v-if="openedPost.post_hint && openedPost.post_hint === 'link'">
      <a :href="openedPost.url">
        {{ openedPost.url }}
      </a>
    </div>
    <div class="post-item__comments"
         v-if="openedPost.num_comments !== 0">
      <h3>Comments</h3>
      <div class="post-item__comment"
           v-for="comment in comments">
        <comments-item :comment="comment"/>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import CommentsItem from './CommentsItem'

  export default {
    name: 'PostsItem',
    components: {CommentsItem},
    mounted () {
      this.getComments(this.openedPost)
    },
    methods: {
      ...mapActions('posts', [
        'getComments'
      ])
    },
    computed: {
      ...mapGetters('posts', {
        openedPost: 'openedPost',
        comments: 'comments'
      })
    }
  }
</script>

<style>
  .post-item__comments {
    margin-top: 10px;
  }
</style>

