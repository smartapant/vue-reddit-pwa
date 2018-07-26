<template>
  <v-card>
    <v-card-title primary-title>
      <div class="card-header">
        <div class="card-header__statistics">
          <span class="card-header__statistics__ups">
            <v-icon>keyboard_arrow_up</v-icon> {{ selectedPost.ups }}
          </span>
          Submitted by <a class="card-header__statistics__author">{{ selectedPost.author }}</a> {{timeAgo}}
        </div>
        <div>
          <h1 class="selected-post-title">{{ selectedPost.title }}</h1>
        </div>
        <div class="card-header__comments">
          <v-icon color="blue darken-2" small class="posts-list-item-comment-icon">comment</v-icon>
          {{ selectedPost.num_comments }} comments
        </div>
      </div>
    </v-card-title>
    <v-card-text>
      <div class="post-item__content post-item__url-content"
           v-if="selectedPost.post_hint && selectedPost.post_hint === 'image'">
        <img class="post-item__image" :src="selectedPost.url"/>
      </div>
      <div class="post-item__content post-item__url-content"
           v-if="selectedPost.post_hint && selectedPost.post_hint === 'link'">
        <a :href="selectedPost.url">
          {{ selectedPost.url }}
        </a>
      </div>
      <div class="post-item__content post-item__text-content"
           v-if="!selectedPost.post_hint">
        <span v-if="selectedPost.selftext">
          {{ selectedPost.selftext }}
        </span>
        <a v-else :href="selectedPost.url">
          {{ selectedPost.url }}
        </a>
      </div>
      <div class="post-item__comment">
        <h2 class="stepper-header">Comments</h2>
        <div v-for="comment in comments">
          <selected-post-comment :comment="comment"/>
        </div>
      </div>
    </v-card-text>
    <v-card-actions v-if="selectedPost.num_comments !== 0">
    </v-card-actions>
  </v-card>
</template>

<script>
  import moment from 'moment'
  import {mapGetters, mapActions} from 'vuex'
  import SelectedPostComment from './SelectedPostComment'

  export default {
    name: 'SelectedPost',
    components: { SelectedPostComment },
    mounted () {
      this.getComments(this.selectedPost)
    },
    methods: {
      ...mapActions('posts', [
        'getComments'
      ])
    },
    computed: {
      ...mapGetters('posts', {
        selectedPost: 'selectedPost',
        comments: 'comments'
      }),
      timeAgo () {
        const date = new Date(parseInt(this.selectedPost.created_utc, 10) * 1000)
        return moment(date).fromNow()
      }
    }
  }
</script>

<style>
  .card-header {
    margin-left: 10px;
  }

  .card-header__statistics {
    margin-bottom: 10px;
  }

  .card-header__statistics__ups {
    margin-right: 20px;
  }

  .card-header__statistics__author {
    margin-left: 5px;
    margin-right: 5px;
  }

  .card-header__comments {
    margin-top: 10px;
  }

  .post-item__text-content,  .post-item__url-content{
    margin-left: 10px;
  }

  .post-item__image {
    width: 80%;
    height: 80%;
  }

  .selected-post-title {
    color: rgba(0,0,0,0.54);
  }

  .v-stepper--vertical .v-stepper__step {
    padding-left: 10px;
  }

  .v-stepper--vertical .v-stepper__content {
    margin-left: 20px;
    padding-top: 5px;
    padding-left: 15px;
    border-left: 1px solid #b3d4fc;
  }

  .stepper-header {
    color: rgba(0,0,0,0.54);
    margin-left: 10px;
    margin-top: 15px;
  }
</style>
