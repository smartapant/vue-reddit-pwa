<template>
  <v-navigation-drawer
    app
    :value="sidebarShownState"
    @input="onSidebarStateChanged"
  >
    <v-list dense>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
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
  export default {
    name: 'AppLayoutSidebar',
    props: {
      sidebarShownState: {
        type: Boolean,
        default: null
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
