<template>
  <v-toolbar
    app
    dark
    color="primary"
  >
    <v-toolbar-side-icon @click.stop="changeSidebarState"></v-toolbar-side-icon>
    <v-toolbar-title>
      <span >Vue Reddit PWA {{ subredditTitle }}</span>
    </v-toolbar-title>
    <div v-if="!isHome" class="back-button">
      <router-link :to="{ path: '/' }">
        <v-btn icon>
          <v-icon>reply</v-icon>
        </v-btn>
      </router-link>
    </div>
  </v-toolbar>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'AppLayoutNavbar',
    props: {
      sidebarShownState: {
        type: Boolean,
        default: null
      }
    },
    computed: {
      ...mapGetters('subreddits', [
        'selectedSubreddit'
      ]),
      subredditTitle () {
        return this.selectedSubreddit ? `- ${this.selectedSubreddit}` : ''
      },
      isHome () {
        return this.$route.name === 'Subreddit'
      }
    },
    methods: {
      changeSidebarState () {
        this.$emit('sidebarStateChanged', !this.sidebarShownState)
      }
    }
  }
</script>

<style>
  .back-button {
    position: absolute;
    right: 10px;
  }
</style>
