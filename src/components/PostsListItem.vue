<template>
  <div class="posts-list-item">
    <router-link :to="{ path: `${post.id}` }">
      <v-list-tile :key="post.title" avatar @click="openPost()">
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
              <a @click="moveToComments()">
                <v-icon color="blue darken-2" small class="posts-list-item-comment-icon">comment</v-icon>
                {{post.num_comments}} comments
              </a>
            </div>
          </v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </router-link>
  </div>
</template>

<script>
  import moment from 'moment'
  import { mapActions } from 'vuex'

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
        return this.isURL(this.post.thumbnail) ? this.post.thumbnail : 'https://i.imgur.com/kttYoFL.png'
      },
      timeAgo () {
        const date = new Date(parseInt(this.post.created_utc, 10) * 1000)
        return moment(date).fromNow()
      }
    },
    methods: {
      ...mapActions('posts', [
        'setSelectedPost'
      ]),
      isURL (str) {
        // eslint-disable-next-line no-useless-escape
        return /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/.test(str)
      },
      openPost () {
        this.setSelectedPost(this.post)
        window.open(
          this.post.url,
          'blank'
        )
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
    width: 20px;
  }

  .posts-list-item a {
    text-decoration: none;
  }
</style>
