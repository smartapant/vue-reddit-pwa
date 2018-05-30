<template>
  <v-toolbar
    app
    dark
    color="primary"
  >
    <v-toolbar-side-icon @click.stop="changeSidebarState"></v-toolbar-side-icon>
    <v-toolbar-title>Vue Reddit PWA {{subredditTitle}}</v-toolbar-title>
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

</style>
