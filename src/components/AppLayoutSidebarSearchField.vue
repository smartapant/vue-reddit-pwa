<template>
  <v-container class="app-layout-sidebar-search-field">
    <v-layout>
      <v-flex>
        <v-select
          :loading="searchLoading"
          :items="items"
          :search-input.sync="search"
          v-model="select"
          label="Explore subreddits"
          autocomplete
          dense
          cache-items
          @input="onSelectionChange"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'AppLayoutSidebarSearchField',
    props: {

    },
    computed: {
      ...mapGetters('search', {
        searchLoading: 'isLoading',
        searchError: 'error',
        subredditSearchResults: 'subredditSearchResults'
      })
    },
    data () {
      return {
        loading: false,
        items: [],
        search: null,
        select: []
      }
    },
    watch: {
      search (val) {
        // TODO: Refactor
        this.$nextTick(() => {
          if (val && typeof this.select !== 'string') {
            this.querySelections(val)
          }
        })
      }
    },
    methods: {
      ...mapActions('search', [
        'searchSubreddits'
      ]),
      ...mapActions('subreddits', [
        'selectSubreddit',
        'saveSubreddit'
      ]),
      async querySelections (v) {
        await this.searchSubreddits(v)
        if (!this.searchError) {
          this.mapSubredditsToSelectItems(this.subredditSearchResults)
        } else {
          console.log(this.searchError)
        }
      },
      mapSubredditsToSelectItems (subreddits) {
        this.items = subreddits.map(s => {
          return {
            text: `${s.url} - ${s.title}`,
            value: `${s.url}`
          }
        })
      },
      onSelectionChange (selection) {
        this.saveSubreddit(selection)
        this.selectSubreddit(selection)
      }
    }
  }
</script>

<style>

</style>
