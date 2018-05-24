<template>
  <v-list-tile :key="post.title" avatar @click="" class="posts-list-item">
    <v-list-tile-avatar>
      <img :src="thumbnail"/>
    </v-list-tile-avatar>
    <v-list-tile-content>
      <v-list-tile-title v-html="post.title"/>
      <v-list-tile-sub-title>
        <div>
          Submitted {{timeAgo}} by <a>{{post.author}}</a>
        </div>
        <div class="posts-list-item-metrics">
          <span>
            <v-icon>keyboard_arrow_up</v-icon> {{post.ups}}
          </span>
          <a>
            <v-icon color="blue darken-2" small class="posts-list-item-comment-icon">comment</v-icon> {{post.num_comments}} comments
          </a>
        </div>
      </v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
  import moment from 'moment'
  export default {
    name: 'PostsListItem',
    props: {
      post: {
        type: Object,
        default: {}
      }
    },
    computed: {
      thumbnail () {
        return this.isURL(this.post.thumbnail) ? this.post.thumbnail : 'http://icons.iconarchive.com/icons/uiconstock/socialmedia/256/Reddit-icon.png'
      },
      timeAgo () {
        const date = new Date(parseInt(this.post.created_utc, 10) * 1000)
        return moment(date).fromNow()
      }
    },

    methods: {
      isURL (str) {
        // eslint-disable-next-line no-useless-escape
        return /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/.test(str)
      }
    }
  }
</script>

<style scoped>
  .posts-list-item-metrics {
    display: flex;
    flex-direction: row;
    justify-content: start;
  }

  .posts-list-item-metrics > *:first-child {
    margin-right: 24px;
  }

  .posts-list-item-comment-icon {
    line-height: 24px;
  }
</style>
