<template>
  <v-navigation-drawer
    app
    :value="sidebarShownState"
    @input="onSidebarStateChanged"
  >
    <app-layout-sidebar-search-field />
    <v-list dense>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon>contact_mail</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Contact</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
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
    data () {
      return {

      }
    },
    methods: {
      onSidebarStateChanged (newState) {
        this.$emit('sidebarStateChanged', newState)
      }
    }
  }
</script>

<style>

</style>
