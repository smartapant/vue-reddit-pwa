<template>
  <v-navigation-drawer
    app
    :value="sidebarShownState"
    @input="onSidebarStateChanged"
  >
    <app-layout-sidebar-search-field />
    <v-list dense>
      <v-subheader>Visited subreddits:</v-subheader>
      <v-list-tile @click="selectSubreddit('')">
        <a>Frontpage</a>
      </v-list-tile>
      <v-list-tile
        @click="selectSubreddit(subreddit)"
        v-for="(subreddit, index) in savedSubreddits"
        :key="index"
      >
        <a>{{subreddit}}</a>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import AppLayoutSidebarSearchField from './AppLayoutSidebarSearchField.vue'
  export default {
    name: 'AppLayoutSidebar',
    components: {
      AppLayoutSidebarSearchField
    },
    props: {
      sidebarShownState: {
        type: Boolean,
        default: null
      }
    },
    computed: {
      ...mapGetters('subreddits', [
        'savedSubreddits'
      ])
    },
    data () {
      return {

      }
    },
    methods: {
      ...mapActions('subreddits', [
        'selectSubreddit'
      ]),
      onSidebarStateChanged (newState) {
        this.$emit('sidebarStateChanged', newState)
      }
    }
  }
</script>

<style>

</style>
